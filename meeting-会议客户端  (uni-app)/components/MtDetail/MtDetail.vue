<template>
  <view class="mt-detail">
    <view class="meeting-name item">
      <view>会议名</view>
      <view class="text_ellipsis">{{ mtDetail.meetingName }}</view>
    </view>
    <view class="line_20"></view>
    <view class="start-time item">
      <text>会议开始时间</text>
      <text>{{ mtDetail.meetingStartTime }}</text>
    </view>
    <view class="end-time item top-border-1px">
      <text>会议结束时间</text>
      <text>{{ mtDetail.meetingEndTime }}</text>
    </view>
    <view class="item top-border-1px">
      <text>创建时间</text>
      <text v-if="mtDetail.createTime">{{ mtDetail.createTime.substring(0, mtDetail.createTime.lastIndexOf(mtDetail.createTime.substr(-2, 2))) + '00' }}</text>
    </view>
    <view class="item top-border-1px">
      <view>会议类型</view>
      <view class="text_ellipsis">{{ mtDetail.meetingType === 1 ? '线下会议' : '线上会议' }}</view>
    </view>
    <view class="item top-border-1px" v-if="mtDetail.meetingType === 1">
      <view>会议地址</view>
      <view class="text_2line_ellipsis">{{ mtDetail.meetingAddress }}</view>
    </view>
    <view class="item top-border-1px">
      <text>会议号</text>
      <text>{{ mtDetail.meetingNumber }}</text>
    </view>
    <view class="item top-border-1px">
      <text>发起人</text>
      <text>{{ mtDetail.nickname }}</text>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'MtDetail',
    props: {
      mtDetail: {
        type: Object,
        required:true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mt-detail {
    padding: 0 !important;
    > view {
      padding: 0 30rpx;
    }
  }
</style>