<template>
  <view class="meeting-details">
    <view class="meeting-name item">
      <view>会议名</view>
      <view class="text_ellipsis">{{ scDetail.meetingTitle }}</view>
    </view>
    <view class="start-time item">
      <text>会议开始时间</text>
      <text>{{ scDetail.meetingStartTime }}</text>
    </view>
    <view class="end-time item top-border-1px">
      <text>会议结束时间</text>
      <text>{{ scDetail.meetingEndTime }}</text>
    </view>
    <view class="item top-border-1px">
      <text>创建时间</text>
      <text>{{ scDetail.createTime }}</text>
    </view>
    <view class="item top-border-1px" v-if="scDetail.meetingAddress != ''">
      <view>会议地址</view>
      <view class="text_ellipsis">{{ scDetail.meetingAddress }}</view>
    </view>
    <view class="item top-border-1px">
      <text>会议号</text>
      <text>{{ scDetail.meetingNumber }}</text>
    </view>
    <view class="item top-border-1px">
      <text>发起人</text>
      <text>{{ scDetail.meetingNickname }}</text>
    </view>
  </view>
</template>

<script>
  import { getCalendarId } from '../../../api/index.js'
  export default {
    data() {
      return {
        scDetail: {}
      }
    },
    onLoad({ id }) {
      console.log(id)
      this.getscheduleDetail(id)
    },
    methods: {
      // 获取会议详情接口
      async getscheduleDetail(id) {
        const { obj: res } = await getCalendarId(id)
        const scDetail = res
        // 数据处理
        scDetail.meetingStartTime = scDetail.meetingStartTime.replace('T', ' ')
        scDetail.meetingEndTime = scDetail.meetingEndTime.replace('T', ' ')
        scDetail.createTime = scDetail.createTime.replace('T', ' ')
        this.scDetail = scDetail
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
    .meeting-name {
      margin: 20rpx 0;
    }
    > view {
      padding: 0 30rpx;
      >text:last-child, >view:last-child {
        color: #9c9fa1;
      } 
    }
  }
</style>
