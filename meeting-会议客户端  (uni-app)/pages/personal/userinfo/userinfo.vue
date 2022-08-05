<template>
	<view class="userinfo">
		<view class="item username">
			<text>名字</text>
			<text>{{ userInfo.nickname }}</text>
		</view>
		<view class="item user-account">
			<text>账号</text>
			<text>{{ userInfo.email ? userInfo.email : userInfo.username }}</text>
		</view>
		<view class="item edit-name" @click="inputDialogToggle">
			<text>修改名字</text>
			<text class="iconfont icon-youjiantou"></text>
		</view>
		<view class="item edit-avatar" @click="editAvatar">
			<text>修改头像</text>
			<text class="iconfont icon-youjiantou"></text>
		</view>
		<view class="btn loginout" @click="loginout">退出登录</view>
    <!-- 输入框弹窗 -->
   <Popup ref="inputDialog" @inputVal="getInputVal" :inputVal="name" popupType="dialog" popupFormat="2" placeholder="请输入你的名字" inputTitle="修改名字"/>
    <!-- 提示信息弹窗 -->
    <Popup ref="message" popupType="message" :msgType="popupOptions.msgType" :messageText="popupOptions.messageText" />
	</view>
</template>

<script>
  import { mapState } from 'vuex'
  import { showToast } from '../../../utils/uniAsync.js'
  import { updateNickname, logout, updateUserInfoImages } from '../../../api/index.js'
  import Popup from '../../../components/Popup/Popup.vue'
	export default {
		data() {
			return {
				// 要修改的名字
        name: '',
        popupOptions: {
          msgType: '',
          messageText: ''
        } 
			}
		},
    computed: {
      ...mapState(['userInfo'])
    },
    components: { Popup },
		methods: {
      messageToggle({ msgType, messageText }) {
        this.popupOptions = {
          msgType,
          messageText
        }
        this.$refs.message.open()
      },
      // 修改头像方法
      async updateUserInfoImagesFun(images) {
        const res = await updateUserInfoImages({images})
        console.log(JSON.stringify(res))
        if (res.code === 200) {
          this.$store.dispatch('getAdminInfo')
          await showToast({title: res.message, icon: 'success'})
        }
      },
      // 编辑头像
      editAvatar() {
        uni.chooseImage({
          count: 1,
          sizeType: ['compressed'],
          sourceType: ['album'],
          success: (res) => {
            const tempFilePaths = res.tempFilePaths[0]
            uni.compressImage({
              src: tempFilePaths,
              width: '480px',
              height: '640px',
              success: result => {
                //app端, 把临时路径转为base64格式
                this.$store.dispatch('pathToBase64App', result.tempFilePath).then(res => {
                  // 得到base64格式的图片,进行修改头像操作
                  const base64Src = res
                  this.updateUserInfoImagesFun(base64Src)
                }).catch((err) => {
                  console.log(err)
                })
              }
            })
          }
        })
      },
			// 退出登录
			async loginout() {
        const res = await logout()
        console.log(res, '登出')
        if (res.code === 200) {
          this.messageToggle({ msgType: 'error', messageText: res.message })
          uni.removeStorageSync('token')
          setTimeout(() => {
            uni.reLaunch({
            	url: '/pages/user/login/login'
            })
          }, 2000)
        }
			},
      // 点击修改名字按钮时触发
      inputDialogToggle() {
        this.$refs.inputDialog.open()
      },
      // 当用户确认修改名字时触发
      async getInputVal(val) {
        if (val == '') return this.messageToggle({ msgType: 'error', messageText: '修改的名字不能为空' })
        const options = {
          name: this.userInfo.nickname,
          nickname: val
        }
        const res= await updateNickname(options)
        if (res.code === 200) {
          this.$store.dispatch('getAdminInfo')
        }
        console.log(JSON.stringify(res))
        // 关闭窗口后，恢复默认内容
        this.$refs.inputDialog.close()
      }
		}
	}
</script>

<style lang="scss" scoped>
	.userinfo {
		height: 100%;
		background-color: #f5f8f9;
		position: relative;
		.username {
			margin-bottom: 50rpx;
		}
		.username,
		.user-account,
		.edit-name,
    .edit-avatar
    {
			padding: 0 30rpx;
		}
		.edit-name, 
    .edit-avatar {
			.iconfont {
				font-size: 40rpx;
			}
		}
		.loginout {
			position: absolute;
			width: 90%;
			margin: 0;
			left: 5%;
			bottom: 10%;
			background-color: #FFFFFF;
			color: red;
		}
	}
</style>
