<template>
	<view class="schedule">
		<view class="mode-moon">
			<view class="left-mode">
				<text class="actived">日程</text>
				<text>会议</text>
				<text>直播</text>
			</view>
			<view class="right-show-all">
				<!-- ~~: 去掉字符前的0 -->
				<text class="show-all" @click="handleExpand">{{showAll ? '折叠' : '展开'}}</text>
				<text class="iconfont" :class="isClickMonth ? 'icon-shangjiantou' : 'icon-xiajiantou'"></text>
			</view>
		</view>
    <view @touchmove.prevent="touchmove" @touchstart="touchstart" @touchend="touchend">
      <uni-calendar
       class="uni-calendar--hook"
       :showAll="showAll"
       :showMonth="false" 
       @change="change" 
       @monthSwitch="monthSwitch"
      />
    </view>
		<view class="today-event">
      <view class="event-today">今日</view>
      <scroll-view scroll-y @scrolltolower="scrolltolower" :class="{'show-all-height': showAll, 'show-ban-height': !showAll}">
        <view class="schedule-list" v-if="calendarList.length">
          <view class="schedule-item" v-for="item in calendarList" :key="item.id" @click="toScDetails(item.id)">
            <view class="left-bg"></view>
            <view class="center-info">
              <view class="schedule-name">
                <text>{{ item.meetingStartTime }}</text>
                <text>{{ item.meetingTitle }}</text>
              </view>
              <view class="schedule-meetingNum">
                <text>{{ item.meetingEndTime }}</text>
                <text>{{ item.meetingNumber }}</text>
              </view>
            </view>
            <text class="iconfont icon-youjiantou"></text>  
          </view>
        </view> 
        <image src="../../static/images/icon/none1.jpg" class="none-img" v-else></image>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  import { getCalendar } from '../../api/index.js'
	import uniCalendar from '../../components/uni-calendar/uni-calendar.vue'
  // 触摸开始前的坐标位置
  let startX = 0
  let startY = 0
  // 触摸结束时的坐标位置
  let endX = 0
  let endY = 0
	export default {
		data() {
			return {
				isClickMonth: false,
        showAll: false,
        // 获取日程信息的参数对象
        calendarOptions: {
          current: 1,
          size: 10,
          dataTime: "",
          keywords: ""
        },
        // 日程列表
        calendarList: []
			}
		},
		components: { 'uni-calendar': uniCalendar },
    onShow() {
      const {
          y,
          m,
          d
        } = getApp().date()
        console.log(`${y}-${m}-${d}`)
        // 时间格式处理初始化
        if (this.calendarOptions.dataTime === `${y}-${m}-${d}`) return
        this.calendarOptions.dataTime = `${y}-${m}-${d}`
    },
    watch: {
      calendarOptions: {
        deep: true,
        handler(newObj) {
          this.getCalendarFun()
        }
      }
    },
		methods: {
      // 获取本用户日程信息
      async getCalendarFun() {
        const { calendarOptions } = this
        const { obj: res } = await getCalendar(calendarOptions)
        console.log(res)
        const tempCalendarList = res
        // 数据处理
        tempCalendarList.forEach(v => {
          v.meetingStartTime = v.meetingStartTime.substring(11, 16)
          v.meetingEndTime = v.meetingEndTime.substring(11, 16)
          v.meetingDate = v.meetingStartTime.substring(0, 10)
        })
        console.log(tempCalendarList)
        this.calendarList = tempCalendarList
      },
      // 上拉加载更多
      scrolltolower() {
        const { calendarOptions } = this
        calendarOptions.current++
      },
      // 前往详情页
      toScDetails(id) {
        console.log(id)
        uni.navigateTo({
          url: './schedule-details/schedule-details?id=' + id
        })
      },
      handleExpand() {
        this.showAll = !this.showAll
        this.isClickMonth = !this.isClickMonth
      },
			monthSwitch(e) {
				console.log('monthSwitch')
			},
			change(e) {
        this.calendarOptions.dataTime = e.fulldate
			},
      touchstart(e) {
        startX = e.changedTouches[0].pageX
        startY = e.changedTouches[0].pageY
      },
      touchend() {
        // 触摸结束后重置
        startX = 0
        startY = 0
        endX = 0
        endY = 0
      },
      touchmove(e) {
        endX = e.changedTouches[0].pageX
        endY = e.changedTouches[0].pageY
        const X = endX - endX
        const Y = endY - startY
        //  不论上滑下滑都会触发[大于20是允许误差20之内]
        if (Math.abs(Y) - Math.abs(X) > 20 && Y > 0) {
          if (this.showAll) return
          this.handleExpand()
        } else if (Math.abs(Y) - Math.abs(X) > 20 && Y < 0) {
          if (!this.showAll) return
          this.handleExpand()
        }
      }
		}
	}
</script>

<style lang="scss" scoped>
	.schedule {
		.mode-moon {
			position: relative;
			padding: 0 30rpx 0 10rpx;
			display: flex;
			justify-content: space-between;
			font-size: $uni-font-size-base;
			color: $uni-color-gray;

			.left-mode {
				text {
					margin: 0 20rpx;

					&.actived {
						color: black;
						border-bottom: 2px solid $uni-color-theme;
					}
				}
			}
		}
    .today-event {
      .event-today {
        background-color: #f4f8fa;
        padding: 20rpx 30rpx;
      }
      scroll-view { 
        &.show-all-height {
          height: calc(100vh - 57vh);
        }
        &.show-ban-height {
          height: calc(100vh - 390rpx)
        }
        .none-img {
          width: 750rpx;
          height: 100%;
        }
      }
      .schedule-item {
        display: flex;
        align-items: center;
        padding: 8rpx 30rpx;
        .left-bg {
          background-color: #f49556;
          width: 8rpx;
          height: 80rpx;
        }
        .schedule-meetingNum, .icon-youjiantou {
          color: #c7c7c7;
          font-size: 28rpx;
        }
        .center-info {
          flex: 1;
          margin: 0 20rpx;
          .schedule-name, .schedule-meetingNum {
            margin: 10rpx 0;
            > text:last-child {
              margin-left: 30rpx;
            }
          }
        }
        .icon-youjiantou {
          font-size: 45rpx;
        }
      }
    }
  }
</style>
