<template>
  <view class="popup-container">
    <view class="popup-content">
      <view class="title">编辑文字内容</view>
      <view class="input-box">
        <input type="text" v-model="text" class="caret_color" placeholder="请输入...">
      </view>
      <view class="cancle-sure-btn">
        <view class="cancle" @click="closePopup">取消</view>
        <view class="sure" @click="handleComfirm">确定</view>
      </view>
    </view>
    <view class="mask"></view>
  </view>
</template>

<script>
  import { showToast } from '../../utils/uniAsync.js'
  export default {
    name:"PopupInput",
    data() {
      return {
        text: ''
      }
    },
    props: {
      isShowPopup: Boolean,
      txt: String
    },
    created() {
      this.text = this.txt
    },
    methods: {
      // 关闭弹窗
      closePopup() {
        /**
         * 逻辑:
         * 1.更改父组件的控制是否关闭弹窗的值
          * */
        this.$emit('close', false)
        this.text = ''
      },
      async handleComfirm() {
        const { text } = this
        if (!text) return await showToast({title: '不能为空!', icon: 'none'})
        /**
         * 逻辑:
         * 1.点击触发父级组件的事件,把用户输入的值传给父级
         * 2.关闭弹窗
          * */
        this.$emit('getTxt', this.text)
        this.$emit('close', false)
      }
    }
  }
</script>

<style lang="scss">
  @keyframes scale {
    from {
      transform: translate(-50%, -50%) scale(1.3);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
  .popup-container {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    .popup-content {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 80%;
      z-index: 99;
      // box-shadow: 0 0 20rpx #333333;
      padding-top: 20rpx;
      transform: translate(-50%, -50%) scale(1.3);
      background-color: #FFFFFF;
      border-radius: 30rpx;
      animation: scale .2s linear forwards;
      .title {
        text-align: center;
        color: #ced0d5;
      }
      .input-box {
        height: 90rpx;
        line-height: 90rpx;
        padding: 0 20rpx;
        border-bottom: 1rpx solid #CED0D5;
        input {
          height: 100%;
        }
      }
      // 按钮
      .cancle-sure-btn {
        display: flex;
        .cancle {
          border-right: 1rpx solid #CED0D5;
        }
        .sure{
          color: $uni-color-theme;
        }
        .cancle,
        .sure {
          padding: 20rpx 0;
          flex: 1;
          text-align: center;
        }
      }
    }
  }
</style>
