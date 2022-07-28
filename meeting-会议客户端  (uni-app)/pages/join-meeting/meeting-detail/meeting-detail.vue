<template>
  <view class="meeting-detail" @click="closeBigMap">
    <MtDetail :mtDetail="mtDetail"/>
    <view class="map-wrap" :class="bigMap ? 'big-map-wrap' : ''" v-if="mtDetail.meetingType === 1">
      <Map :allMap="true" @openBigMap="openBigMap" @getUserPosition="getUserPosition" :showBtn="false" :checkInOptions="{flag: false, longitude: mtDetail.meetingLongitude, latitude: mtDetail.meetingLatitude, ak: $store.state.ak}"></Map>
    </view>
    <navigator hover-class="join-actived" class="join-btn" :url="`/pages/online-checkin/online-checkin?flag=0&meetingNumber=${mtDetail.meetingNumber}&startTime=${mtDetail.meetingStartTime}&endTime=${mtDetail.meetingEndTime}&userLatitude=${userPoint.lat}&userLongitude=${userPoint.lng}&isSign=${mtDetail.meetingType}&meetingAddress=${mtDetail.meetingAddress}`">开始签到</navigator>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  import MtDetail from '../../../components/MtDetail/MtDetail.vue'
  import Map from '../../../components/Map/Map.vue'
  export default {
    data() {
      return {
        bigMap: false,
        userPoint: {}
      }
    },
    computed: {
      ...mapState(['mtDetail'])
    },
    components: { MtDetail, Map },
    methods: {
      openBigMap() {
        this.bigMap = true
      },
      closeBigMap() {
        this.bigMap = false
      },
      // 获取用户坐标
      getUserPosition(point) {
        this.userPoint = point
      }
    }
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
    .map-wrap {
      width: 100vw;
      height: 600rpx;
      margin-left: -30rpx;
      transition: all .2s;
      &.big-map-wrap {
        width: 90vw;
        height: 80vh;
        border: 1px solid $uni-color-primary;
        border-radius: 20rpx;
        overflow: hidden;
        margin-left: 0;
        position: absolute;
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
