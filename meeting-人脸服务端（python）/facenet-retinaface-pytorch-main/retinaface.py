import time
import cv2
import numpy as np
import torch
import torch.nn as nn
from PIL import Image, ImageDraw, ImageFont
from tqdm import tqdm
from nets.facenet import Facenet
from nets_retinaface.retinaface import RetinaFace
from utils.anchors import Anchors
from utils.config import cfg_mnet
from utils.utils import (Alignment_1, compare_faces, letterbox_image,preprocess_input)
from utils.utils_bbox import (decode, decode_landm, non_max_suppression,retinaface_correct_boxes)



def cv2ImgAddText(img, label, left, top, textColor=(255, 255, 255)):
    img = Image.fromarray(np.uint8(img))
    font = ImageFont.truetype(font='model_data/simhei.ttf', size=20)

    draw = ImageDraw.Draw(img)
    label = label.encode('utf-8')
    draw.text((left, top), str(label, 'UTF-8'), fill=textColor, font=font)
    return np.asarray(img)

class Retinaface(object):
    _defaults = {
        "retinaface_model_path": 'model_data/Epoch1-Total_Loss8.0664.pth',
        "retinaface_backbone": "mobilenet",
        "confidence": 0.5,
        "nms_iou": 0.3,
        "retinaface_input_shape": [640, 640, 3],
        "letterbox_image": True,
        "facenet_model_path": 'model_data/facenet_mobilenet.pth',
        #   facenet所使用的主干网络， mobilenet
        "facenet_backbone": "mobilenet",
        "facenet_input_shape": [160, 160, 3],
        "facenet_threhold": 0.9,
        #   是否使用Cuda
        "cuda": True
    }

    @classmethod
    def get_defaults(cls, n):
        if n in cls._defaults:
            return cls._defaults[n]
        else:
            return "Unrecognized attribute name '" + n + "'"

    #   初始化Retinaface
    def __init__(self, encoding=0, **kwargs):
        self.__dict__.update(self._defaults)
        for name, value in kwargs.items():
            setattr(self, name, value)
        #主干网络的config信息
        self.cfg = cfg_mnet
        self.anchors = Anchors(self.cfg, image_size=(
        self.retinaface_input_shape[0], self.retinaface_input_shape[1])).get_anchors()
        self.generate()

        try:
            self.known_face_encodings = np.load(
                "model_data/{backbone}_face_encoding.npy".format(backbone=self.facenet_backbone))
            self.known_face_names = np.load("model_data/{backbone}_names.npy".format(backbone=self.facenet_backbone))
        except:
            if not encoding:
                print("载入已有人脸特征失败，请检查model_data下面是否生成了相关的人脸特征文件。")
            pass

    def generate(self):
        self.net = RetinaFace(cfg=self.cfg, phase='eval', pre_train=False).eval()
        self.facenet = Facenet(backbone=self.facenet_backbone, mode="predict").eval()
        state_dict = torch.load(self.retinaface_model_path)
        self.net.load_state_dict(state_dict)
        state_dict = torch.load(self.facenet_model_path)
        self.facenet.load_state_dict(state_dict, strict=False)
        if self.cuda:
            self.net = nn.DataParallel(self.net)
            self.net = self.net.cuda()

            self.facenet = nn.DataParallel(self.facenet)
            self.facenet = self.facenet.cuda()

    def encode_face_dataset(self, image_paths, names):
        face_encodings = []
        for index, path in enumerate(tqdm(image_paths)):
            image = np.array(Image.open(path).convert("RGB"), np.float32)

            old_image = image.copy()
            im_height, im_width, _ = np.shape(image)
            #   计算scale，用于将获得的预测框转换成原图的高宽
            scale = [
                np.shape(image)[1], np.shape(image)[0], np.shape(image)[1], np.shape(image)[0]
            ]
            scale_for_landmarks = [
                np.shape(image)[1], np.shape(image)[0], np.shape(image)[1], np.shape(image)[0],
                np.shape(image)[1], np.shape(image)[0], np.shape(image)[1], np.shape(image)[0],
                np.shape(image)[1], np.shape(image)[0]
            ]
            if self.letterbox_image:
                image = letterbox_image(image, [self.retinaface_input_shape[1], self.retinaface_input_shape[0]])
                anchors = self.anchors
            else:
                anchors = Anchors(self.cfg, image_size=(im_height, im_width)).get_anchors()
            #   将处理完的图片传入Retinaface网络当中进行预测
            with torch.no_grad():
                #   图片预处理，归一化。
                image = torch.from_numpy(preprocess_input(image).transpose(2, 0, 1)).unsqueeze(0).type(
                    torch.FloatTensor)

                if self.cuda:
                    image = image.cuda()
                    anchors = anchors.cuda()
                loc, conf, landms = self.net(image)
                #   对预测框进行解码
                boxes = decode(loc.data.squeeze(0), anchors, self.cfg['variance'])
                #   获得预测结果的置信度
                conf = conf.data.squeeze(0)[:, 1:2]
                #   对人脸关键点进行解码
                landms = decode_landm(landms.data.squeeze(0), anchors, self.cfg['variance'])
                #   对人脸检测结果进行堆叠
                boxes_conf_landms = torch.cat([boxes, conf, landms], -1)
                boxes_conf_landms = non_max_suppression(boxes_conf_landms, self.confidence)

                if len(boxes_conf_landms) <= 0:
                    print(names[index], "：未检测到人脸")
                    continue
                #   如果使用了letterbox_image的话，要把灰条的部分去除掉。
                if self.letterbox_image:
                    boxes_conf_landms = retinaface_correct_boxes(boxes_conf_landms,np.array([self.retinaface_input_shape[0],
                                                                           self.retinaface_input_shape[1]]),
                                                                 np.array([im_height, im_width]))

            boxes_conf_landms[:, :4] = boxes_conf_landms[:, :4] * scale
            boxes_conf_landms[:, 5:] = boxes_conf_landms[:, 5:] * scale_for_landmarks

            # ---------------------------------------------------#
            #   选取最大的人脸框。
            # ---------------------------------------------------#
            best_face_location = None
            biggest_area = 0
            for result in boxes_conf_landms:
                left, top, right, bottom = result[0:4]

                w = right - left
                h = bottom - top
                if w * h > biggest_area:
                    biggest_area = w * h
                    best_face_location = result

            # ---------------------------------------------------#
            #   截取图像
            # ---------------------------------------------------#
            crop_img = old_image[int(best_face_location[1]):int(best_face_location[3]),
                       int(best_face_location[0]):int(best_face_location[2])]
            landmark = np.reshape(best_face_location[5:], (5, 2)) - np.array(
                [int(best_face_location[0]), int(best_face_location[1])])
            crop_img, _ = Alignment_1(crop_img, landmark)

            crop_img = np.array(
                letterbox_image(np.uint8(crop_img), (self.facenet_input_shape[1], self.facenet_input_shape[0]))) / 255
            crop_img = crop_img.transpose(2, 0, 1)
            crop_img = np.expand_dims(crop_img, 0)
            # ---------------------------------------------------#
            #   利用图像算取长度为128的特征向量
            # ---------------------------------------------------#
            with torch.no_grad():
                crop_img = torch.from_numpy(crop_img).type(torch.FloatTensor)
                if self.cuda:
                    crop_img = crop_img.cuda()

                face_encoding = self.facenet(crop_img)[0].cpu().numpy()
                face_encodings.append(face_encoding)

        np.save("model_data/{backbone}_face_encoding.npy".format(backbone=self.facenet_backbone), face_encodings)
        np.save("model_data/{backbone}_names.npy".format(backbone=self.facenet_backbone), names)

    # ---------------------------------------------------#
    #   检测图片
    # ---------------------------------------------------#
    def detect_image(self, image):
        # ---------------------------------------------------#
        #   对输入图像进行一个备份，后面用于绘图
        # ---------------------------------------------------#
        old_image = image.copy()
        face_names = []
        # ---------------------------------------------------#
        #   把图像转换成numpy的形式
        # ---------------------------------------------------#
        image = np.array(image, np.float32)

        # ---------------------------------------------------#
        #   Retinaface检测部分-开始
        # ---------------------------------------------------#
        # ---------------------------------------------------#
        #   计算输入图片的高和宽
        # ---------------------------------------------------#
        im_height, im_width, _ = np.shape(image)
        # ---------------------------------------------------#
        #   计算scale，用于将获得的预测框转换成原图的高宽
        # ---------------------------------------------------#
        scale = [
            np.shape(image)[1], np.shape(image)[0], np.shape(image)[1], np.shape(image)[0]
        ]
        scale_for_landmarks = [
            np.shape(image)[1], np.shape(image)[0], np.shape(image)[1], np.shape(image)[0],
            np.shape(image)[1], np.shape(image)[0], np.shape(image)[1], np.shape(image)[0],
            np.shape(image)[1], np.shape(image)[0]
        ]

        # ---------------------------------------------------------#
        #   letterbox_image可以给图像增加灰条，实现不失真的resize
        # ---------------------------------------------------------#
        if self.letterbox_image:
            image = letterbox_image(image, [self.retinaface_input_shape[1], self.retinaface_input_shape[0]])
            anchors = self.anchors
        else:
            anchors = Anchors(self.cfg, image_size=(im_height, im_width)).get_anchors()

        # ---------------------------------------------------#
        #   将处理完的图片传入Retinaface网络当中进行预测
        # ---------------------------------------------------#
        with torch.no_grad():
            # -----------------------------------------------------------#
            #   图片预处理，归一化。
            # -----------------------------------------------------------#
            image = torch.from_numpy(preprocess_input(image).transpose(2, 0, 1)).unsqueeze(0).type(torch.FloatTensor)

            if self.cuda:
                anchors = anchors.cuda()
                image = image.cuda()

            # ---------------------------------------------------------#
            #   传入网络进行预测
            # ---------------------------------------------------------#
            loc, conf, landms = self.net(image)
            # ---------------------------------------------------#
            #   Retinaface网络的解码，最终我们会获得预测框
            #   将预测结果进行解码和非极大抑制
            # ---------------------------------------------------#
            boxes = decode(loc.data.squeeze(0), anchors, self.cfg['variance'])

            conf = conf.data.squeeze(0)[:, 1:2]

            landms = decode_landm(landms.data.squeeze(0), anchors, self.cfg['variance'])

            # -----------------------------------------------------------#
            #   对人脸检测结果进行堆叠
            # -----------------------------------------------------------#
            boxes_conf_landms = torch.cat([boxes, conf, landms], -1)
            boxes_conf_landms = non_max_suppression(boxes_conf_landms, self.confidence)

            # ---------------------------------------------------#
            #   如果没有预测框则返回原图
            # ---------------------------------------------------#
            if len(boxes_conf_landms) <= 0:
                return face_names

            # ---------------------------------------------------------#
            #   如果使用了letterbox_image的话，要把灰条的部分去除掉。
            # ---------------------------------------------------------#
            if self.letterbox_image:
                boxes_conf_landms = retinaface_correct_boxes(boxes_conf_landms, \
                                                             np.array([self.retinaface_input_shape[0],
                                                                       self.retinaface_input_shape[1]]),
                                                             np.array([im_height, im_width]))

            boxes_conf_landms[:, :4] = boxes_conf_landms[:, :4] * scale
            boxes_conf_landms[:, 5:] = boxes_conf_landms[:, 5:] * scale_for_landmarks

        # ---------------------------------------------------#
        #   Retinaface检测部分-结束
        # ---------------------------------------------------#

        # -----------------------------------------------#
        #   Facenet编码部分-开始
        # -----------------------------------------------#
        face_encodings = []
        for boxes_conf_landm in boxes_conf_landms:
            # ----------------------#
            #   图像截取，人脸矫正
            # ----------------------#
            boxes_conf_landm = np.maximum(boxes_conf_landm, 0)
            crop_img = np.array(old_image)[int(boxes_conf_landm[1]):int(boxes_conf_landm[3]),
                       int(boxes_conf_landm[0]):int(boxes_conf_landm[2])]
            landmark = np.reshape(boxes_conf_landm[5:], (5, 2)) - np.array(
                [int(boxes_conf_landm[0]), int(boxes_conf_landm[1])])
            crop_img, _ = Alignment_1(crop_img, landmark)

            # ----------------------#
            #   人脸编码
            # ----------------------#
            crop_img = np.array(
                letterbox_image(np.uint8(crop_img), (self.facenet_input_shape[1], self.facenet_input_shape[0]))) / 255
            crop_img = np.expand_dims(crop_img.transpose(2, 0, 1), 0)
            with torch.no_grad():
                crop_img = torch.from_numpy(crop_img).type(torch.FloatTensor)
                if self.cuda:
                    crop_img = crop_img.cuda()

                # -----------------------------------------------#
                #   利用facenet_model计算长度为128特征向量
                # -----------------------------------------------#
                face_encoding = self.facenet(crop_img)[0].cpu().numpy()
                face_encodings.append(face_encoding)
        # -----------------------------------------------#
        #   Facenet编码部分-结束
        # -----------------------------------------------#

        # -----------------------------------------------#
        #   人脸特征比对-开始
        # -----------------------------------------------#
        for face_encoding in face_encodings:
            # -----------------------------------------------------#
            #   取出一张脸并与数据库中所有的人脸进行对比，计算得分
            # -----------------------------------------------------#
            matches, face_distances = compare_faces(self.known_face_encodings, face_encoding,
                                                    tolerance=self.facenet_threhold)
            name = "Unknown"

            # -----------------------------------------------------#
            #   取出这个最近人脸的评分
            #   取出当前输入进来的人脸，最接近的已知人脸的序号
            # -----------------------------------------------------#
            best_match_index = np.argmin(face_distances)
            print(face_distances)
            if matches[best_match_index]:
                name = self.known_face_names[best_match_index]
            face_names.append(name)
        return face_names

    def get_FPS(self, image, test_interval):
        # ---------------------------------------------------#
        #   对输入图像进行一个备份，后面用于绘图
        # ---------------------------------------------------#
        old_image = image.copy()
        # ---------------------------------------------------#
        #   把图像转换成numpy的形式
        # ---------------------------------------------------#
        image = np.array(image, np.float32)

        # ---------------------------------------------------#
        #   Retinaface检测部分-开始
        # ---------------------------------------------------#
        # ---------------------------------------------------#
        #   计算输入图片的高和宽
        # ---------------------------------------------------#
        im_height, im_width, _ = np.shape(image)
        # ---------------------------------------------------#
        #   计算scale，用于将获得的预测框转换成原图的高宽
        # ---------------------------------------------------#
        scale = [
            np.shape(image)[1], np.shape(image)[0], np.shape(image)[1], np.shape(image)[0]
        ]
        scale_for_landmarks = [
            np.shape(image)[1], np.shape(image)[0], np.shape(image)[1], np.shape(image)[0],
            np.shape(image)[1], np.shape(image)[0], np.shape(image)[1], np.shape(image)[0],
            np.shape(image)[1], np.shape(image)[0]
        ]

        # ---------------------------------------------------------#
        #   letterbox_image可以给图像增加灰条，实现不失真的resize
        # ---------------------------------------------------------#
        if self.letterbox_image:
            image = letterbox_image(image, [self.retinaface_input_shape[1], self.retinaface_input_shape[0]])
            anchors = self.anchors
        else:
            anchors = Anchors(self.cfg, image_size=(im_height, im_width)).get_anchors()

        # ---------------------------------------------------#
        #   将处理完的图片传入Retinaface网络当中进行预测
        # ---------------------------------------------------#
        with torch.no_grad():
            # -----------------------------------------------------------#
            #   图片预处理，归一化。
            # -----------------------------------------------------------#
            image = torch.from_numpy(preprocess_input(image).transpose(2, 0, 1)).unsqueeze(0).type(torch.FloatTensor)

            if self.cuda:
                anchors = anchors.cuda()
                image = image.cuda()

            # ---------------------------------------------------------#
            #   传入网络进行预测
            # ---------------------------------------------------------#
            loc, conf, landms = self.net(image)
            # ---------------------------------------------------#
            #   Retinaface网络的解码，最终我们会获得预测框
            #   将预测结果进行解码和非极大抑制
            # ---------------------------------------------------#
            boxes = decode(loc.data.squeeze(0), anchors, self.cfg['variance'])

            conf = conf.data.squeeze(0)[:, 1:2]

            landms = decode_landm(landms.data.squeeze(0), anchors, self.cfg['variance'])

            # -----------------------------------------------------------#
            #   对人脸检测结果进行堆叠
            # -----------------------------------------------------------#
            boxes_conf_landms = torch.cat([boxes, conf, landms], -1)
            boxes_conf_landms = non_max_suppression(boxes_conf_landms, self.confidence)

        if len(boxes_conf_landms) > 0:
            # ---------------------------------------------------------#
            #   如果使用了letterbox_image的话，要把灰条的部分去除掉。
            # ---------------------------------------------------------#
            if self.letterbox_image:
                boxes_conf_landms = retinaface_correct_boxes(boxes_conf_landms, \
                                                             np.array([self.retinaface_input_shape[0],
                                                                       self.retinaface_input_shape[1]]),
                                                             np.array([im_height, im_width]))

            boxes_conf_landms[:, :4] = boxes_conf_landms[:, :4] * scale
            boxes_conf_landms[:, 5:] = boxes_conf_landms[:, 5:] * scale_for_landmarks

            # ---------------------------------------------------#
            #   Retinaface检测部分-结束
            # ---------------------------------------------------#

            # -----------------------------------------------#
            #   Facenet编码部分-开始
            # -----------------------------------------------#
            face_encodings = []
            for boxes_conf_landm in boxes_conf_landms:
                # ----------------------#
                #   图像截取，人脸矫正
                # ----------------------#
                boxes_conf_landm = np.maximum(boxes_conf_landm, 0)
                crop_img = np.array(old_image)[int(boxes_conf_landm[1]):int(boxes_conf_landm[3]),
                           int(boxes_conf_landm[0]):int(boxes_conf_landm[2])]
                landmark = np.reshape(boxes_conf_landm[5:], (5, 2)) - np.array(
                    [int(boxes_conf_landm[0]), int(boxes_conf_landm[1])])
                crop_img, _ = Alignment_1(crop_img, landmark)

                # ----------------------#
                #   人脸编码
                # ----------------------#
                crop_img = np.array(letterbox_image(np.uint8(crop_img),
                                                    (self.facenet_input_shape[1], self.facenet_input_shape[0]))) / 255
                crop_img = np.expand_dims(crop_img.transpose(2, 0, 1), 0)
                with torch.no_grad():
                    crop_img = torch.from_numpy(crop_img).type(torch.FloatTensor)
                    if self.cuda:
                        crop_img = crop_img.cuda()

                    # -----------------------------------------------#
                    #   利用facenet_model计算长度为128特征向量
                    # -----------------------------------------------#
                    face_encoding = self.facenet(crop_img)[0].cpu().numpy()
                    face_encodings.append(face_encoding)
            # -----------------------------------------------#
            #   Facenet编码部分-结束
            # -----------------------------------------------#

            # -----------------------------------------------#
            #   人脸特征比对-开始
            # -----------------------------------------------#
            face_names = []
            for face_encoding in face_encodings:
                # -----------------------------------------------------#
                #   取出一张脸并与数据库中所有的人脸进行对比，计算得分
                # -----------------------------------------------------#
                matches, face_distances = compare_faces(self.known_face_encodings, face_encoding,
                                                        tolerance=self.facenet_threhold)
                print(face_distances)
                name = "Unknown"
                # -----------------------------------------------------#
                #   取出这个最近人脸的评分
                #   取出当前输入进来的人脸，最接近的已知人脸的序号
                # -----------------------------------------------------#
                best_match_index = np.argmin(face_distances)
                if matches[best_match_index]:
                    name = self.known_face_names[best_match_index]
                face_names.append(name)
            # -----------------------------------------------#
            #   人脸特征比对-结束
            # -----------------------------------------------#

        t1 = time.time()
        for _ in range(test_interval):
            with torch.no_grad():
                # ---------------------------------------------------------#
                #   传入网络进行预测
                # ---------------------------------------------------------#
                loc, conf, landms = self.net(image)
                # ---------------------------------------------------#
                #   Retinaface网络的解码，最终我们会获得预测框
                #   将预测结果进行解码和非极大抑制
                # ---------------------------------------------------#
                boxes = decode(loc.data.squeeze(0), anchors, self.cfg['variance'])

                conf = conf.data.squeeze(0)[:, 1:2]

                landms = decode_landm(landms.data.squeeze(0), anchors, self.cfg['variance'])

                # -----------------------------------------------------------#
                #   对人脸检测结果进行堆叠
                # -----------------------------------------------------------#
                boxes_conf_landms = torch.cat([boxes, conf, landms], -1)
                boxes_conf_landms = non_max_suppression(boxes_conf_landms, self.confidence)

            if len(boxes_conf_landms) > 0:
                # ---------------------------------------------------------#
                #   如果使用了letterbox_image的话，要把灰条的部分去除掉。
                # ---------------------------------------------------------#
                if self.letterbox_image:
                    boxes_conf_landms = retinaface_correct_boxes(boxes_conf_landms, \
                                                                 np.array([self.retinaface_input_shape[0],
                                                                           self.retinaface_input_shape[1]]),
                                                                 np.array([im_height, im_width]))

                boxes_conf_landms[:, :4] = boxes_conf_landms[:, :4] * scale
                boxes_conf_landms[:, 5:] = boxes_conf_landms[:, 5:] * scale_for_landmarks

                # ---------------------------------------------------#
                #   Retinaface检测部分-结束
                # ---------------------------------------------------#

                # -----------------------------------------------#
                #   Facenet编码部分-开始
                # -----------------------------------------------#
                face_encodings = []
                for boxes_conf_landm in boxes_conf_landms:
                    # ----------------------#
                    #   图像截取，人脸矫正
                    # ----------------------#
                    boxes_conf_landm = np.maximum(boxes_conf_landm, 0)
                    crop_img = np.array(old_image)[int(boxes_conf_landm[1]):int(boxes_conf_landm[3]),
                               int(boxes_conf_landm[0]):int(boxes_conf_landm[2])]
                    landmark = np.reshape(boxes_conf_landm[5:], (5, 2)) - np.array(
                        [int(boxes_conf_landm[0]), int(boxes_conf_landm[1])])
                    crop_img, _ = Alignment_1(crop_img, landmark)

                    # ----------------------#
                    #   人脸编码
                    # ----------------------#
                    crop_img = np.array(letterbox_image(np.uint8(crop_img), (
                    self.facenet_input_shape[1], self.facenet_input_shape[0]))) / 255
                    crop_img = np.expand_dims(crop_img.transpose(2, 0, 1), 0)
                    with torch.no_grad():
                        crop_img = torch.from_numpy(crop_img).type(torch.FloatTensor)
                        if self.cuda:
                            crop_img = crop_img.cuda()

                        # -----------------------------------------------#
                        #   利用facenet_model计算长度为128特征向量
                        # -----------------------------------------------#
                        face_encoding = self.facenet(crop_img)[0].cpu().numpy()
                        face_encodings.append(face_encoding)
                # -----------------------------------------------#
                #   Facenet编码部分-结束
                # -----------------------------------------------#

                # -----------------------------------------------#
                #   人脸特征比对-开始
                # -----------------------------------------------#
                face_names = []
                for face_encoding in face_encodings:
                    # -----------------------------------------------------#
                    #   取出一张脸并与数据库中所有的人脸进行对比，计算得分
                    # -----------------------------------------------------#
                    matches, face_distances = compare_faces(self.known_face_encodings, face_encoding,
                                                            tolerance=self.facenet_threhold)
                    name = "识别失败"
                    #   取出这个最近人脸的评分
                    #   取出当前输入进来的人脸，最接近的已知人脸的序号
                    best_match_index = np.argmin(face_distances)
                    if matches[best_match_index]:
                        name = self.known_face_names[best_match_index]
                    face_names.append(name)
                # -----------------------------------------------#
                #   人脸特征比对-结束
                # -----------------------------------------------#
        t2 = time.time()
        tact_time = (t2 - t1) / test_interval
        return tact_time
