import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import login from '@/view/login/index.vue'
import Home from '../view/Home'
import Personal from '../view/personal/Personal.vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
    hidden: true
  },
  {
    path: '/home',
    name: '首页',
    component: Home,
    children: [
      {
        path: '/personal',
        name: '个人中心',
        component: Personal
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
