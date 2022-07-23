<template>
	<view class="nav-top" :class="{'nav-top-fixed': fixed}" :style="{height: barHeight.allHeight + 'px', backgroundColor: bgCr}">
		<view class="status_bar" :style="{height: barHeight.statusBarHeight + 'px'}">
			<!-- 这里是状态栏 -->
		</view>
		<slot></slot>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		props: {
			bgCr: {
				type: String,
				default: 'white'
			},
      fixed: {
        type: Boolean,
        default: false
      }
		},
		computed: {
			...mapState(['barHeight'])
		},
		created() {
			if(!this.barHeight.allHeight||!this.barHeight.statusBarHeight){
				this.$isBarHeight().then((isTemp)=>{
					this.$store.state.barHeight = isTemp
				})
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
  .nav-top-fixed {
    // 粘性定位
    position: sticky;
		top: 0;
    z-index: 999;
  }
</style>
