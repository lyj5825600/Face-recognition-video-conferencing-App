import base64
import os
import time
from sanic.response import json
import cv2
import numpy as np
from sanic import Sanic, request
from retinaface import Retinaface
#   mode用于指定测试的模式：
#   'predict'表示单张图片预测，如果想对预测过程进行修改，如保存图片，截取对象等，可以先看下方详细的注释
#   'video'表示视频检测，可调用摄像头或者视频进行检测，详情查看下方注释。
# mode = "predict"
#   video_path用于指定视频的路径，当video_path=0时表示检测摄像头
#   想要检测视频，则设置如video_path = "xxx.mp4"即可，代表读取出根目录下的xxx.mp4文件。
#   video_save_path表示视频保存的路径，当video_save_path=""时表示不保存
#   想要保存视频，则设置如video_save_path = "yyy.mp4"即可，代表保存为根目录下的yyy.mp4文件。
#   video_fps用于保存的视频的fps
#   video_path、video_save_path和video_fps仅在mode='video'时有效
#   保存视频时需要ctrl+c退出或者运行到最后一帧才会完成完整的保存步骤。
# video_path      = 0
# video_save_path = ""
# video_fps       = 25.0
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
    file = open('facedataset/'+username+'/'+nickname+'.png', "wb")
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
        if nickname+'.png' in file:
            del_file = rootdir + '\\' + file;
            os.remove(del_file)
            print("删除", del_file)
    return "删除成功"
# 删除人脸
@app.post("/deleteImages")
async def deleteImages(request):
    message=deleteImage(request.json['username'],request.json['nickname'])
    return json({"name": message})
if __name__ == '__main__':
    app.run(debug=True, auto_reload=True,port=5000,workers=4)
