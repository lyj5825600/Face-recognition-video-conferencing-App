<template>
  <view class="meeting-detail">
    <MtDetail :mtDetail="mtDetail"/>
    <navigator hover-class="join-actived" class="join-btn" :url="`/pages/online-checkin/online-checkin?flag=0&meetingNumber=${mtDetail.meetingNumber}&startTime=${mtDetail.meetingStartTime}&endTime=${mtDetail.meetingEndTime}`">开始签到</navigator>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  import MtDetail from '../../../components/MtDetail/MtDetail.vue'
  export default {
    computed: {
      ...mapState(['mtDetail'])
    },
    components: { MtDetail }
  }
</script>

<style lang="scss" scoped>
  .meeting-detail {
    padding: 0 30rpx;
    position: relative;
    width: 100%;
    height: 100%;
    .join-btn {
      position: absolute;
      bottom: 100rpx;
      left: 50%;
      transform: translateX(-50%);
      border: 2rpx solid #c7c7c7;
      box-shadow: 0 0 10rpx #333;
      padding: 8rpx;
      border-radius: 10rpx;
      &.join-actived {
        color: #448cfc;
        font-weight: bold;
        font-size: 35rpx;
      }
    }
  }
</style>
