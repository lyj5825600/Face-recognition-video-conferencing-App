// 导入vue
import { log } from 'util'
import Vue from 'vue'
// 导入Vuex
import Vuex from 'vuex'

Vue.use(Vuex)
import { userHistoryConference, adminInfo, userHistoryConferencePull, getbaiduSDKAk } from '../api/index.js'
const state = {
  // 自定义顶部导航的兼容高度信息
  barHeight: {},
  // 用户信息
  userInfo: {},
  // 用户名字
  nickname: '',
  // 初始化相机
  initCamera: false,
  // 人脸识别的临时图片路径
  tempImgUrl: '',
  // 人脸识别的base64格式的图片路径
  base64Src: '',
  // 历史会议记录
  histroyList: [],
  // 历史会议记录条数
  hisCount: 0,
  // 选中的新参会人员列表
  selMemberList: [],
  // 当前选中项列表
  curSelIndexs: [],
  // 是否全选
  isAllChecked: false,
  // 所有的成员列表
  memberList: [],
  // 要删除的人员列表
  delIds: [],
  // 新建会议页的参会人头像是否加载完成列表
  showImgList: {},
  manageShowImgList: {},
  // 创建会议是否成功标识
  sucCreateMt: false,
  mtDetail: {},
  // 百度地图ak
  ak: '',
  // rtc 音视频引入
  RtcModule: uni.requireNativePlugin('AR-RtcModule')
}
const actions = {
  // 获取百度地图ak
  async getbaiduSDKAkFun({ commit }) {
    const res = await getbaiduSDKAk()
    commit('GETBAIDUSDKAK', res.obj)
  },
  // 获取用户信息
  async getAdminInfo({ commit }) {
    const res = await adminInfo()
    commit('GETADMININFO', res)
  },
  async getUserHistoryConference({ commit }, options) {
    const { obj: res } = await userHistoryConference(options)
    commit('SETHISTROYLIST', res)
  },
  async userHistoryConferencePull({ commit }, options) {
    const { obj: res } = await userHistoryConferencePull(options)
    commit('SETHISTROYLIST', res)
  },
  // 获取历史会议记录
  pathToBase64App({ commit }, path) {
    return new Promise((resolve, reject) => {
      // 通过URL参数获取目录对象或文件对象
      plus.io.resolveLocalFileSystemURL(path, function(entry) {
        entry.file(function(file) {
          var fileReader = new plus.io.FileReader()
          fileReader.onload = function(evt) {
            // 返回base64格式的图片
            resolve(evt.target.result)
            commit('PATHTOBASE64APP', evt.target.result)
          }
          fileReader.onerror = function(error) {
            reject(error)  
          }
          fileReader.readAsDataURL(file)
        }, function(error) {
          reject(error) 
        })
      }, function(error) {
        reject(error)  
      })
    })
  }
}
const mutations = {
  // 设置用户要加入的会议信息
  SETMTDETAIL(state, data) {
    state.mtDetail = data
  },
  // 初始化相机组件[是否加载完毕]
  initCamera(state, data) {
    state.initCamera = data
  },
  GETBAIDUSDKAK(state, data) {
    state.ak = data
  },
  // 改变人脸识别临时图片路径
  CHANGEIMGURL(state, url) {
    state.tempImgUrl = url
  },
  // 存储历史会议记录
  SETHISTROYLIST(state, res) {
    const histroyList = [...state.histroyList, ...res.recordList]
    state.hisCount = res.count
    state.histroyList = histroyList
  },
  // 重置历史会议记录
  RESETHISTROYLIST(state) {
    state.histroyList = []
  },
  // 更新已选中的成员列表
  SETSELMEMBERLIST(state, data) {
    state.selMemberList = data
  },
  // 更新新成员列表
  SETMEMBERLIST(state, data) {
    state.memberList = data
  },
  // 更新当前已选中项的索引值
  SETCURSELINDEXS(state, indexList) {
    state.curSelIndexs = indexList
  },
  // 更新当前是否已全选的判断值
  SETALLCHECKED(state, is) {
    state.isAllChecked = is
  },
  // 更新用户信息
  GETADMININFO(state, res) {
    state.userInfo = res
    state.nickname = res.nickname
  },
  // 设置要删除的人员id列表
  SETDELIDS(state, ids) {
    console.log(ids)
    state.delIds = ids
  },
  // 更新base64格式的图片地址
  PATHTOBASE64APP(state, base64Src) {
    state.base64Src = base64Src
  },
  // 设置新建会议页的参会人头像是否加载完成列表
  SETSHOWIMGLIST(state, data) {
    state.showImgList = data
  },
  // 设置管理页参会人头像是否加载完成列表
  SETMANAGESHOWIMGLIST(state, data) {
    state.manageShowImgList = data
  },
  // 存储是否创建会议成功
  CREATEMEETING(state, data) {
    state.sucCreateMt = data
  }
}
const getters = {
  // 自定义顶部导航栏的内容高度
  topBarHeight: state => state.barHeight.allHeight - state.barHeight.statusBarHeight,
  selMemberIdList: state => state.selMemberList.map(v => ({ id: v.id })),
  meetingNumber: state => state.userInfo.meetingNumber
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
