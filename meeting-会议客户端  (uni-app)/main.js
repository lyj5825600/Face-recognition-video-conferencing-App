import App from './App'
import Utils from "./utils/until.js"
import store from './store'
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$Utils = Utils
Vue.prototype.$isBarHeight = function() {
	return new Promise((resolve, reject) => {
		let that = this
		let isTemp = {}
		uni.getSystemInfo({
			success(res) {
				let totalTopHeight = 68
				if (res.model.indexOf('iPhone X') !== -1 || res.model.indexOf('iPhone 12/13') !== -1 ) {
					totalTopHeight = 88
				} else if (res.model.indexOf('iPhone') !== -1) {
					totalTopHeight = 64
				}
				isTemp['statusBarHeight'] = res.statusBarHeight
				isTemp['titleBarHeight'] = totalTopHeight - res.statusBarHeight
				isTemp['allHeight'] = totalTopHeight
				resolve(isTemp)
			},
			fail(e) {
				reject(e)
			}
		})
	})
}
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif