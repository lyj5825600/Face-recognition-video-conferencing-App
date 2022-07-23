<template>
	<view class="addressbook">
    <Search />
		<view class="add-member">
			<view class="add-member-item" @click="toEditInfo">
				<view class="icon-box icon1">
					<text class="iconfont icon-tianjiaxinchengyuan"></text>
				</view>
				<view class="item-title">添加新参会人</view>
				<text class="iconfont icon-youjiantou"></text>
			</view>
			<view class="add-member-item">
				<view class="icon-box icon2">
					<text class="iconfont icon-tongshi"></text>
				</view>
				<view class="item-title">邀请好友</view>
				<text class="iconfont icon-youjiantou"></text>
			</view>
		</view>
		<view class="line_20 cancel_paddng_30"></view>
		<view class="contact-wrap">
			<view class="contact-title mb_20">
				<view>总部</view>
				<view class="manage" :class="!isManage ? 'del' : ''" @click="handleEdit">{{isManage ? '管理' : '删除'}}</view>
			</view>
			<scroll-view scroll-y class="hidden_bar">
				<view v-if="memberList.length > 0">	
					<ParticipantList :isShow="isShow" :memberList="memberList" />
				</view>
        <view v-else>
          <image src="../../static/images/icon/none.jpeg" class="none-img"></image>
        </view>
			</scroll-view>
    </view>
    <!-- 提示窗 -->
    <Popup ref="alertDialog" @successdel="successdel" popupType="dialog" popupFormat="3" alertType="error" alertTitle="删除参会人" confirmText="删除" alertContent="你确定删除吗?" />
	</view>
</template>

<script>
  import { mapState } from 'vuex'
  import { getParticipantsPersonList, deleteParticipantsPersonList } from '../../api/index.js'
	import ParticipantList from '../../components/ParticipantList/ParticipantList.vue'
  import Popup from '../../components/Popup/Popup.vue'
	export default {
		data() {
			return {
				isShow: false,
				isManage: true
        // 参会人列表
        // memberList: []
			}
		},
		components: { ParticipantList, Popup },
    onLoad() {
      this.getParticipantsPersonListFun()
    },
    computed: {
      ...mapState(['delIds', 'memberList'])
    },
		methods: {
      async getParticipantsPersonListFun() {
        const { obj: res } = await getParticipantsPersonList()
        const arr = res
        // 由于跟参会人列表用的是同一个列表数据,故这也得加上isSel字段
        arr.forEach((v, i) => {
          return v.isSel = false
        })
        // this.memberList = arr
        this.$store.commit('SETMEMBERLIST', arr)
      },
      async deleteParticipantsPersonListFun(ids) {
        const { isShow, isManage } = this
        const res = await deleteParticipantsPersonList(ids)
        if (res.code === 200) {
          // 删除成功后再归位
          this.isShow = !isShow
          this.isManage = !isManage
          // 再次请求数据
          this.getParticipantsPersonListFun()
          // 重置vuex删除人员列表
          this.$store.commit('SETDELIDS', [])
        }
      },
      // 按弹出提示框删除按键时触发
      successdel() {
        const { delIds } = this
        // 删除....
        this.deleteParticipantsPersonListFun(delIds)
      },
			// 管理
			handleEdit() {
        const { isShow, isManage, delIds } = this
        // 打开确认框
        if (!isManage && delIds.length > 0) return this.$refs.alertDialog.open()
				this.isShow = !isShow
				this.isManage = !isManage
			},
      // 前往编辑资料页面
      toEditInfo() {
        uni.navigateTo({
          url: '/pages/edit-info/edit-info'
        })
      }
		}
	}
</script>

<style lang="scss" scoped>
  .none-img {
    margin: 0 auto;
    display: block;
    width: 100vw;
    height: calc(100vh - 365rpx);
  }
	.addressbook {
		width: 100%;
		height: 100%;
		.icon-box {
			width: 60rpx;
			height: 60rpx;
			line-height: 60rpx;
			text-align: center;
			border-radius: 10rpx;
			margin-right: 20rpx;
			> text {
				font-size: 40rpx;
			}
		}
		.add-member {
      padding: 0 30rpx;
			.add-member-item {
				display: flex;
				align-items: center;
				height: 90rpx;
				border-bottom: 1px solid #f6f6fc;
				&:last-child {
					border-bottom: 0;
				}
				.icon-box {
					&.icon1 {
						background-color: $uni-color-help1;
					}
					&.icon2 {
						background-color: $uni-color-help2;
					}
					> text {
						color: white;
					}
				}
				.item-title {
					flex: 1;
				}
				text {
					color: #c7c7c7;
				}
			}
		}
		.contact-wrap {
			padding: 20rpx 30rpx 0;
			.contact-title {
				display: flex;
				justify-content: space-between;
        .manage {
          font-size: 30rpx;
          color: $uni-color-gray;
          &.del {
            color: red;
          }
        }
			}
			scroll-view {
				height: calc(100vh - 365rpx);
			}
		}
	}
</style>
