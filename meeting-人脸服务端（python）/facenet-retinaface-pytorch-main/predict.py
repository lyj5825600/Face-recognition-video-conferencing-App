import base64
import os
import time
from sanic.response import json
import cv2
import numpy as np
from sanic import Sanic, request
from retinaface import Retinaface
import os
import cv2
import numpy as np
import argparse
import warnings
import time

from face_living.src.anti_spoof_predict import AntiSpoofPredict
from face_living.src.generate_patches import CropImage
from face_living.src.utility import parse_model_name

#   mode用于指定测试的模式：
#   'predict'表示单张图片预测，如果想对预测过程进行修改，如保存图片，截取对象等，可以先看下方详细的注释
#   test_interval用于指定测量fps的时候，图片检测的次数
# test_interval   = 100
def model_predict(mode="predict",img="",video_path=0,video_save_path="",video_fps=25.0):
    retinaface = Retinaface()
    if mode == "predict":
            image = cv2.imdecode(img, cv2.IMREAD_COLOR)
            if image is None:
                return ["没有此人"]
            else:
                image = cv2.cvtColor(image,cv2.COLOR_BGR2RGB)
                r_image = retinaface.detect_image(image)
                print(r_image)
                if not r_image:
                    return ["没有此人"]
                return r_image
# base64转图片
def base64_to_image(base64_code):
    imgData = base64.b64decode(base64_code)
    nparr = np.fromstring(imgData, np.uint8)
    return nparr
# 文件夹递归读取
def get_filelist(dir, Filelist,name):
    newDir = dir
    if os.path.isfile(dir):
        Filelist.append(dir)
        name.append(dir.split('\\')[2].split('.')[0])
    elif os.path.isdir(dir):
        for s in os.listdir(dir):
            newDir = os.path.join(dir, s)
            get_filelist(newDir, Filelist,name)
    return Filelist
app = Sanic("MyAPP")
# 深度学习实现人脸识别接口方法
def facenets(my_img_json):
    # base64转图片
    img=base64_to_image(my_img_json)
    # 深度学习模型返回数据
    jsonList = model_predict(img=img)
    return jsonList[0]
# 人脸识别接口
@app.post("/facenet")
async def facenet(request):
    facenet=facenets(request.json['img_addres'])
    return json({"name":facenet})

#深度人脸列表刷新接口
def images():
    retinaface = Retinaface(1)
    list_dir = "facedataset"
    image_paths = []
    names = []
    get_filelist(list_dir, image_paths, names)
    retinaface.encode_face_dataset(image_paths, names)
    return "人脸刷新成功"
@app.get("/imgaesDataset")
async def imgaesDataset(request):
    img=images();
    return json({"message":img})
# 添加人脸方法
def addImage(imgbase64,username,nickname):
    dirs='facedataset/'+username+'/'
    if not os.path.exists(dirs):
        os.makedirs(dirs)
    imagedata = base64.b64decode(imgbase64)
    file = open('facedataset/'+username+'/'+nickname+'.jpg', "wb")
    file.write(imagedata)
    file.close()
    return "上传成功"

# 添加人脸
@app.post("/addImages")
async def addImages(request):
    message=addImage(request.json['imgbase64'],request.json['username'],request.json['nickname'])
    return json({"name": message})
# 删除人脸方法
def deleteImage(username,nickname):
    rootdir = 'facedataset/'+username
    filelist = os.listdir(rootdir)
    for file in filelist:
        if nickname+'.jpg' in file:
            del_file = rootdir + '\\' + file;
            os.remove(del_file)
            print("删除", del_file)
    return "删除成功"
# 删除人脸
@app.post("/deleteImages")
async def deleteImages(request):
    message=deleteImage(request.json['username'],request.json['nickname'])
    return json({"name": message})

###################################活体检测部分###########################################
warnings.filterwarnings('ignore')
SAMPLE_IMAGE_PATH = "./face_living/images/sample/"
# 添加
def addlivingFaceImage(imgbase64,username):
    dirs=SAMPLE_IMAGE_PATH+username+'/'
    if not os.path.exists(dirs):
        os.makedirs(dirs)
    imagedata = base64.b64decode(imgbase64)
    file = open('./face_living/images/sample/'+username+'/'+username+'.jpg', "wb")
    file.write(imagedata)
    file.close()
    return "上传成功"
# 因为安卓端APK获取的视频流宽高比为3:4,为了与之一致，所以将宽高比限制为3:4
def check_image(image):
    height, width, channel = image.shape
    if width/height != 3/4:
        print("图片要求480*640或3比4")
        return False
    else:
        return True
def test(image_name, model_dir, device_id,username):
    model_test = AntiSpoofPredict(device_id)
    image_cropper = CropImage()
    image = cv2.imread(SAMPLE_IMAGE_PATH+username+'/' + image_name)
    result = check_image(image)
    if result is False:
        return
    image_bbox = model_test.get_bbox(image)
    prediction = np.zeros((1, 3))
    test_speed = 0
    # sum the prediction from single model's result
    for model_name in os.listdir(model_dir):
        h_input, w_input, model_type, scale = parse_model_name(model_name)
        param = {
            "org_img": image,
            "bbox": image_bbox,
            "scale": scale,
            "out_w": w_input,
            "out_h": h_input,
            "crop": True,
        }
        if scale is None:
            param["crop"] = False
        img = image_cropper.crop(**param)
        start = time.time()
        prediction += model_test.predict(img, os.path.join(model_dir, model_name))
        test_speed += time.time()-start

    # draw result of prediction
    label = np.argmax(prediction)
    value = prediction[0][label]/2
    if label == 1:
        print("图片 '{}' 是真实人脸 真实人脸识别率: {:.2f}.".format(image_name, value))
        result_text = "RealFace Score: {:.2f}".format(value)
        color = (255, 0, 0)
    else:
        print("图片 '{}' 不是真实人脸. 虚假人脸识别率: {:.2f}.".format(image_name, value))
        result_text = "FakeFace Score: {:.2f}".format(value)
        color = (0, 0, 255)
    print("识别速度 {:.2f} s".format(test_speed))
    cv2.rectangle(
        image,
        (image_bbox[0], image_bbox[1]),
        (image_bbox[0] + image_bbox[2], image_bbox[1] + image_bbox[3]),
        color, 2)
    cv2.putText(
        image,
        result_text,
        (image_bbox[0], image_bbox[1] - 5),
        cv2.FONT_HERSHEY_COMPLEX, 0.5*image.shape[0]/1024, color)
    #
    # format_ = os.path.splitext(image_name)[-1]
    # result_image_name = image_name.replace(format_, "_result" + format_)
    # cv2.imwrite(SAMPLE_IMAGE_PATH + result_image_name, image)
    return label
# 活体检测方法
def livingFace(username):
    desc = "test"
    parser = argparse.ArgumentParser(description=desc)
    parser.add_argument(
        "--device_id",
        type=int,
        default=0,
        help="which gpu id, [0/1/2/3]")
    parser.add_argument(
        "--model_dir",
        type=str,
        default="./face_living/resources/anti_spoof_models",
        help="model_lib used to test")
    parser.add_argument(
        "--image_name",
        type=str,
        default=username+'.jpg',
        help="image used to test")
    args = parser.parse_args()
    return test(args.image_name, args.model_dir, args.device_id,username)

#活体检测接口
@app.post("/livingFaceTest")
async def livingFaceTest(request):
    flag=livingFace(request.json['username'])
    code="签到失败"
    if flag==1:
        code="签到成功"
        return json({"code":code})
    return json({"code":code})
# 添加活体检测标本接口
@app.post("/addlivingFaceImage")
async def addlivingFaceImages(request):
    addlivingFaceImage(request.json['imgbase64'],request.json['username'])
    return json({"name":request.json['username']})

if __name__ == '__main__':
    app.run(debug=True, auto_reload=True,port=5000,workers=5)
