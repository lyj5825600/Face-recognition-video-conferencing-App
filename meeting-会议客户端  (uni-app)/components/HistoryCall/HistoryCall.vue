<template>
	<view class="history-content">
		<checkbox-group @change="change">
			<label class="label-item" v-for="item in histroyList" :key="item.id" @click="toHisMeeting(item.meetingId)">
				<checkbox v-if="isShow" :value="item.id" color="#FFFFFF" class="checkbox" />
				<view class="history-call-info">
					<view class="meet-name mb_15">{{ item.meetingName }}</view>
					<view class="num-time">
						<view class="home-num">
							<text>{{ item.meetingNumber }}</text>
						</view>
						<view class="create-time">{{ item.signTime.substring(0, 10) }}</view>
					</view>
				</view>
			</label>
      <view v-if="!hasMore" class="tip">----- 我是有底线的 -----</view>
    </checkbox-group>
	</view>
</template>

<script>
	export default {
		name:"HistoryCall",
		props: {
			isShow: Boolean,
      histroyList: Array,
      hasMore: Boolean
		},
		data() {
			return {
				
			};
		},
    methods: {
      // 当多选框的选中状态发生变化时触发
      change(e) {
        // 获取到用户选中的id列表
        const { value } = e.detail
        this.$emit('delHisMeeting', value)
      },
      // 跳转到历史会议页面
      toHisMeeting(meetingId) {
        const { isShow } = this
        if (isShow) return
        uni.navigateTo({
          url: '/pages/index/meeting-details/meeting-details?id=' + meetingId
        })
      }
    }
	}
</script>

<style lang="scss" scoped>
	.history-content {
		.label-item {
			display: flex;
			align-items: center;
			padding: 15rpx 0;
			.checkbox {
				transform: scale(.7);
			}
			.history-call-info {
				flex: 1;
				.meet-name {
					font-size: $uni-font-size-base;
				}
				.num-time {
					display: flex;
					justify-content: space-between;
					font-size: $uni-font-size-sm;
					color: $uni-color-gray;
				}
			}
		}
	}
</style>
