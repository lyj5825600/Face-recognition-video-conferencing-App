<template>
  <view class="edit_info">
    <view class="item" @click="showInput(true)">
      <view>姓名</view>
      <view v-if="addOptions.nickname" class="text_ellipsis nickname">{{ addOptions.nickname }}</view>
      <view class="iconfont icon-youjiantou" v-else></view>
    </view>
    <view class="item" @tap="selectorVisible = true">
      <view>性别</view>
      <view>{{ sex }}</view>
    </view>
    <view class="item" @click="showInput(false)">
      <view>联系电话</view>
      <view v-if="addOptions.phone">{{ addOptions.phone }}</view>
      <view class="iconfont icon-youjiantou" v-else></view>
    </view>
    <!-- face recognition : 人脸识别 -->
    <view class="face-recognition-wrap">
      <!-- use-guide: 使用指南 -->
      <view class="use-guide">
        <image src="../../static/images/icon/renlian.jpg"></image>
        <view>正确示例：五官清晰</view>
      </view>
      <!-- photograph: 拍照 -->
      <view class="user-photograph" @click="handleUpload">
        <image :src="tempImgUrl ? tempImgUrl : '../../static/images/icon/paizhao.jpg'"></image>
        <view>点击上传照片</view>
      </view>
    </view>
    <view class="btn save" @tap="addMember">保存</view>
    <view class="upload-way" :class="showPopup ? 'fly' : ''">
      <view class="way-item" @click="uploadPhoto">上传照片</view>
      <view class="way-item" @click="toOnlineCheckin">人脸识别</view>
    </view>
    <view class="mask" v-show="showPopup" @click="closePopup"></view>
    <Popup ref="nicknameDialog" @inputVal="getInputVal($event,'nickname')" :inputVal="addOptions.nickname" popupType="dialog" popupFormat="2" placeholder="请输入添加人员名" inputTitle="输入名字"/>
    <Popup ref="phoneDialog" @inputVal="getInputVal($event,'phone')" :inputVal="addOptions.phone" popupType="dialog" popupFormat="2" placeholder="请输入手机号" inputTitle="手机号"/>
    <w-picker
    	:visible.sync="selectorVisible"
    	mode="selector"
    	:value="sex"
    	default-type="meetingType"
    	:options="selectorList"
    	@confirm="onConfirm($event,'selector')"
    	ref="selector" 
    ></w-picker>
  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import Popup from '../../components/Popup/Popup.vue'
  import { addOrUpdateParticipantPerson } from '../../api/index.js'
  import { showToast } from '../../utils/uniAsync.js'
  export default {
    data() {
      return {
        // 是否显示上传方式弹出层
        showPopup: false,
        nickname: '',
        selectorVisible: false,
        sex: '男', // 性别文字[默认值男]
        addOptions: {
          sex: 0,
          nickname: '',
          phone: ''
        },
        // 选择性别配置对象
        selectorList:[
        	{
        		label:"男",
        		value: "0"
        	},{
        		label:"女",
        		value: "1"
        	}
        ]
      }
    },
    computed: {
      ...mapState(['tempImgUrl', 'base64Src'])
    },
    components: { Popup },
    onLoad() {
      // 重置vuex中的图片临时路径
      this.$store.commit('CHANGEIMGURL', '')
      // 重置vuex中的base64格式的图片
      this.$store.commit('PATHTOBASE64APP', '')
      console.log(JSON.stringify(this.addOptions),this.base64Src)
    },
    methods: {
      // 日期选择完毕后按确定执行
      onConfirm(res,type){
        const { result: txt, value } = res
        this.sex = txt
        this.addOptions.sex = value - 0
      },
      async addMember() {
        const { base64Src, addOptions } = this
        if (!addOptions.nickname) return await showToast({ title: '请输入名字', icon: 'error' })
        if (getApp().checkPhone(addOptions.phone) === false) return
        if (!base64Src) return await showToast({ title: '请上传照片', icon: 'error' }) 
        const res = await addOrUpdateParticipantPerson({...addOptions, facePhotos: base64Src})
        if (res.code === 200) {
          const curPage = getCurrentPages()
          const prePage = curPage[curPage.length - 2]
          // if (prePage.route === 'pages/manage/manage') {
          //   // 如果上一个页面时管理页,则在返回上一页前先重新获取数据
          //   prePage.$vm.getParticipantsPersonListFun()
          // }
          prePage.$vm.getParticipantsPersonListFun()
          // 倒退一个页面
          uni.navigateBack({
            delta: 1
          })
        }
      },
      // 弹出输入框
      showInput(flag) {
        if (flag) {
          this.$refs.nicknameDialog.open()
        } else {
          this.$refs.phoneDialog.open()
        }
      },
      /**
       * 点击确认按钮触发
       * @param {Object} done
       * @param {Object} value
       */
			getInputVal(val, type) {
        // 数据处理, 判断是用户点击的是哪个
        let key = ''
        let refKey = ''
        if (type === 'nickname') {
          key = 'nickname'
          refKey = 'nicknameDialog'
        } else if (type === 'phone') {
          key = 'phone'
          refKey = 'phoneDialog'
        }
        this.$set(this.addOptions, key, val)
        // 关闭窗口后，恢复默认内容
        this.$refs[refKey].close()
			},
      // 处理上传图片方法
      handleUpload() {
        this.showPopup = true
      },
      // 上传照片
      uploadPhoto() {
        uni.chooseImage({
          count: 1,
          sizeType: ['original'],
          sourceType: ['album'], // camera掉拍照，album是打开手机相册
          success: (res) => {
            const tempFilePaths = res.tempFilePaths;
            //app端, 把临时路径转为base64格式
            this.$store.dispatch('pathToBase64App', tempFilePaths[0])
            // 更新vuex中存储的人脸临时图片路径
            this.$store.commit('CHANGEIMGURL', tempFilePaths[0])
            this.showPopup = false
          }
        });
      },
      // 跳转人脸识别页面
      toOnlineCheckin() {
        this.showPopup = false
        // 初始化相机
        this.$store.commit('initCamera', true)
        uni.navigateTo({
          url: '/pages/online-checkin/online-checkin?flag=1'
        })
      },
      // 关闭弹出层
      closePopup() {
        this.showPopup = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .edit_info {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 30rpx;
    overflow: hidden;

    // 人脸识别
    .face-recognition-wrap {
      display: flex;

      .use-guide,
      .user-photograph {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        padding: 15rpx 10rpx;
        box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.1);
        margin: 30rpx 20rpx;
        border-radius: 20rpx;

        image {
          width: 230rpx;
          height: 280rpx;
          border-radius: 20rpx;
        }

        view {
          margin-top: 10rpx;
          font-size: 28rpx;
          color: #ccc;
        }
      }
    }

    // 保存按钮背景色
    .save {
      background-color: $uni-color-theme;
    }

    // 弹出层
    .upload-way {
      position: absolute;
      z-index: 99;
      height: 0;
      transition: all 1s;
      background-color: #FFFFFF;
      box-shadow: 0 0 20rpx #808080;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 20rpx 20rpx 0 0;

      &.fly {
        height: 200rpx;
      }

      .way-item {
        height: 100rpx;
        line-height: 100rpx;
        text-align: center;

        &:nth-child(1) {
          border-bottom: 1px solid #c7c7c7;
        }
      }
    }
  }
</style>
