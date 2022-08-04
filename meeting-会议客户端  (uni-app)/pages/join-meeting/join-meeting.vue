<template>
	<view class="join-meeting">
		<input type="text" placeholder="请输入会议号" v-model="meetingNum " placeholder-class="placeholder">
		<view class="btn join-btn" @click="handleJoin">确定</view>
    <!-- 提示信息弹窗 -->
    <Popup ref="message" :popupType="popupMsgtype" :msgType="popupOptions.msgType" :messageText="popupOptions.messageText" />
	</view>
</template>

<script>
  import { conferenceIdViewTheConferenceStatus } from '../../api/index.js'
	// 导入二次封装的uni 原生 api
	import { showToast } from '../../utils/uniAsync.js'
	export default {
		data() {
			return {
				meetingNum: '',
        popupMsgtype: 'center',
        popupOptions: {
          msgType: '',
          messageText: ''
        } 
			}
		},
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
			// 确认加入会议
			async handleJoin() {
				const { meetingNum } = this
				// 检查会议号
				if (meetingNum == '') {
					return this.messageToggle({ msgType: 'error', messageText: '会议号不能为空' })
				} else if (meetingNum.length < 8) {
          return this.messageToggle({ msgType: 'error', messageText: '会议号为8位' })
        }
        // 后台再次检测
        const res = await conferenceIdViewTheConferenceStatus({ meetingNumber: meetingNum})
        if (res.code !== 200) return await showToast({title: res.message, icon: 'error', mask: true})
        if (res.code === 200) {
          // 初始化相机
          this.$store.commit('initCamera', true)
          const mtDetail = res.obj
          // 数据处理
          mtDetail.meetingStartTime = mtDetail.meetingStartTime.replace('T', ' ')
          mtDetail.meetingEndTime = mtDetail.meetingEndTime.replace('T', ' ')
          mtDetail.createTime = mtDetail.createTime.replace('T', ' ')
          this.$store.commit('SETMTDETAIL', mtDetail)
          await showToast({title: res.message, icon: 'success', mask: true, duration: 1000})
          setTimeout(() => {
            // 跳转到签到页面
            // uni.navigateTo({
            // 	url: '/pages/online-checkin/online-checkin?flag=0&meetingNumber=' + meetingNum
            // })
            // 跳转到详情页面
            uni.navigateTo({
              url: './meeting-detail/meeting-detail'
            })
          }, 1000)
        }
			}
		}
	}
</script>

<style lang="scss" scoped>
	.join-meeting {
		width: 100%;
		// 输入会议号
		input {
			width: 100%;
			height: 90rpx;
			padding-left: 20rpx;
			background-color: #f9f9f9;
			& /deep/ .placeholder {
				font-size: 28rpx;
			}
		}
		.join-btn {
			background-color: $uni-color-help4;
		}
	}
</style>
