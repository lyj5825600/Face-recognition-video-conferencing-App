<template>
  <view>
    <view class="hover_button_cell" :style="style" @tap="tap" @touchmove="touchmove" @touchend="touchend"
      @touchcancel="touchcancel" :animation="animation">
      <view class="wave">
        <view>历史会议</view>
        <view class="iconfont icon-youjiantou"></view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'FloatFrame',
    data() {
      return {
        top: 0,
        left: 0,
        diameter: 0,
        modile: {},
        animation: {},
        isMove: false,
        timeout: null,
        clickNum: 0 
      }
    },
    created() {
      // 获取系统信息
      this.modile = uni.getSystemInfoSync()
      this.top = this.modile.safeArea.top + 200
      this.left = this.modile.screenWidth
      this.diameter = this.modile.screenHeight / 16;
    }, 
    computed: {
      style() {
        return {
          width: this.diameter * 2 + 'px',
          height: this.diameter / 2 + 'px',
          top: this.top + 'px',
          left: this.left + 'px'
        }
      }
    },
    methods: {
      tap() {
        // 点击数++
        this.clickNum++
        console.log(this.clickNum,'点击')
        let x = '0';
        if (2 * this.left >= this.modile.safeArea.width) {
          x = '-100%';
        }
        let animation = uni.createAnimation({
          duration: 200
        })
        // step() 来表示一组动画完成
        animation.translateX(x).step()
        // export 导出动画数据
        this.animation = animation.export()
        if (this.clickNum > 1) {
          this.$emit('handle')
        }
        // 点击后显示全部后执行这个函数过1200毫秒再归位
        this.overHalf()
      },
      // 触摸移动时触发
      touchmove(e) {
        this.isMove = true;
        if (this.timeout != null) {
          clearTimeout(this.timeout);
          this.timeout = null;
        }
        let touch = e.touches[0] || e.changedTouches[0];
        this.left = touch.clientX;
        this.top = touch.clientY;
      },
      touchend(e) {
        if (!this.isMove) {
          return;
        }
        this.finish(e);
      },
      touchcancel(e) {
        if (!this.isMove) {
          return;
        }
        this.finish(e);
      },
      finish(e) {
        this.isMove = false;
        let touch = e.touches[0] || e.changedTouches[0];
        this.left = touch.clientX;
        this.top = touch.clientY;
        let x = '0';
        if (2 * this.left + this.diameter >= this.modile.safeArea.width) {
          this.left = this.modile.safeArea.width;
          x = '-100%';
        } else {
          this.left = this.modile.safeArea.left;
        }
        if (this.top > this.modile.safeArea.height) {
          this.top = this.modile.safeArea.height - 50;
        } else if (this.top <= -this.diameter / 3) {
          this.top = this.modile.windowTop;
        }
        let create = uni.createAnimation({
          duration: 0
        });
        create.translate(x).step();
        this.ballAnimation = create.export();
        this.overHalf();
      },
      overHalf() {
        // 清除定时器
        if (this.timeout != null) {
          clearTimeout(this.timeout);
          this.timeout = null;
        }
        this.timeout = setTimeout(() => {
          this.timeout = null;
          let create = uni.createAnimation({
            duration: 400,
            timingFunction: 'ease-in'
          });
          create.translateX('-50%').step();
          this.animation = create.export();
          // 隐藏时重置为0
          this.clickNum = 0
        }, 1200);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hover_button_cell {
    position: fixed;
    overflow: hidden;
    border-radius: 15rpx;
    background: #ffffff;
    transform: translate(-50%, 0);
    z-index: 99;
    padding: 4rpx 0;
    box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(0, 0, 0, 0.08);

    .wave {
      width: 100%;
      height: 100%;
      display: flex;
      font-size: 30rpx;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: $uni-color-theme;
      .icon-youjiantou {
        font-size: 35rpx;
      }
    }
  }
</style>
