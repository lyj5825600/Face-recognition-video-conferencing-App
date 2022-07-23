<template>
  <!-- 提示信息弹窗 -->
  <uni-popup ref="popup" :type="popupType">
    <uni-popup-message :type="msgType" :message="messageText" :duration="duration" v-if="popupFormat === '1'">
    </uni-popup-message>
    <uni-popup-dialog ref="inputClose" :class="moveUp ? 'move_up' : ''" mode="input" :title="inputTitle" v-model="nickname" :placeholder="placeholder" @confirm="dialogInputConfirm" v-else-if="popupFormat === '2'"></uni-popup-dialog>
    <uni-popup-dialog v-else-if="popupFormat === '3'" :type="alertType" :cancelText="cancelText" :confirmText="confirmText" :title="alertTitle" :content="alertContent" @confirm="alertConfirm" @close="dialogClose"></uni-popup-dialog>
  </uni-popup>
</template>

<script>
  export default {
    name: "Popup",
    props: {
      // 弹出类型
      popupType: String,
      // 弹出格式
      popupFormat: {
        type: String,
        default: '1'
      },
      // 持续时间[默认两秒]
      duration: {
        type: Number,
        default: 1500
      },
      // 信息类型
      msgType: String,
      // 信息值
      messageText: String,
      // 输入框标题
      inputTitle: String,
      // 输入框值为空时的占位值
      placeholder: String,
      // 用户输入的值
      inputVal: String,
      // 提示对话框类型
      alertType: String,
      // 取消按钮文字
      cancelText: {
        type: String,
        default: '取消'
      },
      // 确定按钮文字
      confirmText: {
        type: String,
        default: '确定'
      },
      // 提示对话框标题
      alertTitle: {
        type: String,
        default: '通知'
      },
      // 提示对话框提示文本
      alertContent: String,
      // 控制输入框是否上移
      moveUp: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        // 输入框实时的值
        nickname: ''
      };
    },
    created() {
      this.nickname = this.inputVal
    },
    methods: {
      // 弹出输入框
      open() {
        this.$refs.popup.open()
      },
      // 点触发
      dialogInputConfirm(val) {
        this.nickname = val
        // 传给父级
        this.$emit('inputVal', this.nickname)
        // 关闭窗口后，恢复默认内容
        this.close()
      },
      // 关闭弹窗
      close() {
        this.$refs.popup.close()
      },
      // 单击弹窗取消时触发
      dialogClose() {
        this.$emit('cancel')
      },
      // 延时关闭弹窗
      delayClose() {
        // 当信息在中间时会导致弹窗不会自动关闭,故再这延时关闭
        setTimeout(() => {
          this.$refs.popup.close()
        }, this.duration)
      },
      // 点击确定按钮
      alertConfirm() {
        this.$emit('successdel')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .move_up {
      transform: translateY(-100rpx) !important;
  }
</style>