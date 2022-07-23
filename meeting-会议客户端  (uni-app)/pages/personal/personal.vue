<template>
  <view class="personal" v-if="JSON.stringify(userInfo) !== '{}'">
    <view class="user-info" @click="toUserinfo">
      <image class="avatar" :src="userInfo.avatar"></image>
      <view class="right-wrap">
        <view class="nickname">{{ userInfo.nickname }}</view>
        <view>{{ userInfo.email ? userInfo.email : userInfo.username }}</view>
      </view>
      <text class="iconfont icon-youjiantou icon"></text>
    </view>
    <view class="user-tool">
      <view class="user-tool-item item">
        <text class="iconfont icon-kaimenbaojing"></text>
        <text class="tool-name">我的会议号</text>
        <text>{{ userInfo.meetingNumber }}</text>
      </view>
      <view class="user-tool-item item">
        <text class="iconfont icon-50wenti"></text>
        <text class="tool-name">问题反馈</text>
        <text class="iconfont icon-youjiantou"></text>
      </view>
      <view class="user-tool-item item">
        <text class="iconfont icon-shezhi"></text>
        <text class="tool-name">设置</text>
        <text class="iconfont icon-youjiantou"></text>
      </view>
      <view class="user-tool-item item">
        <text class="iconfont icon-1huojian"></text>
        <text class="tool-name">版本信息</text>
        <view>
          <text>v1.0.8</text>
          <text class="iconfont icon-youjiantou"></text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      // 前往用户信息页面
      toUserinfo() {
        uni.navigateTo({
          url: '/pages/personal/userinfo/userinfo'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .personal {
    .icon {
      font-size: 40rpx;
      color: #FFFFFF;
    }

    // 用户信息
    .user-info {
      background-color: $uni-color-theme;
      padding: 60rpx 30rpx 30rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .avatar {
        width: 100rpx;
        min-width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
      }

      .right-wrap {
        flex: 1;
        color: #FFFFFF;
        margin-left: 20rpx;
        font-size: $uni-font-size-base;

        .nickname {
          margin-bottom: 20rpx;
          // width: 300rpx;
          // word-break: normal;
          // word-wrap: break-word;
          // text-align: center;
        }
      }
    }

    // 用户工具
    .user-tool {
      padding: 0 30rpx;

      .user-tool-item {
        height: 100rpx;

        // 工具名样式
        .tool-name {
          flex: 1;
          margin-left: 20rpx;
        }

        .iconfont {
          font-size: 40rpx;
          color: black;
        }

        .icon-youjiantou {
          color: #c9c9c9;
        }
      }
    }
  }
</style>
