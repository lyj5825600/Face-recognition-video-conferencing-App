<template>
  <view class="historical-meeting">
    <view class="search-box">
      <Search :bg="false" placeholder="搜索历史会议" @getRealTimeKey="getRealTimeKey" @getKey="getKey"/>
    </view> 
    <view class="hisMeeting-item" v-for="item in histroyLs" :key="item.signTime">
      <view class="item-create-time">
        <text>{{ item.mounth }}月{{ item.date }}日 {{ item.week }}</text>
        <text>{{ item.year }}年</text>
      </view>
      <view class="meeting-info" v-for="hisMt of item.obj" :key="hisMt.id" @tap="toHisMeeting(hisMt.meetingId)">
        <view class="meeting-num">{{ hisMt.meetingNumber }}</view>
        <view class="meeting-name">
          <text>{{ hisMt.meetingName }}</text>
          <text class="iconfont icon-youjiantou"></text>
        </view>
        <view class="btm">
          <text class="join-time">入会时间: {{ hisMt.hour }}:{{ hisMt.minute }}</text>
          <text class="sponsor">发起人: {{ hisMt.nickname }}</text>
        </view>
      </view>
    </view>
    <view v-if="!hasMore" class="tip">----- 我是有底线的 -----</view>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  import throttle from '../../../common/common.js'
  import { userHistoryConference } from '../../../api/index.js'
  import Search from '../../../components/Search/Search.vue'
  export default {
    data() {
      return {
        histroyLs: [],
        // 历史会议记录参数对象
        historyOptions: {
          keywords: '',
          // 页码值
          current: 1,
          // 条数
          size: 15
        },
        // 是否还有下一页数据
        hasMore: true,
        // 数据条数
        count: 0
      }
    },
    computed: {
      ...mapState(['hisCount', 'histroyList'])
    },
    onLoad() {
      const defaultSize = this.historyOptions.size
      const originDataLength = this.hisCount
      // 截取前15条
      const histroyList = this.histroyList.slice(0, defaultSize)
      this.count = originDataLength > defaultSize ? defaultSize : originDataLength
      this.histroyLs = this.handleData(histroyList)
    },
    // 页面上拉加载事件
    onReachBottom() {
      const { historyOptions, histroyLs, hisCount, count } = this
      // 相等说明数据没有更多了
      if (hisCount === count) return this.hasMore = false
      historyOptions.current++
      console.log(historyOptions.current)
      this.getUserHistoryConference(historyOptions)
    },
    methods: {
      // 获取用户实时输入的key
      getRealTimeKey(key) {
        // 节流发请求
        throttle(this.getKey, 1000, key)
      },
      // 获取输入框传过来的key值并发请求
      getKey(key) {
        const { historyOptions } = this
        // 把key值给请求配置对象
        historyOptions.keywords = key
        // 页码值重置为1
        historyOptions.current = 1
        // 清空源数据
        this.histroyLs = []
        // 发请求
        this.getUserHistoryConference(historyOptions)
      },
      // 处理数据
      handleData(originData,arr = []) {
        const newArr = arr
        originData.forEach((v, i) => {
          let index = -1
          const { y, m, d, h, day, weekArr, minute } = getApp().date(v.signTime)
          const signTime = v.signTime.substring(0, 10)
          let alreadyExists = newArr.some((newData, newIndex) => {
            if (signTime === newData.signTime.substring(0, 10)) {
              // 日期相等,则索引值减1,并返回true
              index = newIndex
              return true
            }
          })
          // 配置对象
          const obj = {
            id: v.id,
            meetingId: v.meetingId,
            meetingNumber: v.meetingNumber,
            meetingName: v.meetingName,
            nickname: v.nickname,
            hour: h,
            minute
          }
          if (!alreadyExists) {
            // 为false,向数组中追加新日期数据
            newArr.push({
              signTime,
              year: y,
              mounth: m.replace(/0+/g, ''),
              date: d.replace(/0+/g, ''),
              week: day,
              obj: [obj]
            })
          } else {
            // 不然在已有日期中追加当前日期数据
            newArr[index].obj.push(obj)
          }
        })
        return newArr
      },
      // 请求历史会议数据
      async getUserHistoryConference(options) {
        const { histroyLs } = this
        const { obj: res } = await userHistoryConference(options)
        this.count += res.recordList.length
        console.log(res)
        // 数据处理
        const result = this.handleData(res.recordList, histroyLs)
        // 新旧数据拼接
        this.histroyLs = [ ...result ]
      },
      // 跳转到历史会议页面
      toHisMeeting(meetingId) {
        uni.navigateTo({
          url: '/pages/index/meeting-details/meeting-details?id=' + meetingId
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .historical-meeting {
    background-color: #f4f8fa;
    height: 100%;
    .search-box {
      padding: 20rpx 0;
      background-color: #ffffff;
    }
    .hisMeeting-item {
      .item-create-time {
        padding: 20rpx 50rpx;
        background-color: #f4f8fa;
      }
      .item-create-time, .btm, .meeting-name {
        display: flex;
        justify-content: space-between;
      }
      .meeting-name:first-child {
        font-weight: bold;
      }
      .btm, .meeting-num {
        font-size: 28rpx;
        color: #c7c7c7;
      }
      .meeting-info {
        padding: 15rpx 50rpx;
        background-color: #ffffff;
        border-top: 1rpx solid #eeeeee;
        .meeting-name {
          padding: 10rpx 0;
          .icon-youjiantou {
            font-size: 40rpx;
            color: #c7c7c7;
          }
        }
      }
    }
  }
</style>
