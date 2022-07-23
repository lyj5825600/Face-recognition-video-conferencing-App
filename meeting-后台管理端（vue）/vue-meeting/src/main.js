import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import { postRequest } from './util/api'
import { putRequest } from './util/api'
import { getRequest } from './util/api'
import { deleteRequest } from './util/api'
//自定义axios插件
Vue.prototype.postRequest = postRequest
Vue.prototype.putRequest = putRequest
Vue.prototype.getRequest = getRequest
Vue.prototype.deleteRequest = deleteRequest
import dayjs from 'dayjs'
Vue.prototype.$moment = dayjs
//引入element ui样式
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { initMenu } from './util/menu'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
//使用element ui
Vue.use(ElementUI)
Vue.component('v-chart', ECharts) //全局注册
// 全局样式
import './assets/css/index.css'
Vue.filter('date', function(value, formatStr = 'YYYY-MM-DD') {
  return dayjs(value).format(formatStr)
})

Vue.filter('dateTime', function(value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(value).format(formatStr)
})
// 路由守卫
router.beforeEach((to, from, next) => {
  if (window.sessionStorage.getItem('tokenStr')) {
    initMenu(router, store)
    if (!window.sessionStorage.getItem('user')) {
      return getRequest('/api/admin/info').then(resp => {
        if (resp) {
          //存入用户信息
          window.sessionStorage.setItem('user', JSON.stringify(resp))
          next({ path: '/home' })
        }
      })
    }
    next()
  } else {
    if (to.path == '/') {
      next({ to })
    } else {
      next('/?redirect=' + to.path)
    }
  }
})
/* eslint-disable no-new */
//runtime
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
