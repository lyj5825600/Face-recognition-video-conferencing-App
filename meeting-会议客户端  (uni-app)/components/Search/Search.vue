<template>
  <view class="search-box">
    <input type="text" :placeholder="placeholder" @input="input" class="search-input caret_color" :class="bg ? 'bg' : ''" @confirm="search" confirm-type="search" />
    <text class="iconfont icon-sousuo search-icon"></text>
  </view>
</template>

<script>
  export default {
    name: 'Search',
    props: {
      bg: {
        type: Boolean,
        default: true
      },
      placeholder: {
        type: String,
        default: '搜索用户'
      }
    },
    methods: {
      // 输入监听
      input(e) {
        this.$emit('getRealTimeKey', e.target.value)
      },
      // 搜索开始
      search({ detail: { value: key } }) {
        this.$emit('getKey', key)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-box {
    position: relative;
    background-color: #FFFFFF;
    margin: 0 30rpx;
    margin-bottom: 10rpx;
    // 搜索框
    .search-input {
      height: 70rpx;
      padding-left: 70rpx;
      border-radius: 10rpx;
      border: 1rpx solid #eeeeee;
      &.bg {
        background-color: #eeeeee;
      }
    }
    // 搜索小图标
    .search-icon {
      position: absolute;
      left: 10rpx;
      top: 50%;
      transform: translateY(-50%);
      font-size: 50rpx;
      color: #8594a9;
    }
  }
</style>
