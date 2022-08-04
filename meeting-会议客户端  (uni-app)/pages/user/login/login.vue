<template>
  <view class="login">
    <!-- 自定义头部导航 -->
    <NavTop>
    	<view class="top-bar" :style="{height: $store.getters.topBarHeight + 'px'}">
    		<view>设置</view>
    	</view>
    </NavTop>
    <!-- app名称 -->
    <view class="welcome-to-app font-sty" data-name="欢迎使用糖果云">欢迎使用糖果云</view>
    <view class="login-input-box">
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
         placeholder="请输入密码" 
         placeholder-class="placeholder" 
         class="code-input caret_color"
        />
        <text class="iconfont invisible" :class="showPsw ? 'icon-zhengkaiyanjingkejian' : 'icon-yanjing-bukejian2_danxian'" @click="handleVisible"></text>
      </view>
    </view>
    <view class="forget-box">忘记密码</view>
    <view class="btn login-btn" @click="handleLogin">登录</view>
    <view class="register-box">
      <text>没有账号?</text>
      <navigator url="../register/register">去注册</navigator>
    </view>
    <view class="other-login-way">
      <view class="tit">
        <text>其他登录方式</text>
      </view>
      <view class="way-content">
        <view class="way-item">
          <uni-icons type="qq" size="28" color="#ffffff"></uni-icons>
        </view>
      </view>
    </view>
		<!-- 提示信息弹窗 -->
    <Popup ref="message" :popupType="popupMsgtype" :msgType="popupOptions.msgType" :messageText="popupOptions.messageText" />
  </view>
</template>

<script>
  // 导入登录接口
  import { login } from '../../../api/index.js'
  import NavTop from '../../../components/NavTop/NavTop.vue'
  import Popup from '../../../components/Popup/Popup.vue'
  export default {
    data() {
      return {
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
      // 处理登录事件
      async handleLogin() {
        const { tel: username, psw: password } = this
        if (getApp().checkPhone(this.tel) && getApp().checkPsw(this.psw)) {
          const res = await login({ username, password})
          this.messageToggle({ msgType: res.code === 200 ? 'success' : 'error', messageText: res.message })
          if (res.code === 200) {
            const { obj } = res
            // 1.登录成功,把token存入本地存储中
            // 2.跳转到首页
            const token = `${obj.tokenHead} ${obj.token}`
            uni.setStorageSync('token', token)
            setTimeout(() => {
              uni.switchTab({
                url: '/pages/index/index'
              })
            }, 2000)
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    height: 100%;
    width: 100%;
    padding: 0 30rpx;
    position: relative;
    .top-bar {
      margin-top: 20rpx;
      text-align: right;
      color: $uni-color-gray;
    }
    // 忘记密码
    .forget-box {
      color: $uni-color-gray;
      text-align: right;
      font-size: 26rpx;
      margin-top: -30rpx;
      padding-bottom: 50rpx;
    }
    // 按钮
    .login-btn {
      border-radius: 40rpx;
    }
    // 去注册
    .register-box {
      display: flex;
      justify-content: center;
      font-size: 26rpx;
      text {
        color: $uni-color-gray;
        margin-right: 10rpx;
      }
      navigator {
        color: $uni-color-theme;
      }
    }
    // 其他方式登录
    .other-login-way {
      position: absolute;
      bottom: 20rpx;
      left: 50%;
      transform: translateX(-50%);
      .tit {
        // background-color: #007AFF;
        background-image: linear-gradient(90deg, #fff, #d8d8d8 50%, #fff);
        background-size: 100% 0.2rem;
        background-position: 50%;
        background-repeat: no-repeat;
        border-radius: 30rpx;
        width: 380rpx;
        text-align: center;
        text {
          padding: 0 5rpx;
          background-color: #FFFFFF;
        }
      }
      .way-content {
        display: flex;
        justify-content: center;
        align-items: center;
        .way-item {
          text-align: center;
          margin-top: 20rpx;
          border-radius: 50%;
          width: 70rpx;
          height: 70rpx;
          line-height: 70rpx;
          background-color: #00aaee;
        }

      }
    }
  }
</style>
