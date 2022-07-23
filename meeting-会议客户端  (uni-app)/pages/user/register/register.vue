<template>
  <view class="register">
    <!-- 自定义头部导航 -->
    <NavTop>
    	<view class="top-bar" :style="{height: $store.getters.topBarHeight + 'px'}" @click="toLogin">
    		<text class="iconfont icon-zuojiantou"></text>
        <text>登录</text>
    	</view>
    </NavTop>
    <view class="new-user font-sty" data-name="新用户注册">新用户注册</view>
    <!-- 注册表单盒子 -->
    <view class="login-input-box">
      <view class="nickname-item">
        <view>昵称</view>
        <input
         type="text" 
         v-model="nickname"
         placeholder="请输入昵称" 
         placeholder-class="placeholder" 
         class="nickname-input caret_color"
        />
      </view>
      <view class="tel-item">
        <view>手机号码</view>
        <input
         type="number" 
         v-model="tel"
         placeholder="请输入手机号码" 
         placeholder-class="placeholder" 
         class="tel-input caret_color"
        />
      </view>
      <view class="code-item">
        <view>密码</view>
        <input
         :type="showPsw ? 'text' : 'password'" 
         v-model="psw"
         placeholder="请设置密码" 
         placeholder-class="placeholder" 
         class="code-input caret_color"
        />
        <text class="iconfont invisible" :class="showPsw ? 'icon-zhengkaiyanjingkejian' : 'icon-yanjing-bukejian2_danxian'" @click="handleVisible"></text>
      </view>
    </view>
    <view class="btn register-btn" @click="handleRegister">注册</view>
		<!-- 提示信息弹窗 -->
    <Popup ref="message" :popupType="popupMsgtype" :msgType="popupOptions.msgType" :messageText="popupOptions.messageText" />
  </view>
</template>

<script>
  import NavTop from '../../../components/NavTop/NavTop.vue'
  import { register } from '../../../api/index.js'
  import { showToast } from '../../../utils/uniAsync.js'
  import Popup from '../../../components/Popup/Popup.vue'
  export default {
    data() {
      return {
        nickname: '',
        tel: '',
        psw: '',
        // 是否显示密码
        showPsw: false,
        popupMsgtype: 'center',
        popupOptions: {
          msgType: '',
          messageText: ''
        } 
      }
    },
    components: { NavTop, Popup },
    methods: {
      messageToggle({ msgType, messageText }) {
        this.popupOptions = {
          msgType,
          messageText
        }
        this.$refs.message.open()
        // 消息弹窗在中心时才需手动关闭
        if (this.popupMsgtype === 'center') {
          // 延时关闭
          this.$refs.message.delayClose()
        }
      },
      // 显示密码
      handleVisible() {
        this.showPsw = !this.showPsw
      },
      // 去登录页
      toLogin() {
        uni.navigateBack({
          delta: 1
        })
      },
      // 处理注册事件
      async handleRegister() {
        // 检查用户名
        if(!this.nickname) return await showToast({ title: '用户名不能为空!', icon: 'none' })
        if (getApp().checkPhone(this.tel) && getApp().checkPsw(this.psw)) {
          //  得到所需数据
          /**
           * 逻辑:
           * 1.code为500表示已注册,200表示注册成功
           * 2.不论码为多少都自动跳转到登录页[延时跳转为让提示消息显示]
            * */
          const { nickname, psw: password, tel: phone } = this
          const res = await register({ nickname, password, phone })
          if (res.code === 500) {
            this.messageToggle({ msgType: 'info', messageText: res.message })
          } else if (res.code === 200) {
            this.messageToggle({ msgType: 'success', messageText: res.message })
          }
          setTimeout(() => {
            uni.redirectTo({
              url: '../login/login'
            })
          }, 2000)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .register {
    padding: 0 30rpx;
    // 自定义导航栏
    .top-bar {
      display: flex;
      align-items: center;
      margin-top: 20rpx;
      margin-left: -10rpx;
      .icon-zuojiantou {
        font-weight: bold;
        font-size: 50rpx;
        margin-right: 10rpx;
      }
      text {
        color: $uni-color-theme1;
      }
    }
    // 新用户
    .new-user {
      margin: 60rpx 0;
    }
    // 注册按钮
    .btn.register-btn {
      border-radius: 40rpx;
      margin: 100rpx 30rpx;
    }
  }
</style>
