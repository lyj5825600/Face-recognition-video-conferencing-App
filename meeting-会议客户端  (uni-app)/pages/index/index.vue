<template>
	<view class="home-container">
		<!-- 会议操作 -->
		<view class="meeting-box">
			<view class="meeting-item" v-for="(tool, index) in tools" :key="index" @click="toPage(index)">
				<view class="icon" :class="tool.className">
					<text :class="tool.icon"></text> 
				</view>
				<view class="tool-name">{{ tool.name }}</view>
			</view>
		</view>
		<view class="history-call">
			<view class="his-title">
				<text>历史管理</text>
				<text @click="handleEdit" :style="!isManage ? 'color: red' : ''">{{ isManage ? '管理' : '删除' }}</text>
			</view>
			<scroll-view scroll-y class="hidden_bar" scroll-with-animation :scroll-into-view="curSite" @scrolltolower="scrolltolower" @scroll="scrollPlace" :refresher-triggered="loading" refresher-enabled @refresherrefresh="refresherrefresh">
				<view id="top0">	
					<HistoryCall v-if="histroyList.length > 0 || tempHisList.length > 0" :histroyList="histroyList.length > 0 ? histroyList : tempHisList" :isShow="isShow" :hasMore="hasMore" @delHisMeeting="delHisMeeting"/>
          <image src="../../static/images/icon/none.jpeg" class="none-img" v-else></image>
          <!-- <view class="tip" v-else>暂无历史数据</view> -->
				</view>
			</scroll-view>
		</view>	
    <FloatFrame @handle="toHisMeeting"/>
    <!-- 提示窗示例 -->
    <Popup ref="alertDialog" @successdel="successdel" popupType="dialog" popupFormat="3" alertType="error" alertTitle="删除历史会议" confirmText="删除" alertContent="你确定删除吗?" />
    <BackTop :animationData="animationData" :site="true" @earnSite="earnSite"/>
	</view>
</template>

<script>
  import { mapState } from 'vuex'
  import { removeHistoryConference } from '../../api/index.js'
  import { showToast, showLoading } from '../../utils/uniAsync.js'
	import HistoryCall from '../../components/HistoryCall/HistoryCall.vue'
  import FloatFrame from '../../components/FloatFrame/FloatFrame.vue'
  import Popup from '../../components/Popup/Popup.vue'
  import BackTop from '../../components/BackTop/BackTop.vue'
	export default {
		data() {
			return {
        animationData: {},
        curSite: '',
				tools: [
					{icon: 'iconfont icon-jiashu', name: '加入会议', className: 'add-icon'},
					{icon: 'iconfont icon-shipin1', name: '发起会议', className: 'initiate-icon'},
					{icon: 'iconfont icon-richeng', name: '预约会议', className: 'reserve-icon'}
				],
				isShow: false,
				isManage: true,
        // 用户指定要删除的历史会议记录列表
        ids: [],
        // 是否还有跟多数据
        hasMore: true,
        // 是否下拉
        loading: false,
        tempHisList: [],
        // 历史会议记录参数对象
        historyOptions: {
          keywords: '',
          // 页码值
          current: 1,
          // 条数
          size: 10
        }
			}
		},
		components: { HistoryCall, FloatFrame, BackTop, Popup },
    computed: {
      ...mapState(['histroyList', 'hisCount', 'memberList', 'RtcModule'])
    },
    onLoad() {
      // 重置
      this.$store.commit('RESETHISTROYLIST')
      this.tempHisList = []
      // 动态设置 tabBar 某一项的内容
      uni.setTabBarStyle({ // [uni.setTabBarStyle在tarBar中第一个list项页面的onLoad中执行即可]
        // 背景图
        backgroundImage: '/static/images/icon/tarbar_bg.png',
        // 是否平铺
        backgroundRepeat: 'repeat'
      })
      this.$store.dispatch('getAdminInfo')
      this.$store.dispatch('getUserHistoryConference', this.historyOptions)
      this.animation = uni.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      })
    },
    onShow() {
      this.RtcModule && this.RtcModule.destroyRtc((res) => {console.log('先销毁!!!')})
      // 页面显示清空选中成员列表和其清除选中
      const { memberList } = this
      memberList.forEach(v => {
        v.isSel = false
      })
      // 重置
      this.$store.commit('SETSELMEMBERLIST', [])
      this.$store.commit('SETALLCHECKED', false)
      this.$store.commit('SETMEMBERLIST', memberList)
      this.$store.commit('SETCURSELINDEXS', [])
    },
		methods: {
      // // 获取用户历史记录方法
      // async getUserHistoryConference(historyOptions) {
      //   const { obj: res } = await userHistoryConference(historyOptions)
      //   this.count = res.count
      //   this.histroyList = [...this.histroyList, ...res.recordList]
      //   // vuex管理历史会议记录
      //   this.$store.commit('SETHISTROYLIST', this.histroyList)
      // },
      earnSite() {
        this.curSite = 'top0'
      },
      scrollPlace(e) {
        // 动画
        if (e.detail.scrollTop >= 300) {
          this.animation.translateX(-40).scale(2, 2).opacity(0.8).rotate(360).step()
          this.animationData = this.animation.export()
        } else {
          this.curSite = ''
          this.animation.translateX(40).scale(.2, .2).opacity(0).rotate(-360).step()
          this.animationData = this.animation.export()
        }
      },
      // 按弹出提示框删除按键时触发
      successdel() {
        const { ids } = this
        // 删除....
        this.removeHistoryConferenceFun(ids)
      },
      // 获取子组件传过来的要删除的项id列表
      delHisMeeting(ids) {
        this.ids = ids
      },
      // 滚动到底部加载更多
      scrolltolower() {
        // 解构出来的对象 指向 this
        const { histroyList, historyOptions, hisCount } = this
        if (histroyList.length === hisCount) {
          // 无更多数据...
          return this.hasMore = false
        }
        historyOptions.current++
        // this.getUserHistoryConference(historyOptions)
        this.$store.dispatch('getUserHistoryConference', this.historyOptions)
      },
      // 下拉刷新
      refresherrefresh() {
        if (!this.loading) {
          this.loading = true
          this.historyOptions.current = 1
          this.tempHisList = this.histroyList
          this.$store.commit('RESETHISTROYLIST')
          setTimeout(() => {
            this.$store.dispatch('userHistoryConferencePull', this.historyOptions).then(() => {
              this.loading = false
              this.tempHisList = []
            })
          }, 600)
        }
      },
      // 删除用户选中的历史会议记录
      async removeHistoryConferenceFun(ids) {
        const { isShow, isManage, historyOptions } = this
        const res = await removeHistoryConference(ids)
        if (res.code === 200) {
          uni.hideLoading()
          // 删除成功后再归位
          this.isShow = !isShow
          this.isManage = !isManage
          // 重置
          this.ids = []
          historyOptions.current = 1
          await showToast({title: res.message, icon: 'success'})
          this.$store.commit('RESETHISTROYLIST')
          this.$store.dispatch('getUserHistoryConference', this.historyOptions)
        }
      },
			// 编辑历史呼叫记录
			async handleEdit() {
        const { isShow, isManage, ids } = this
        // 打开确认框
        if (!isManage && ids.length > 0) return this.$refs.alertDialog.open()
				this.isShow = !isShow
				this.isManage = !isManage
			},
      // 跳转到历史会议页面
      toHisMeeting() {
        uni.navigateTo({
          url: '/pages/index/historical-meeting/historical-meeting'
        })
      },
			// 跳转到不同的页面
			toPage(index) {
				if(index === 0) {
					// 加入会议
					uni.navigateTo({
						url: '/pages/join-meeting/join-meeting'
					})
				} else if (index === 1) {
					// 发起会议
					uni.navigateTo({
						url: '../new-meeting/new-meeting'
					})
				} else if (index === 2) {
					// 预约会议
					uni.navigateTo({
						url: '/pages/newschedule/newschedule'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
  // 暂无数据图
  .none-img {
    position: absolute;
    width: 100vw;
    height: calc(100vh - 310rpx);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
	.home-container {
		padding: 0 30rpx;
		// 会议相关
		.meeting-box {
			display: flex;
			justify-content: space-between;
			padding: 50rpx 0 30rpx;
			.meeting-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				.icon {
					width: 90rpx;
					height: 90rpx;
					line-height: 90rpx;
					text-align: center;
					border-radius: 20rpx;
					&.add-icon {
						background-color: $uni-color-help1;
					}
					&.initiate-icon, &.reserve-icon {
						background-color: $uni-color-theme;
					}
					> text {
						color: $uni-bg-color;
						font-size: 45rpx;
					}
				}
				.tool-name {
					margin-top: 15rpx;
					font-size: $uni-font-size-base;
				}
			}
		}
		// 历史呼叫
		.history-call {
			.his-title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: $uni-font-size-sm;
				color: $uni-color-gray;
				background-color: #f6f6fc;
				height: 80rpx;
				margin: 0 -30rpx;
				padding: 0 30rpx;
			}
			scroll-view {
				height: calc(100vh - 310rpx);
        position: relative;
			}
		}
	}
</style>
