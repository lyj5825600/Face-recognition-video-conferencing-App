<template>
	<view class="newschedule">
		<NavTop>
			<view class="top-bar" :style="{height: $store.getters.topBarHeight + 'px'}">
				<view class="cancel-btn" @click="toFrontPage">取消</view>
				<view class="bar-title">新建日程</view>
				<view class="finish-btn" @click="addSchedule">完成</view>
			</view>
		</NavTop>
		<view class="schedule-count">
			<text>这是你的第一个日程</text>
		</view>
		<view class="time_box mt_20">
			<view class="time-start" @tap="startDateVisible = true">
				<view class="date">{{ startDateOptions.curDate }} {{ startDateOptions.curDay }}</view>
				<view>{{ startDateOptions.startTime }}</view>
			</view>
			<view class="time-end" @tap="endDateVisible = true">
				<view class="date">{{ endDateOptions.curDate }} {{ endDateOptions.curDay }}</view>
				<view>{{ endDateOptions.endTime }}</view>
			</view>
		</view>
		<view class="all-day mb_20">
			<text>全天</text>
			<!-- 开关选择器 -->
			<switch class="switch" color="#448cfc" />
		</view>
    <view class="item" @tap="$refs.meetingTitleDialog.open()">
    	<view>会议名</view>
    	<view class="title text_ellipsis">{{ meetingTitle }}</view>
      <text class="iconfont icon-youjiantou" v-if="!meetingTitle"></text>
    </view>
    <view class="item" @tap="selectorVisible = true">
    	<view>会议类型</view>
    	<view class="title text_ellipsis">{{ meetingTypeTxt }}</view>
    </view>
<!--    <view class="item">
    	<text class="iconfont icon-huiyihao"></text>
    	<view class="title">
    		<input type="text" class="area-input" placeholder="请输入会议号" placeholder-class="placeholder" />
    	</view>
      <text class="iconfont icon-youjiantou"></text>
    </view> -->
		<view class="item">
			<text class="iconfont icon-wodetongshi"></text>
			<view class="title text_ellipsis" @click="$refs.sponsorDialog.open()">{{ sponsor ? sponsor : '会议发起人' }}</view>
			<text class="iconfont icon-youjiantou" v-if="!sponsor"></text>
		</view>
		<view class="item mt_20">
			<text class="iconfont  icon-huiyihao"></text>
			<view class="title text_ellipsis" @click="$refs.meetingNumDialog.open()">{{ meetingNum ? meetingNum : '会议号' }}</view>
			<text class="iconfont icon-youjiantou" v-if="!meetingNum"></text>
		</view>
		<view class="item sel" v-if="meetingTypeTxt == '线下会议'">
			<text class="iconfont icon-31dingwei"></text>
			<view class="title">
				<input type="text" class="area-input" v-model.lazy="meetingAddress" placeholder="输入日程地点" placeholder-class="placeholder" />
			</view>
			<text class="iconfont icon-dingwei"></text>
		</view>
		<view class="item mt_20 mb_20">
			<text class="iconfont icon-lingdang"></text>
			<view class="title" style="color: black;">15分钟前, 应用内提醒</view>
			<text class="iconfont icon-youjiantou"></text>
		</view>
		<view class="btm-tool">
			<view class="tool-item">
				<text class="iconfont icon-shandian"></text>
				<view>通知</view>
			</view>
			<view class="tool-item">
				<text class="iconfont icon-zhongfu"></text>
				<view>重复</view>
			</view>
			<view class="tool-item">
				<text class="iconfont icon-fujian"></text>
				<view>附件</view>
			</view>
			<view class="tool-item">
				<text class="iconfont icon-miaoshu"></text>
				<view>描述</view>
			</view>
      <w-picker
          :visible.sync="startDateVisible"
          mode="date" 
          startYear="2022" 
          endYear="2035"
          :current="true"
          fields="minute"
          @confirm="onConfirm($event,'startDate')"
          :disabled-after="false"
      ></w-picker>
     <w-picker
          :visible.sync="endDateVisible"
          mode="date" 
          startYear="2022" 
          endYear="2035"
          :current="true"
          fields="minute"
          @confirm="onConfirm($event,'endDate')"
          :disabled-after="false"
      ></w-picker>
      <w-picker
      	:visible.sync="selectorVisible"
      	mode="selector"
      	:value="meetingTypeTxt"
      	default-type="meetingType"
      	:options="selectorList"
      	@confirm="onConfirm($event,'selector')"
      	ref="selector" 
      ></w-picker>
      <Popup ref="sponsorDialog" @inputVal="getInputVal($event, 'sponsor')" :inputVal="sponsor" popupType="dialog" popupFormat="2" placeholder="请输入会议发起人" inputTitle="会议发起人" />
      <Popup ref="meetingNumDialog" @inputVal="getInputVal($event, 'meetingNum')" :inputVal="meetingNum" popupType="dialog" popupFormat="2" placeholder="请输入会议号" inputTitle="编辑会议号" />
      <Popup ref="meetingTitleDialog" @inputVal="getInputVal($event, 'meetingTitle')" :inputVal="meetingTitle" popupType="dialog" popupFormat="2" placeholder="请输入会议名" inputTitle="编辑会议名" />
		</view>
	</view>
</template>

<script>
  import { addCalendar } from '../../api/index.js'
  import { showToast } from '../../utils/uniAsync.js'
	import NavTop from '../../components/NavTop/NavTop.vue'
  let weeks = []
	export default {
		data() {
			return {
        startDateVisible: false,
        endDateVisible: false,
        selectorVisible: false,
        startDateOptions: {
          // 预约的会议开始时间
          startTime: '',
          // 当天日期
          curDate: '',
          // 会议日期
          dateResult: '',
          // 当前是星期几
          curDay: ''
        },
        endDateOptions:{
          // 预约的会议结束时间
          endTime: '',
          // 当天日期
          curDate: '',
          // 会议日期
          dateResult: '',
          // 当前是星期几
          curDay: ''
        },
        // 会议类型[文字]
        meetingTypeTxt: '在线会议',
        // 选择会议类型@选择项配置
        selectorList:[
        	{
        		label:"在线会议",
        		value: "0"
        	},{
        		label:"线下会议",
        		value: "1"
        	}
        ],
        // 会议号
        meetingNum: '',
        // 会议发起人
        sponsor: '',
        // 会议名
        meetingTitle: '',
        // 会议地点
        meetingAddress: ''
			}
		},
    onShow() {
      const { startDateOptions, endDateOptions } = this
      const {
          y,
          m,
          d,
          h,
          day,
          weekArr,
          minute,
          endDate,
          endHour,
          endMinute
        } = getApp().date()
        // 时间格式处理初始化
        weeks = weekArr
        startDateOptions.dateResult = endDateOptions.dateResult = `${y}-${m}-${d}`
        startDateOptions.curDate = endDateOptions.curDate = `${m}月${d}日`
        startDateOptions.startTime = `${h}:${minute}`
        endDateOptions.endTime = `${endHour}:${endMinute}`
        startDateOptions.curDay = endDateOptions.curDay = day
    },
		components: { NavTop },
		methods: {
      async addCalendarFun(options) {
        const res = await addCalendar(options)
        if (res.code === 200) {
          await showToast({title: '新建成功', icon: 'success'})
          setTimeout(this.toFrontPage, 2000)
        }
        console.log(JSON.stringify(res))
      },
      // 当用户弹出层确认时触发
      getInputVal(val, type) {
        switch (type){
          case 'meetingNum':
            this.meetingNum = val
            break;
          case 'sponsor':
            this.sponsor = val
            break;
          default:
            this.meetingTitle = val
        }
      },
      // 当用户确定选中日期时触发
      onConfirm(res,type){
        // 进行时间格式处理后页面渲染
        const { endDateOptions, startDateOptions } = this
      	const val = res.result
        const { year: y, month: m, minute, hour: h, day: d } = res.obj
        const curWeek = new Date(val).getDay()
        switch (type){
          case 'startDate':
            startDateOptions.dateResult = `${y}-${m}-${d}`
            startDateOptions.curDate = `${m}月${d}日`
            startDateOptions.startTime = `${h}:${minute}`
            startDateOptions.curDay = weeks[curWeek]
            break;
          case 'endDate':
            endDateOptions.dateResult = `${y}-${m}-${d}`
            endDateOptions.curDate = `${m}月${d}日`
            endDateOptions.endTime = `${h}:${minute}`
            endDateOptions.curDay = weeks[curWeek]
            break;
          case 'selector':
            this.meetingTypeTxt = val
            break;
        }
      },
      // 当用户点击完成按钮时触发
      addSchedule() {
        const { meetingTitle, startDateOptions, endDateOptions, meetingNum, sponsor, meetingAddress } = this
        const options = {
          meetingAddress: meetingAddress || '',
          meetingEndTime: `${endDateOptions.dateResult} ${endDateOptions.endTime}:00`,
          meetingNickname: sponsor,
          meetingNumber: meetingNum - 0,
          meetingStartTime: `${startDateOptions.dateResult} ${startDateOptions.startTime}:00`,
          meetingTitle
        }
        this.addCalendarFun(options)
      },
      // 跳转到首页
			toFrontPage() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.newschedule {
		height: 100%;
		background-color: #f7f7f7;
		// 自定义头部导航
		.top-bar {
			width: 100%;
			display: flex;
			align-items: center;
			font-size: $uni-font-size-base;
			// margin-top: 15rpx;
			.bar-title {
				flex: 1;
				text-align: center;
				font-weight: bold;
			}
			.finish-btn {
				background-color: $uni-color-theme;
				text-align: center;
				color: white;
				font-size: 26rpx;
				padding: 5rpx 15rpx;
				border-radius: 8rpx;
			}
		}
		.top-bar,
		.item, 
		.btm-tool {
			padding: 0 30rpx;
		}
		// 日程计数
		.schedule-count {
			font-weight: bold;
			padding: 30rpx 30rpx 90rpx;
			background-color: #FFFFFF;
		}
		// 开会时间
		.time_box {
			display: flex;
			font-size: $uni-font-size-base;
			padding: 20rpx 30rpx;
			background-color: #FFFFFF;
			view {
				flex: 1;
			}
		}
		// 开关
		.all-day {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10rpx 30rpx;
			background-color: #FFFFFF;
			border-top: 1px solid #f9f9f9;
			.switch {
				transform: scale(.7);
			}
		}
		.item {
			background-color: #FFFFFF;
			.title {
				flex: 1;
				color: #ccc;
				margin-left: 15rpx;
				.area-input {
					width: 100%;
					height: 100%;
					color: black;
					&.placeholder {
						color: #ccc;
					}
				}
			}
			&.sel {
				border-top: 1px solid #c9c9c9;
			}
			> text {
				color: #8e9499;
				font-size: 50rpx;
			}
		}
		.btm-tool {
			display: flex;
			padding: 30rpx 0;
			background-color: #FFFFFF;
			.tool-item {
				flex: 1;
				text-align: center;
				> text {
					font-size: 50rpx;
					// font-weight: bold;
					color: #333333;
				}
				view {
					font-size: $uni-font-size-sm;
					color: #c9c9c9;
				}
			}
		}
	}
</style>
