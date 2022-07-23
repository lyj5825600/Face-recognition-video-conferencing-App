import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    routes: [],
    collapse: false,
    sessions: [],
    avatar: null,
    tabList: [{ name: '首页', path: '/home' }]
  },
  mutations: {
    initRoutes(state, data) {
      state.routes = data
    },
    saveTab(state, tab) {
      if (state.tabList.findIndex(item => item.path === tab.path) == -1) {
        state.tabList.push({ name: tab.name, path: tab.path })
      }
    },
    updateAvatar(state, avatar) {
      state.avatar = avatar
    },
    resetTab(state) {
      state.tabList = [{ name: '首页', path: '/home' }]
    },
    trigger(state) {
      state.collapse = !state.collapse
    },
    removeTab(state, tab) {
      var index = state.tabList.findIndex(item => item.name === tab.name)
      state.tabList.splice(index, 1)
    }
  }
})
export default store
