<template>
  <view>
    <NavTop bgCr="rgba(255, 255, 255, .8)" :fixed="true">
    	<view class="top-bar" :style="{height: $store.getters.topBarHeight + 'px'}">
        <view class="title">我的会议室</view>
    	</view>
    </NavTop>
    <view v-if="oneselfMeetingList.length > 0">
      <uni-list>
        <uni-list-item class="list-item" @click.native="toMeetingDetail(item.id)" v-for="item in oneselfMeetingList" :key="item.id">
          <!-- 自定义 header -->
          <template v-slot:header>
            <view class="meeeting-start">
              <image src="../../static/images/icon/meeting.webp"></image>
            </view>
          </template>
          <!-- 自定义 body -->
          <template v-slot:body>
            <view class="body-box">
              <view class="body-meeting-title">{{ item.meetingName }}</view>
              <view class="body-bom">
                <view class="memCount">
                  <text class="iconfont icon-tongshi"></text>
                  <text>{{ item.meetingPerson }}人</text>
                </view>
                <view class="meeting-type">
                  <template v-if="item.meetingType === 0">
                    <text>在线会议</text>
                    <text>视频会议</text>
                  </template>
                  <template v-else>
                    <text>线下会议</text>
                  </template>
                </view>
              </view>
            </view>
          </template>
          <!-- 自定义 footer-->
          <template v-slot:footer>
            <view class="icon">
              <text class="iconfont"
                :class="item.meetingDelete === 1 ? 'icon-huiyiyijieshu' : 'icon-huiyijinhangzhong'"></text>
            </view>
          </template>
        </uni-list-item>
      </uni-list>
      <view class="tip-box">
        <uni-icons v-if="hasMore" class="tip-icon" type="spinner-cycle" size="26"></uni-icons>
        <text>{{hasMore ? '加载中...' : '没有更多了~~'}}</text>
      </view>
    </view>
    <view v-else>
      <image src="../../static/images/icon/none.jpeg" class="none-img"></image>
    </view>
    <!-- 返回顶部组件 -->
    <BackTop :animationData="animationData"/>
  </view>
</template>
<script>
  import BackTop from '../../components/BackTop/BackTop.vue'
  import { mapState } from 'vuex'
  import {
    oneselfMeeting
  } from '../../api/index.js'
  export default {
    data() {
      return {
        animationData: {},
        // 会议记录参数对象
        mtOptions: {
          keywords: '',
          // 页码值
          current: 1,
          // 条数
          size: 10
        },
        // 用户自己创建的会议条数
        count: 10,
        // 用户自己创建的会议列表
        oneselfMeetingList: []
      }
    },
    components: {BackTop},
    onLoad() {
      this.animation = uni.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      })
    },
    onPageScroll(e) {
      // 动画
      if (e.scrollTop >= 300) {
        this.animation.translateX(-40).scale(2, 2).opacity(0.8).rotate(360).step()
        this.animationData = this.animation.export()
      } else {
        this.animation.translateX(40).scale(.2, .2).opacity(0).rotate(-360).step()
        this.animationData = this.animation.export()
      }
    },
    onShow() {
      this.RtcModule && this.RtcModule.destroyRtc((res) => {console.log('先销毁!!!')})
      if (this.sucCreateMt) {
        this.oneselfMeetingList = []
        this.mtOptions = {
          keywords: '',
          // 页码值
          current: 1,
          // 条数
          size: 10
        }
      }
    },
    onHide() {
      this.$store.commit('CREATEMEETING', false)
    },
    computed: {
      hasMore() {
        return this.count !== this.oneselfMeetingList.length
      },
      ...mapState(['sucCreateMt', 'RtcModule'])
    },
    watch: {
      mtOptions: {
        immediate: true,
        deep: true,
        handler(newOpt) {
          if (this.sucCreateMt) {
            this.oneselfMeetingList = []
            // 重置
            this.$store.commit('CREATEMEETING', false)
          }
          this.getOneselfMeeting(newOpt)
        }
      }
    },
    methods: {
      async getOneselfMeeting(mtOptions) {
        const {
          obj: res
        } = await oneselfMeeting(mtOptions)
        this.count = res.count
        this.oneselfMeetingList = [...this.oneselfMeetingList, ...res.recordList]
      },
      onReachBottom() {
        if (!this.hasMore) return
        this.mtOptions.current++
      },
      // 跳转到会议详情页
      toMeetingDetail(id) {
        uni.navigateTo({
          url: `../index/meeting-details/meeting-details?id=${id}&page=${1}`,
          animationType: 'zoom-fade-out'
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .none-img{
    width: 100vw;
    height: 80vh;
    margin: 0 auto;
  }
  .top-bar{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .list-item {
    padding: 20rpx 0;
  }
  .meeeting-start {
    display: flex;
    align-items: center;
    image {
      width: 180rpx;
      height: 130rpx;
    }
  }

  .body-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .body-meeting-title {
      font-size: 40rpx;
      font-weight: bold;
      margin-left: 20rpx;
    }

    .body-bom {
      .memCount {
        display: flex;
        margin-left: 20rpx;
        font-size: 28rpx;
        color: #c7c7c7;
        margin-top: 10rpx;
       align-items: center;
       .icon-tongshi {
         margin-right: 15rpx;
       }
      }

      .meeting-type {

        text {
          font-size: 26rpx;
          border: 1rpx solid #fe2d18;
          border-radius: 10rpx;
          padding: 0 8rpx;
          color: #fe2d18;
          margin-left: 15rpx;
        }
      }
    }
  }

  .icon {
    position: absolute;
    right: -10rpx;
    top: 50%;
    transform: translate(-50%, -50%);

    .icon-huiyijinhangzhong,
    .icon-huiyiyijieshu {
      font-size: 80rpx;
      color: #333333;
    }

    .icon-huiyiyijieshu {
      color: #c7c7c7;
    }
  }
  .tip-box {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c7c7c7;
    padding: 15rpx 0;
    .tip-icon {
      animation: rotate .6s linear infinite;
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
