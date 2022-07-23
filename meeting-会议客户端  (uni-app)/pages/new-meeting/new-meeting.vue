<template>
	<view class="new-meeting">
    <NavTop>
    	<view class="top-bar" :style="{height: $store.getters.topBarHeight + 'px'}">
    		<view class="iconfont icon-zuojiantou back" @tap="toBack"></view>
    		<view class="bar-title">新建会议</view>
    		<view class="finish-btn" @click="handleSaveMeeting">提交</view>
    	</view>
    </NavTop>
		<view class="input-title item">
			<input type="text" v-model="meetingName" class="caret_focus" placeholder="输入会议标题" />
			<text class="iconfont icon-bianji"></text>
		</view>
    <view class="item">
    	<view>会议号</view>
    	<view>{{ meetingNumber }}</view>
    </view>
<!-- 		<view class="item" @tap="dateVisible = true">
			<view>开始日期</view>
			<view>{{ dateResult }}</view>
		</view> -->
		<view class="item" @tap="startTimeVisible = true">
			<view>开始时间</view>
			<view>{{ startTime }}</view>
		</view>
		<view class="item" @tap="handleEndTime">
			<view>结束时间</view>
			<view>{{ endTime }}</view>
		</view>
		<view class="item" @tap="selectorVisible = true">
			<view>会议类型</view>
			<view>{{ meetingTypeTxt }}</view>
		</view>
    <view class="item" v-if="meetingType === 1" @tap="$refs.inputDialog.open()">
    	<view>地点</view>
    	<view v-if="meetingPlace">{{ meetingPlace }}</view>
      <text class="iconfont icon-youjiantou" v-else></text>
    </view>
		<view class="item mb_15 border_none" @tap="$refs.descDialog.open()">
			<view>会议内容</view>
      <view class="text_ellipsis" v-if="meetingDescribed">{{ meetingDescribed }}</view>
      <text class="iconfont icon-youjiantou" v-else></text>
		</view>
		<view class="line_20 cancel_paddng_30"></view>
		<view class="partner-wrap">
			<view class="partner-num">参与者（{{ selMemberList.length }}人）</view>
      <view class="partner-member-wrap">
        <template v-if="selMemberList.length > 0">
          <view class="member-item" v-for="(member, index) of defaultSelMembers" :key="member.id">
            <image :src="member.facePhotos" @load="loadImg(index)" class="member-avatar" v-show="showImgList[`showImg${index}`]"></image>
            <image src="../../static/images/tabs/personal_actived.png" class="member-avatar" v-if="!showImgList[`showImg${index}`]"></image>
            <view>{{ member.nickname }}</view>
          </view>
        </template>
        <view class="add-partner iconfont icon-jiahao1" @click="toNewMember"></view>
      </view>
      <view class="more-mem" v-if="selMemberList.length > 10" @click="checkMoreMember">
        <text>查看全部成员</text> 
        <text class="iconfont icon-youjiantou"></text>
      </view>
		</view>
<!--    <w-picker
        :visible.sync="dateVisible"
        mode="date" 
        startYear="2022" 
        endYear="2035"
        :current="true"
        fields="day"
        @confirm="onConfirm($event,'date')"
        :disabled-after="false"
        ref="date" 
    ></w-picker> -->
    <w-picker
        :visible.sync="startTimeVisible"
        mode="date" 
        startYear="2022" 
        endYear="2035"
        :current="true"
        fields="minute"
        @confirm="onConfirm($event,'startTime')"
        :disabled-after="false"
        ref="time" 
    ></w-picker>
    <w-picker
        :visible.sync="endTimeVisible"
        mode="date" 
        startYear="2022" 
        endYear="2035"
        :current="true"
        fields="minute"
        @confirm="onConfirm($event,'endTime')"
        :disabled-after="false"
        ref="time" 
    ></w-picker>
<!--    <w-picker
    	:visible.sync="startTimeVisible"
    	mode="time" 
    	:current="true"
    	:second="false"
    	@confirm="onConfirm($event, 'startTime')"
    	ref="time" 
    ></w-picker> -->
<!--    <w-picker
    	:visible.sync="endTimeVisible"
    	mode="time" 
    	:current="true"
    	:second="false"
    	@confirm="onConfirm($event, 'endTime')"
    	ref="time" 
    ></w-picker> -->
    <w-picker
    	:visible.sync="selectorVisible"
    	mode="selector"
    	:value="meetingTypeTxt"
    	default-type="meetingType"
    	:options="selectorList"
    	@confirm="onConfirm($event,'selector')"
    	ref="selector" 
    ></w-picker>
    <!-- 输入框弹窗 -->
    <Popup ref="inputDialog" @inputVal="getInputVal($event, 'place')" :inputVal="meetingPlace" popupType="dialog" popupFormat="2" placeholder="请输入会议地点" inputTitle="编辑会议地点" />
    <Popup ref="descDialog" @inputVal="getInputVal($event, 'desc')" :inputVal="meetingDescribed" popupType="dialog" popupFormat="2" placeholder="请输入会议内容" inputTitle="编辑会议内容" />
    <!-- 提示信息弹窗 -->
    <Popup ref="message" :popupType="popupMsgtype" :msgType="popupOptions.msgType" :messageText="popupOptions.messageText" />
    <!-- 提示窗示例 -->
    <Popup ref="alertDialog" @successdel="toVideoPage" @cancel="toPrePage" popupType="dialog" popupFormat="3"
      alertType="success" alertTitle="创建会议" cancelText="返回首页" :confirmText="confirmText" alertContent="创建会议成功!" />
    <!-- 普通弹窗 -->
    <uni-popup ref="participantPopup" background-color="#fff" v-if="selMemberList.length > 10" >
      <view class="popup-content">
        <view class="participant-title">参与者（{{ selMemberList.length }}人）</view>
        <scroll-view scroll-y>
          <view>
            <view class="item participant-item" v-for="member in selMemberList" :key="member.id">
            <image :src="member.facePhotos"></image>
            <view class="participant-item-name text_ellipsis">{{ member.nickname }}</view>
            </view>
          </view>
        </scroll-view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import { date } from '../../common/common.js'
  import { saveMeeting } from '../../api/index.js'
  // @: 弹窗是否显示
	export default {
		data() {
			return {
        // 选中的成员
				selMemberList: [],
        // 线下会议即确定,线上会议即确定
        confirmText: '进入会议室',
        // 线下会议地址
        meetingPlace: '',
        // 会议描述
        meetingDescribed: '',
        // 日期@
        dateVisible: false,
        // 开始时间@
        startTimeVisible: false,
        // 结束时间@
        endTimeVisible: false,
        // 选择会议类型@
        selectorVisible: false,
        // 创建的会议名
        meetingName: '',
        // 日期
        dateResult: '',
        // 开始时间
        startTime: '',
        // 结束时间
        endTime: '',
        // 会议类型[文字]
        meetingTypeTxt: '在线会议',
        //  会议类型[数字]
        meetingType: 0,
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
        popupMsgtype: 'center',
        // 提示信息配置
        popupOptions: {
          msgType: '',
          messageText: ''
        },
        // 用户是否修改了结束时间
        editEndTime: false
			}
		},
    computed: {
      // 图片显示对象
      ...mapState(['showImgList']),
      ...mapGetters(['meetingNumber']),
      defaultSelMembers() {
        return this.selMemberList.slice(0, 10)
      }
    },
    watch: {
      selMemberList: {
        handler(newList, oldList) {
          const { showImgList } = this
          // 新旧数据长度
          const newLen = newList.length
          // 减1是为了排除第一次进入该页面参会人为空的情况
          const oldLen = oldList.length - 1
          if (newLen === 0) return this.$store.commit('SETSHOWIMGLIST', {}) //  && oldLen > 0
          // 等于0,表示是从添加成员页面再次进入本页
          if (oldLen === 0) {
            for(let i = 0; i < newLen; i++) {
              this.$set(this.showImgList, `showImg${i}`, false)
            }
          }
          this.$store.commit('SETSHOWIMGLIST', showImgList)
        }
      }
    },
    onShow() {
      const {
          y,
          m,
          d,
          h,
          minute,
          endDate,
          endHour,
          endMinute
        } = getApp().date()
      // 得到当前的时间并转换为本地格式
      // const date = new Date()
      // const y = date.getFullYear()
      // const m = (date.getMonth() + 1).toString().padStart(2, '0')
      // // padStart: 字符串不足两位往前补0
      // const d = date.getDate().toString().padStart(2, '0')
      // const h = date.getHours().toString().padStart(2, '0')
      // const minute = date.getMinutes().toString().padStart(2, '0')
      // const endTimestamp  = date.getTime() + 3600 * 1000
      // const endDate = new Date(endTimestamp)
      // const endHour = endDate.getHours().toString().padStart(2, '0')
      // const endMinute = endDate.getMinutes().toString().padStart(2, '0')
      this.dateResult = `${y}-${m}-${d}`
      this.startTime = `${this.dateResult} ${h}:${minute}`
      this.selMemberList = this.$store.state.selMemberList
      // 用户修改过结束会议时间就医用户修改过后的为准
      if(!this.editEndTime) return this.endTime = `${this.dateResult} ${endHour}:${endMinute}`
    },
    methods: {
      // 去往视频会议页面
      toVideoPage() {
        if (this.confirmText === '确定') {
          this.$refs.alertDialog.delayClose()
        } else {
          uni.reLaunch({
            url: `/pages/meeting-video/meeting-video?meetingNumber=${this.meetingNumber}&startTime=${this.startTime}&endTime=${this.endTime}&page=1`
          })
        }
      },
      toPrePage() {
        setTimeout(() => {
          getApp().toBack()
          // 重置
          this.$store.commit('SETSELMEMBERLIST', [])
        }, 1500)
      },
      // 点击弹出修改结束会议时间的窗口
      handleEndTime() {
        this.endTimeVisible = true
        this.editEndTime = true
      },
      messageToggle({ msgType, messageText }, popupMsgtype = 'center') {
        this.popupOptions = {
          msgType,
          messageText
        }
        this.$refs.message.open()
        // 消息弹窗在中心时才需手动关闭
        if (popupMsgtype === 'center') {
          // 延时关闭
          this.$refs.message.delayClose()
        }
      },
      // 查看更多参会人
      checkMoreMember() {
        this.$refs.participantPopup.open('bottom')
      },
      // 倒退
      toBack() {
        getApp().toBack()
      },
      // 图片加载完成监听事件
      loadImg(index) {
        const { showImgList } = this
        // 哪个图片加载完毕就优先渲染哪个图片
        this.$set(this.showImgList,`showImg${index}`, true)
        // showImgList[`showImg${index}`] = true
        this.$store.commit('SETSHOWIMGLIST', showImgList)
      },
      // 创建会议方法
      async saveMeeting(options) {
        const res = await saveMeeting(options)
        // 消息提示
        this.messageToggle({ msgType: res.code === 200 ? 'success' : 'error', messageText: res.message })
        if (res.code === 200) {
          // 存储是否创建会议成功了
          this.$store.commit('CREATEMEETING', true)
          const curPage = getCurrentPages()
          const perPage = curPage[curPage.length - 2]
          perPage.$vm.historyOptions.current = 1
          // 先清空
          this.$store.commit('RESETHISTROYLIST')
          // 再请求
          this.$store.dispatch('getUserHistoryConference', perPage.$vm.historyOptions)
          // 打开弹窗
          this.$refs.alertDialog.open()
        } else if (res.code === 500) {
          console.log(res.message)
        }
      },
      // 当用户弹出层确认时触发
      getInputVal(val, type) {
        if (type === 'place') {
          this.meetingPlace = val
        } else {
          this.meetingDescribed = val
        }
      },
      // 日期选择完毕后按确定执行
      onConfirm(res,type){
        const { result: txt, value } = res
        // 判断类型
        switch (type) {
          // case 'date':
          //   this.dateResult = txt
          //   break
          case 'startTime': 
            this.startTime = txt
            break
          case 'endTime':
            this.endTime = txt
            break
          case 'selector':
            this.meetingType = value - 0
            this.meetingType === 0 ? this.confirmText = '进入会议室' : this.confirmText = '确定'
            this.meetingTypeTxt = txt
            break
        }
      },
      // 创建会议
      handleSaveMeeting() {
        const { meetingName, startTime, meetingPlace, endTime, dateResult, meetingDescribed, meetingType } = this
        const meetingStartTime = `${startTime}:00`
        const meetingEndTime = `${endTime}:00`
        const startTimestamp = new Date(meetingStartTime).getTime()
        const endTimestamp = new Date(meetingEndTime).getTime()
        // 校验
        if (!meetingName) return this.messageToggle({ msgType: 'error', messageText: '会议标题不能为空' })
        if (startTimestamp >= endTimestamp) return this.messageToggle({ msgType: 'error', messageText: '会议时间设置有误' })
        if (meetingType === 1 && !meetingPlace) return this.messageToggle({ msgType: 'error', messageText: '会议地点不能为空' })
        // 请求所需参数对象
        const options = {
            meetingAddress: meetingType === 1 ? meetingPlace : "",
            meetingDescribed: meetingDescribed || "无",
            meetingEndTime,
            meetingName,
            meetingStartTime,
            meetingType,
            person: [...this.$store.getters.selMemberIdList]
          }
        // 创建会议
        this.saveMeeting(JSON.stringify(options))
      },
      // 跳转到添加新成员列表
			toNewMember() {
        uni.navigateTo({
          url: '../new-member/new-member?flag=1'
        })
      }
		}
	}
</script>

<style lang="scss" scoped>
	.new-meeting {
		padding: 0 30rpx;
    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .back {
        font-size: 45rpx;
        font-weight: bold;
      }
      .finish-btn {
        color: $uni-color-help2;
        font-size: 30rpx;
      }
    }
		// 输入会议号样式
		.input-title {
			input {
				flex: 1;
				height: 100%;
			}
			text {
				padding-left: 15rpx;
				font-size: 40rpx;
				color: #8b9391;
			}
		}
		// 参与者
		.partner-wrap {
			margin-top: 30rpx;
      // 新成员盒子
      .partner-member-wrap {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        // 每一个
        .member-item {
          text-align: center;
          font-size: 28rpx;
          margin: 20rpx;
          .member-avatar {
            width: 80rpx;
            height: 80rpx;
            border-radius: 50%;
          }
        }
      }
			.partner-num {
				color: black;
        margin-bottom: 10rpx;
			}
			.add-partner {
        border: 5rpx dashed $uni-color-gray;
        color: $uni-color-gray;
        border-radius: 50%;
        padding: 10rpx;
				font-size: 50rpx;
			}
      // 查看全部成员
      .more-mem {
        text-align: center;
        font-size: 28rpx;
        color: #c7c7c7;
        padding: 20rpx 0;
      }
    }
    // 查看更多参会人
    .popup-content {
      height: 70vh;
      .participant-title {
        padding: 30rpx;
        text-align: center;
        font-size: 40rpx;
        font-weight: bold;
      }
      scroll-view {
        height: calc(100% - 120rpx);
        .participant-item {
          height: 130rpx;
          padding: 30rpx;
          image {
            width: 90rpx;
            height: 90rpx;
            border-radius: 50%;
          }
        }
      }
    }
	}
</style>
