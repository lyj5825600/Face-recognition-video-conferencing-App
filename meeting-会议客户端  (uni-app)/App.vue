<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
      // 锁定竖屏
      plus.screen.lockOrientation('portrait-primary');
      // 相机、麦克风权限
      this.$Utils.equipment();
      // // 用户打开应用,若登录过则跳转到首页,反之跳转到登录页
      if (uni.getStorageSync('token') !== "") {
        // 存在则等进入首页加载成功后再手动关闭启动页进入首页
        uni.reLaunch({
          url: '/pages/index/index',
          success() {
            plus.navigator.closeSplashscreen()
          }
        })
      } else {
        // 不存在则等登录页加载成功后再手动关闭启动页进入首页
        plus.navigator.closeSplashscreen()
      }
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
    methods: {
      date(time = '') {
        const weekArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
        let date
        if (time != '') {
          // 自定义
          date = new Date(time)
        } else {
          // 得到当前的时间并转换为本地格式
          date = new Date()
        }
        const y = date.getFullYear()
        const m = (date.getMonth() + 1).toString().padStart(2, '0')
        // padStart: 字符串不足两位往前补0
        const d = date.getDate().toString().padStart(2, '0')
        const h = date.getHours().toString().padStart(2, '0')
        const day = weekArr[date.getDay()]
        const minute = date.getMinutes().toString().padStart(2, '0')
        const endTimestamp  = date.getTime() + 3600 * 1000
        const endDate = new Date(endTimestamp)
        const endHour = endDate.getHours().toString().padStart(2, '0')
        const endMinute = endDate.getMinutes().toString().padStart(2, '0')
        return {
          y,
          m,
          d,
          h,
          day,
          weekArr,
          minute,
          endDate,
          endHour,
          endMinute
        }
      },
      // 倒退页面1层
      toBack(delta = 1) {
        uni.navigateBack({delta})
      },
      downCount(time, flag = false) {
        // 得到剩下的总秒
        let second = 0
        // 实现倒计时,flag传了且为true则为正计时
        if (!flag) {
          const startTimestamp = new Date().getTime()
          const endTimestamp = new Date(time).getTime()
          second = parseInt((endTimestamp - startTimestamp) / 1000)
        } else {
          second = parseInt(time)
        }
        // 得到分钟
        let m = parseInt(second / 60 % 60)
        // 得到小时
        let h = parseInt(second / 3600 % 24)
        // 得到天数
        let d = parseInt(second / 3600 / 24)
        // 得到秒数
        let s = second % 60
        const isEnd = second <= 0 ? true : false
        if (d <= 0) {
          if (h <= 0) {
            m = m.toString().padStart(2, '0')
            s = s.toString().padStart(2, '0')
            return {
              downCount: `${m}:${s}`,
              isEnd
            }
          } else {
            return {
              downCount: `${h}:${m}:${s}`,
              isEnd
            }
          }
        } else {
          d = d.toString().padStart(2, '0')
          return {
            downCount: `${d}天${h}:${m}:${s}`,
            isEnd
          }
        }
      },
    	checkPsw(password) {
    		if (!password) {
    			// 密码为空
    			uni.showToast({
    				icon: 'none',
    				title: '密码不能为空！',
    			})
    			return false
    		} else if (password.length < 6) {
    			// 密码不合法
    			uni.showToast({
    				icon: 'none',
    				title: '密码至少6位！',
    			})
    			return false
    		}
    		return true
    	},
    	checkCode(code) {
    		if (!code) {
    			uni.showToast({
    				title: '验证码不能为空',
    				 icon: 'none',
    				 mask: true
    			})
    			return false
    		}
    		return true
    	},
    	checkPhone(tel) {
    		// 正则验证手机号
    		const reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    		if (!tel) {
    			// 手机号为空
    			uni.showToast({
    				icon: 'none',
    				title: '手机号不能为空！',
    			})
    			return false
    		} else if (!reg_tel.test(tel)) {
    			// 手机号不合法
    			uni.showToast({
    				icon: 'none',
    				title: '手机号不合法！',
    			})
    			return false
    		}
    		return true
    	}
    }
	}
</script>

<style lang="scss">
  // 兼容Nvue页面
    /* #ifndef APP-PLUS-NVUE */
    @import url("@/static/css/fonts.scss");
  	// 手机状态栏占位样式 uni 给的 手机状态栏的高度样式变量
  	// .status_bar {
  	// 	height: var(--status-bar-height);
  	// 	width: 100%;
  	// }
    
  	/*每个页面公共css */
    .uni-calendar {
    	// transform: translateY(-30rpx);
    }
    // 表单盒子
    .login-input-box {
      margin: 50rpx 0;
      .nickname-item, .tel-item, .code-item {
        margin-bottom: 40rpx;
        .nickname-input, .tel-input, .code-input {
          height: 80rpx;
          line-height: 80rpx;
          border-bottom: 1rpx solid $uni-color-gray;
          & /deep/ .placeholder {
            font-size: 28rpx;
          }
          :focus {
            padding-bottom: 1rpx;
            border-bottom: 4rpx solid $uni-color-theme;
          }
        }
      }
      .code-item {
        position: relative;
        .invisible {
          height: 80rpx;
          line-height: 80rpx;
          position: absolute;
          right: 0;
          padding: 0 20rpx;
          font-size: 40rpx;
          background-color: #FFFFFF;
          top: 50%;
          transform: translateY(-30%);
          z-index: 10;
        }
      }
    }
    
  	// 遮罩
  	.mask {
  		position: fixed;
  		left: 0;
  		bottom: 0;
  		right: 0;
  		top: 0;
  		background-color: rgba(0, 0, 0, 0.1);
  	}
  	
  	/* 隐藏滚动条 */
  	.hidden_bar {
  		::-webkit-scrollbar {
  			 display: none;
  			 width: 0;
  			 height: 0;
  		}
  	}
  	/* 20rpx 的间距 */
  	.line_20 {
  		height: 20rpx;
  		background-color: #f6f6fc;
  		// 取消外左右边距 30rpx
  		&.cancel_paddng_30 {
  			margin: 0 -30rpx;
  		}
  	}
  	page {
  		height: 100%;
  	}
  	view, text, navigator, scroll-view, input {
  		box-sizing: border-box;
  	}
  	.text_ellipsis {
  		/* 显示省略号 */
  		overflow: hidden;
  		white-space: nowrap;
  		text-overflow: ellipsis;
  	}
    .body-meeting-title {
      /* 显示省略号 */
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 400rpx;
    }
    // 输入框光标颜色
    .caret_color {
      caret-color: $uni-color-theme;
    }
  	// 提示
  	.tip {
  		line-height: 60rpx;
  		font-size: 26rpx;
  		color: #C8C7CC;
  		text-align: center;
  	}
    
    // 字体样式
    .font-sty {
      font-weight: bold;
      font-size: 50rpx;
      margin: 30rpx 0;
      color: $uni-color-theme1;
      font-family: Times New Roman, 'serif';
      position: relative;
      text-shadow: 3rpx 3rpx 1rpx #333;
      
      &::before {
          position: absolute;
          content: "";
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(-45deg, #fff 0%, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent 100%);
          background-size: 5rpx 5rpx;
          z-index: 1;
      }
      
      &::after {
          position: absolute;
          content: attr(data-name);
          top: -4rpx;
          left: -2rpx;
          right: 5rpx;
          bottom: 5rpx;
          color: #333;
          z-index: 2;
          text-shadow: 3rpx 3rpx #fff;
      }
    }
    .w-picker-header {
      > text:last-child {
        color: $uni-color-theme !important;
      }
    }
    // 覆盖日期、时间、多级联动picker组件确定按钮颜色
    .top-border-1px {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1rpx;
        background-color: #eee;
      }
    }
    
  	// 超过两行省略号
  	.text_2line_ellipsis {
  		overflow: hidden;
  		text-overflow: ellipsis;
  		// 设置盒子模型
  		 display: -webkit-box;
  		 // 行数
  		-webkit-line-clamp: 2;
  		// box-orient 属性规定框的子元素应该被水平或垂直排列。
  		-webkit-box-orient: vertical;
  	}
  	/* 更改多选框的背景样式 */
    uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
    		// border: 1rpx solid #f50;
    		background-color: $uni-color-theme;
    }
  	/* 下边距15rpx */
  	.mb_15 {
  		margin-bottom: 15rpx;
  	}
  	/* 下边距20rpx */
  	.mb_20 {
  		margin-bottom: 20rpx;
  	}
  	/* 上边距20rpx */
  	.mt_20 {
  		margin-top: 20rpx;
  	}
  	/* 取消边框 */
  	.border_none {
  		border: 0 !important;
  	}
  	// 按钮
  	.btn {
  		height: 80rpx;
  		text-align: center;
  		line-height: 80rpx;
  		margin: 60rpx 30rpx;
  		border-radius: 15rpx;
  		color: white;
      background-color: $uni-color-theme;
  	}
  	// 公共样式
  	.item {
  		display: flex;
  		justify-content: space-between;
  		height: 80rpx;
  		align-items: center;
  		font-size: $uni-font-size-base;
  		border-bottom: 1px solid #f6f6fc;
  		background-color: #FFFFFF;
      > view:nth-child(2) {
        width: 50%;
        text-align: right;
      }
  	}
  /* #endif */
  /* #ifdef APP-PLUS-NVUE */
  .uni-popup__wrapper {
    border-radius: 30rpx !important;
  }
  /* #endif */
</style>
