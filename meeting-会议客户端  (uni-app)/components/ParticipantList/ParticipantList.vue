<template>
	<view class="participant-list">
		<checkbox-group @change="change">
			<label class="label-item" v-for="(item, index) in memberList" :key="item.id">
				<checkbox v-if="isShow" :value="item.id" color="#FFFFFF" class="checkbox" />
				<view class="contact-item">
					<view class="avatar">
						<image :src="item.facePhotos" @load="loadImg(index)" v-show="manageShowImgList[`showImg${index}`]"></image>
						<image src="../../static/images/tabs/personal_actived.png" v-if="!manageShowImgList[`showImg${index}`]"></image>
					</view>
					<view>
						<view class="contact-name">{{ item.nickname }}</view>
					</view>
				</view>
			</label>
		</checkbox-group>
	</view>
</template>

<script>
  import { mapState } from 'vuex'
	export default {
		name:"ParticipantList",
		props: {
			isShow: Boolean,
      memberList: Array
		},
		data() {
			return {
        memberListLength: 0,
        showImgList: {}
			};
		},
    computed: {
      ...mapState(['manageShowImgList'])
    },
    watch: {
      memberList: {
        handler(newList, oldList) {
          console.log('asdiaksdalka')
          const { manageShowImgList } = this
          // 新旧数据长度
          const newLen = newList.length
          const oldLen = oldList.length
          if (newLen === 0) return this.$store.commit('SETSHOWIMGLIST', {})
          if (oldLen === 0) {
            for(let i = 0; i < newLen; i++) {
              this.$set(manageShowImgList, `showImg${i}`, false)
            }
            this.$store.commit('SETMANAGESHOWIMGLIST', manageShowImgList)
          }
        }
      }
    },
    methods:{
      change(e) {
        const { value } = e.detail
        this.$store.commit('SETDELIDS', value)
      },
      // 图片加载完成监听事件
      loadImg(index) {
        const { manageShowImgList } = this
        this.memberListLength--
        // 哪个图片加载完毕就优先渲染哪个图片
        this.$set(manageShowImgList,`showImg${index}`, true)
        this.$store.commit('SETMANAGESHOWIMGLIST', manageShowImgList)
      }
    }
	}
</script>

<style lang="scss" scoped>
	.participant-list {
		.label-item {
			display: flex;
			align-items: center;
			padding: 15rpx 0;
			.checkbox {
				transform: scale(.7);
			}
			.contact-item {
				display: flex;
				align-items: center;
				// margin: 10rpx 0;
				.avatar {
					width: 80rpx;
          min-width: 80rpx;
					height: 80rpx;
					image {
						border-radius: 50%;
						width: 100%;
						height: 100%;
					}
					margin-right: 15rpx;
				}
				.contact-name {
					font-size: $uni-font-size-base;
				}
				.contact-status {
					font-size: 26rpx;
					color: $uni-color-theme;
				}
			}
		}
	}
</style>
