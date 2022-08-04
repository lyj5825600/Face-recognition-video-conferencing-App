<template>
  <view class="meeting-details">
    <NavTop>
    	<view class="top-bar" :style="{height: $store.getters.topBarHeight + 'px'}">
        <view class="back-box">
          <text class="iconfont icon-zuojiantou" @click="handleBack"></text>
        </view>
        <view class="title" :class="page == '1' ? '' : 'special-style'">会议详情</view>
        <view class="right-btn" v-if="page == '1'">
          <uni-icons type="more-filled" size="25" @tap="$refs.morePopup.open('bottom')"></uni-icons>
        </view>
    	</view>
    </NavTop>
    <MtDetail :mtDetail="mtDetail" />
    <view class="join-person item top-border-1px">
      <text>参会人员</text>
      <text @tap="toggle('right', true)">查看</text>
    </view>
    <view class="no-jion-person item top-border-1px">
      <text>未参会成员</text>
      <text @tap="toggle('left', false)">查看</text>
    </view>
    <!-- 普通弹窗 -->
    <uni-popup ref="popup1" background-color="#fff" @change="change">
      <view class="popup-content" :class="{ 'popup-left-width': type === 'left', 'popup-right-width': type === 'right' }">
        <view class="participant-title" :style="{marginTop: $store.state.barHeight.statusBarHeight + 'px'}"  v-if="flag ? mtDetail.successfullyPerson : mtDetail.failedPerson">{{ flag ? `已参会人列表（${mtDetail.successfullyPerson.length}）` : `未参会人列表（${mtDetail.failedPerson.length}）` }}</view>
        <template>
          <scroll-view scroll-y>
            <view v-if="flag">
              <view class="member-item" v-for="mem in mtDetail.successfullyPerson">
                <view class="member-item-content">
                  <view class="text_ellipsis">{{ mem.signNickname }}</view> 
                  <view v-if="mem.signWay === 3">发起人</view>
                  <view v-else-if="mem.signWay === 0">人脸</view>
                  <view v-else-if="mem.signWay === 1">手动</view>
                </view>
              </view>
            </view>
            <view v-else>
              <view class="member-item text_ellipsis" v-for="mem in mtDetail.failedPerson">{{ mem.meetingNickname }}</view>
            </view>
          </scroll-view>
        </template>
      </view>
    </uni-popup>
    <view class="meeting-state" :style="{color: (meetingState == '重新入会') ? '#448cfc' : '#c7c7c7'}" @tap="toNextPage">{{ meetingState }}</view>
    <!-- 普通弹窗 -->
    <uni-popup ref="morePopup" background-color="#fff">
      <view class="more-popup-content">
        <view class="addmt-btn" v-if="meetingState == '重新入会'" @tap="toNextPage">{{ meetingState }}</view>
        <view class="state-btn" v-else>{{ meetingState }}</view>
        <view class="del-btn" v-if="mtDetail.meetingDelete === 0" @tap="closeMeeting">关闭会议</view>
        <view class="line_20"></view>
        <view class="cancel-btn" @tap="$refs.morePopup.close()">取消</view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
  import NavTop from '../../../components/NavTop/NavTop.vue'
  import MtDetail from '../../../components/MtDetail/MtDetail.vue'
  import { showToast } from '../../../utils/uniAsync.js'
  import { viewConferenceInformationBasedTheId, closeMeeting } from '../../../api/index.js'
  export default {
    data() {
      return {
        mtDetail: {},
        type: '',
        flag: '',
        page: ''
      }
    },
    components: { NavTop, MtDetail },
    onLoad({ id, page }) {
      console.log(id)
      this.page = page
      this.getMeetingDetail(id)
    },
    computed: {
      meetingState() {
        const { mtDetail } = this
        return mtDetail.meetingDelete === 0 ? mtDetail.meetingType === 1 ? '会议进行中' : '重新入会' : '会议已结束'
      }
    },
    methods: {
      // 加入视频会议
      toNextPage() {
        const { meetingState, mtDetail } = this
        if (meetingState == '重新入会') {
          console.log('加入视频会议')
          uni.redirectTo({
            url: `/pages/meeting-video/meeting-video?meetingNumber=${mtDetail.meetingNumber}&startTime=${mtDetail.meetingStartTime}&endTime=${mtDetail.meetingEndTime}`
          })
        }
      },
      // 关闭当前会议
      async closeMeeting() {
        const res = await closeMeeting()
        console.log(JSON.stringify(res))
        if (res.code === 200) {
          // 提示/会议已结束/关闭弹窗
          await showToast({title: res.message, icon: 'success', mask: true})
          this.$set(this.mtDetail, 'meetingDelete', 1)
          if (this.page == 1) {
            // 存储是否创建会议成功了,上个页面监听了mtOptions,自动发请求请求最新数据
            this.$store.commit('CREATEMEETING', true)
            // // 获取页面栈
            // const curPage = getCurrentPages()
            // // 获取上一页的页面栈
            // const prePage = curPage[curPage.length - 2]
            // // 先清空再重置页面,上个页面监听了mtOptions,自动发请求请求最新数据
            // prePage.$vm.oneselfMeetingList = []
            // prePage.$vm.mtOptions.current = 1
          }
          this.$refs.morePopup.close()
        }
      },
      // 获取会议详情接口
      async getMeetingDetail(id) {
        const { obj: res } = await viewConferenceInformationBasedTheId(id)
        const mtDetail = res
        // 数据处理
        mtDetail.meetingStartTime = mtDetail.meetingStartTime.replace('T', ' ')
        mtDetail.meetingEndTime = mtDetail.meetingEndTime.replace('T', ' ')
        mtDetail.createTime = mtDetail.createTime.replace('T', ' ')
        this.mtDetail = mtDetail
      },
      change(e) {
        console.log('当前模式：' + e.type + ',状态：' + e.show);
      },
      toggle(type, flag) {
        this.type = type
        this.flag = flag
        // open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
        this.$refs.popup1.open(type)
      },
      // 返回上一页
      handleBack() {
        getApp().toBack()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .meeting-details {
    width: 100%;
    height: 100%;
    background-color: #f8f9fb;
    overflow: hidden;
    position: relative;
    .top-bar {
      width: 100%;
      display: flex;
      color: black !important;
      align-items: center;
      justify-content: space-between;
      .back-box {
        padding: 0 20rpx;
        margin-left: -30rpx;
        .icon-zuojiantou {
          font-weight: bold;
          font-size: 50rpx;
        }
      }
      .title {
        text-align: center;
        &.special-style {
          flex: 1;
          transform: translateX(-25rpx);
        }
      }
    }
    .meeting-name {
      margin: 20rpx 0;
    }
    > view {
      padding: 0 30rpx;
      >text:last-child, >view:last-child {
        color: #9c9fa1;
      } 
    }
    .join-person, .no-jion-person {
      > text:last-child {
        color: $uni-color-theme;
      }
    }
    // 右侧弹出层
    .popup-content {
      &.popup-left-width {
        width: 50vw;
      }
      &.popup-right-width {
        width: 80vw;
      }
      .participant-title {
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        font-weight: bold;
        font-size: 35rpx;
      }
      scroll-view {
        width: 100%;
        height: 100vh;
        .member-item {
          border-bottom: 1rpx solid #c7c7c7;
          padding: 15rpx 10rpx;
          margin: 0 20rpx;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 25rpx;
          box-shadow:inset 0 0 8rpx rgba(255, 255, 255, 0.1);
          .member-item-content {
            display: flex;
            justify-content: space-between;
            > view:first-child {
              flex: 1;
            }
            > view:last-child {
              width: 100rpx;
              margin-left: 8rpx;
              min-width: 100rpx;
              color: #c7c7c7;
              font-size: 30rpx;
            }
          }
        }
      }
    }
    // 会议状态
    .meeting-state {
      position: absolute;
      bottom: 120rpx;
      left: 50%;
      color: #c7c7c7;
      transform: translateX(-50%);
    }
    
    // 操作弹窗
    .more-popup-content {
      font-size: 36rpx;
      > view {
        text-align: center;
        padding: 20rpx 0;
        border-top: 1px solid #f6f6fc;
      }
      .addmt-btn {
        color: #448cfc;
      }
      .state-btn {
        color: #c7c7c7;
      }
      .del-btn {
        color: orangered;
      }
      .cancel-btn {
        font-weight: bold;
      }
    }
  }
</style>
