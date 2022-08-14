from retinaface import Retinaface
import base64
import os
# 测试是否部署完成
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
if __name__ == '__main__':
    retinaface = Retinaface()
    list_dir = "facedataset"
    image_paths = []
    names = []
    get_filelist(list_dir, image_paths, names)
    retinaface.encode_face_dataset(image_paths, names)
