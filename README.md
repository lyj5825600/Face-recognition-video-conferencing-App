# meeting-人脸识别APP端视频会议系统

#### 介绍
基于SpringBoot + Vue + uni-app开发的前后端分离APP端视频会议系统，采用SpringSecurity+JWT进行权限管理，Retinaface+ Facenet做人脸检测与人脸识别，支持会议系统的基本功能，人脸签到，视频会议，好友聊天，地图坐标签到等。

#### 在线地址
在线接口文档地址： http://101.43.253.100:8082/doc.html

Github地址：https://gitee.com/mengxin-no1/meeting-jie

Gitee地址：https://gitee.com/mengxin-no1/meeting-jie
#### 目录结构
会议服务端卫位于meeting-会议服务端中采用java开发。

会议人脸端位于meeting-人脸服务端中采用python开发（采用[Bubbliiiing大佬开源项目进行二开封装](https://github.com/bubbliiiing/facenet-retinaface-pytorch)）。

会议后台管理位于meeting-会议后台管理中采用vue开发（部分UI采用[风宇的博客项目后台](https://gitee.com/feng_meiyu/blog)）。

会议安卓app端位于meeting-安卓App端中采用uniapp开发。

SQL文件位于根目录下的xxxx.sql，需要MYSQL8以上版本。

可直接导入该项目于本地编辑器中，修改后端配置文件中的数据库等连接信息，项目中使用到的关于视频会议SDK功能和OSS等需要自行开通。

当你克隆项目到本地后可使用邮箱账号：admin@qq.com，密码：1234567 进行登录，也可自行注册账号并将其修改为admin角色。

本地访问接口文档地址：http://127.0.0.1:8082/doc.html

#### 技术描述
- 使用Retinaface+ Facenet实现人脸识别检测与人脸匹配用来实现人脸识别功能。
- 使用SpringSecurity作为安全框架，采用RBAC模型，实现动态分配权限和菜单。
- 使用Redis进行实现会议签到功能并接入百度地图SDK做位置签到,并将热点数据进行缓存,保证系统响应效率。
- 使用索引+异步来提高后台统计接口的查询效率,接入Rabbitmq做延时队列与异步解耦,提高系统响应度。
- 使用百度Ai平台进行对用户提交的会议信息的审核与发布,接入第三方anyRTC实现视频会议。
- 后台使用vue+Element进行数据展示并接入Echarts进行系统数据统计,App使用Uniapp来进行多端适配的实现。

#### 技术介绍
前端技术:Vue +Uniapp+ Vue-router + Axios + Element + Echarts+ JavaScript。

后端技术:SpringBoot+Retinaface+Facenet+SpringSecurity+Mybatis-plus+Redis+
MYSQL+RabbitMq+Swagger2+Websocket。
#### 开发环境
| 开发工具       | 说明          |
|------------|-------------|
| IDEA       | Java开发工具    |
| VSCode     | Vue开发工具IDE  |
| PyCharm    | python开发工具  |
| HBuilder X | uni-app开发工具 |

| 开发环境     | 版本      |
|----------|---------|
| JDK      | 1.8     |
| MYSQL    | 8.0.20  |
| Redis    | 6.0.5   |
| RabbitMQ | 3.8.6   |
| Pytorch  | 11.3    |
| Node     | 14.17.6 |
#### 项目截图

#### 项目部署
参考[部署文档](http://)

#### 注意事项
若部署失败或不成功可加作者QQ：1927545042来咨询
