<template>
  <view>
    <image id="img" :animation="animationData" src="../../static/images/icon/top.png" @click="backTop"></image>
  </view>
</template>

<script>
  export default {
    name: "backTop",
    props: {
      animationData: Object,
      site: {
        default: false,
        type: Boolean
      }
    },
    methods: {
      backTop() {
        if (!this.site) {
          uni.pageScrollTo({
            scrollTop: 0,
            duration: 300
          })
        } else {
          this.$emit('earnSite')
        }
      }
    }
  }
</script>

<style>
  #img {
    width: 30rpx;
    height: 40rpx;
    position: fixed;
    right: -30rpx;
    bottom: 100rpx;
  }
</style>
