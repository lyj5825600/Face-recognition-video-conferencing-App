<template>
  <div>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="auto">
        <SideBar />
      </el-aside>
      <el-container :class="'main-container ' + isHide">
        <!-- 导航栏 -->
        <el-header height="84px" style="padding:0">
          <NavBar :key="$route.fullPath" />
        </el-header>
        <el-main>
          <div v-if="$router.currentRoute.path == '/home'">
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <div class="grid-content-left">
                    <i class="el-icon-user-solid" style="color: rgb(64, 201, 198);"></i>
                  </div>
                  <div class="grid-content-right">
                    <div class="r-desc">访问量</div>
                    <div class="r-count">101902</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <div class="grid-content-left">
                    <i class="el-icon-user-solid" style="color: #34bfa3;"></i>
                  </div>
                  <div class="grid-content-right">
                    <div class="r-desc">用户量</div>
                    <div class="r-count">1019</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <div class="grid-content-left">
                    <i class="el-icon-user-solid" style="color: #f4516c;"></i>
                  </div>
                  <div class="grid-content-right">
                    <div class="r-desc">文章量</div>
                    <div class="r-count">101</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <div class="grid-content-left">
                    <i class="el-icon-user-solid" style="color: #2080f0;"></i>
                  </div>
                  <div class="grid-content-right">
                    <div class="r-desc">留言量</div>
                    <div class="r-count">1019</div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-card>
              <v-chart class="chart" :options="viewCount"></v-chart>
            </el-card>
            <el-row class="el-row-top">
              <el-col :span="16">
                <el-card>
                  <div class="e-title">用户地域分布</div>
                  <div class="area-wrapper">
                    <el-radio-group v-model="type" @change="change">
                      <el-radio :label="1">用户</el-radio>
                      <el-radio :label="2">游客</el-radio>
                    </el-radio-group>
                  </div>
                  <v-chart class="chart" :options="userAreaMap" />
                </el-card>
              </el-col>
              <el-col :span="8" class="el-col-pr0">
                <el-card>
                  <v-chart class="chart" :options="category" />
                </el-card>
              </el-col>
            </el-row>
          </div>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar from '../components/home/SideBar'
import NavBar from '../components/home/NavBar'
import '../assets/js/china.js'
export default {
  components: {
    SideBar,
    NavBar
  },
  name: 'Home',
  data() {
    return {
      user: JSON.parse(window.sessionStorage.getItem('user')),
      viewCount: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        color: ['#3888fa'],
        legend: {
          data: ['访问量']
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '0%',
          top: '10%',
          containLabel: true
        },
        xAxis: {
          data: ['2022-6-01', '2022-6-02', '2022-6-03', '2022-6-04', '2022-6-05', '2022-6-06'],
          axisLine: {
            lineStyle: {
              // 设置x轴颜色
              color: '#666'
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              // 设置y轴颜色
              color: '#048CCE'
            }
          }
        },
        series: [
          {
            name: '访问量',
            type: 'line',
            data: [168, 134, 113, 106, 101, 191],
            smooth: true
          }
        ]
      },
      category: {
        color: ['#7EC0EE', '#FF9F7F', '#FFD700', '#C9C9C9', '#E066FF', '#C0FF3E'],
        legend: {
          data: ['项目介绍', '生活随笔', '设计模式', '多线程'],
          bottom: 'bottom'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '文章分类',
            type: 'pie',
            roseType: 'radius',
            data: [
              { value: 5, name: '项目介绍' },
              { value: 3, name: '生活随笔' },
              { value: 1, name: '设计模式' },
              { value: 0, name: '多线程' }
            ]
          }
        ]
      },
      type: 1,
      userAreaMap: {
        tooltip: {
          formatter: function(e) {
            var value = e.value ? e.value : 0
            return e.seriesName + '<br />' + e.name + '：' + value
          }
        },
        visualMap: {
          min: 0,
          max: 1000,
          right: 26,
          bottom: 40,
          showLabel: !0,
          pieces: [
            {
              gt: 100,
              label: '100人以上',
              color: '#ED5351'
            },
            {
              gte: 51,
              lte: 100,
              label: '51-100人',
              color: '#59D9A5'
            },
            {
              gte: 21,
              lte: 50,
              label: '21-50人',
              color: '#F6C021'
            },
            {
              label: '1-20人',
              gt: 0,
              lte: 20,
              color: '#6DCAEC'
            }
          ],
          show: !0
        },
        geo: {
          map: 'china',
          zoom: 1.2,
          layoutCenter: ['50%', '50%'], //地图中心在屏幕中的位置
          //   label: {
          //     normal: {
          //       show: !0,
          //       fontSize: "12",
          //       color: "rgba(0,0,0,0.7)"
          //     }
          //   },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
              areaColor: '#F5DEB3',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0
            }
          }
        },
        series: [
          {
            name: '用户人数',
            type: 'map',
            geoIndex: 0,
            data: [
              { name: '北京', value: Math.round(Math.random() * 100) },
              { name: '天津', value: Math.round(Math.random() * 100) },
              { name: '上海', value: Math.round(Math.random() * 300) },
              { name: '重庆', value: Math.round(Math.random() * 100) },
              { name: '河北', value: Math.round(Math.random() * 100) },
              { name: '河南', value: Math.round(Math.random() * 100) },
              { name: '云南', value: Math.round(Math.random() * 100) },
              { name: '辽宁', value: Math.round(Math.random() * 100) },
              { name: '黑龙江', value: Math.round(Math.random() * 100) },
              { name: '湖南', value: Math.round(Math.random() * 100) },
              { name: '安徽', value: Math.round(Math.random() * 100) },
              { name: '山东', value: Math.round(Math.random() * 100) },
              { name: '新疆', value: Math.round(Math.random() * 100) },
              { name: '江苏', value: Math.round(Math.random() * 200) },
              { name: '浙江', value: Math.round(Math.random() * 100) },
              { name: '江西', value: Math.round(Math.random() * 100) },
              { name: '湖北', value: Math.round(Math.random() * 100) },
              { name: '广西', value: Math.round(Math.random() * 100) },
              { name: '甘肃', value: Math.round(Math.random() * 100) },
              { name: '山西', value: Math.round(Math.random() * 100) },
              { name: '内蒙古', value: Math.round(Math.random() * 100) },
              { name: '陕西', value: Math.round(Math.random() * 100) },
              { name: '吉林', value: Math.round(Math.random() * 400) },
              { name: '福建', value: Math.round(Math.random() * 100) },
              { name: '贵州', value: Math.round(Math.random() * 100) },
              { name: '广东', value: Math.round(Math.random() * 200) },
              { name: '青海', value: Math.round(Math.random() * 100) },
              { name: '西藏', value: Math.round(Math.random() * 100) },
              { name: '四川', value: Math.round(Math.random() * 100) },
              { name: '宁夏', value: Math.round(Math.random() * 200) },
              { name: '海南', value: Math.round(Math.random() * 100) },
              { name: '台湾', value: Math.round(Math.random() * 100) },
              { name: '香港', value: Math.round(Math.random() * 100) },
              { name: '澳门', value: Math.round(Math.random() * 300) }
            ],
            areaColor: '#0FB8F0'
          }
        ]
      }
    }
  },
  computed: {
    isHide() {
      return this.$store.state.collapse ? 'hideSideBar' : ''
    }
  },
  methods: {
    change(selType) {
      if (selType === 1) {
        this.userAreaMap.series[0].data = [
          { name: '北京', value: Math.round(Math.random() * 100) },
          { name: '天津', value: Math.round(Math.random() * 100) },
          { name: '上海', value: Math.round(Math.random() * 300) },
          { name: '重庆', value: Math.round(Math.random() * 100) },
          { name: '河北', value: Math.round(Math.random() * 100) },
          { name: '河南', value: Math.round(Math.random() * 100) },
          { name: '云南', value: Math.round(Math.random() * 100) },
          { name: '辽宁', value: Math.round(Math.random() * 100) },
          { name: '黑龙江', value: Math.round(Math.random() * 100) },
          { name: '湖南', value: Math.round(Math.random() * 100) },
          { name: '安徽', value: Math.round(Math.random() * 100) },
          { name: '山东', value: Math.round(Math.random() * 100) },
          { name: '新疆', value: Math.round(Math.random() * 100) },
          { name: '江苏', value: Math.round(Math.random() * 200) },
          { name: '浙江', value: Math.round(Math.random() * 100) },
          { name: '江西', value: Math.round(Math.random() * 100) },
          { name: '湖北', value: Math.round(Math.random() * 100) },
          { name: '广西', value: Math.round(Math.random() * 100) },
          { name: '甘肃', value: Math.round(Math.random() * 100) },
          { name: '山西', value: Math.round(Math.random() * 100) },
          { name: '内蒙古', value: Math.round(Math.random() * 100) },
          { name: '陕西', value: Math.round(Math.random() * 100) },
          { name: '吉林', value: Math.round(Math.random() * 400) },
          { name: '福建', value: Math.round(Math.random() * 100) },
          { name: '贵州', value: Math.round(Math.random() * 100) },
          { name: '广东', value: Math.round(Math.random() * 200) },
          { name: '青海', value: Math.round(Math.random() * 100) },
          { name: '西藏', value: Math.round(Math.random() * 100) },
          { name: '四川', value: Math.round(Math.random() * 100) },
          { name: '宁夏', value: Math.round(Math.random() * 200) },
          { name: '海南', value: Math.round(Math.random() * 100) },
          { name: '台湾', value: Math.round(Math.random() * 100) },
          { name: '香港', value: Math.round(Math.random() * 100) },
          { name: '澳门', value: Math.round(Math.random() * 300) }
        ]
      } else {
        this.userAreaMap.series[0].data = [
          { name: '北京1111', value: Math.round(Math.random() * 100) },
          { name: '天津222', value: Math.round(Math.random() * 100) },
          { name: '上海', value: Math.round(Math.random() * 0) },
          { name: '重庆', value: Math.round(Math.random() * 100) },
          { name: '河北', value: Math.round(Math.random() * 40) },
          { name: '河南', value: Math.round(Math.random() * 100) },
          { name: '云南', value: Math.round(Math.random() * 100) },
          { name: '辽宁', value: Math.round(Math.random() * 30) },
          { name: '黑龙江', value: Math.round(Math.random() * 100) },
          { name: '湖南', value: Math.round(Math.random() * 100) },
          { name: '安徽', value: Math.round(Math.random() * 100) },
          { name: '山东', value: Math.round(Math.random() * 100) },
          { name: '新疆', value: Math.round(Math.random() * 100) },
          { name: '江苏', value: Math.round(Math.random() * 200) },
          { name: '浙江', value: Math.round(Math.random() * 100) },
          { name: '江西', value: Math.round(Math.random() * 100) },
          { name: '湖北', value: Math.round(Math.random() * 100) },
          { name: '广西', value: Math.round(Math.random() * 100) },
          { name: '甘肃', value: Math.round(Math.random() * 100) },
          { name: '山西', value: Math.round(Math.random() * 100) },
          { name: '内蒙古', value: Math.round(Math.random() * 100) },
          { name: '陕西', value: Math.round(Math.random() * 100) },
          { name: '吉林', value: Math.round(Math.random() * 0) },
          { name: '福建', value: Math.round(Math.random() * 100) },
          { name: '贵州', value: Math.round(Math.random() * 100) },
          { name: '广东', value: Math.round(Math.random() * 200) },
          { name: '青海', value: Math.round(Math.random() * 0) },
          { name: '西藏', value: Math.round(Math.random() * 55) },
          { name: '四川', value: Math.round(Math.random() * 30) },
          { name: '宁夏', value: Math.round(Math.random() * 20) },
          { name: '海南', value: Math.round(Math.random() * 10) },
          { name: '台湾', value: Math.round(Math.random() * 5) },
          { name: '香港', value: Math.round(Math.random() * 10) },
          { name: '澳门', value: Math.round(Math.random() * 50) }
        ]
      }
    }
  }
}
</script>
<style scoped>
.chart {
  height: 400px;
  width: 100%;
}
.e-title {
  font-size: 13px;
  color: #202a34;
  font-weight: 700;
}
.area-wrapper {
  display: flex;
  justify-content: center;
}
.main-container {
  transition: margin-left 0.45s;
  margin-left: 210px;
  min-height: 100vh;
}
.hideSideBar {
  margin-left: 64px;
}
.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: all 0.5s ease 0s;
}
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.fade-transform-box {
  position: relative;
  top: 0px;
  bottom: 0px;
  width: 100%;
  overflow: hidden;
}
.homeWelcome {
  text-align: center;
  font-size: 30px;
  font-family: 华文行楷;
  color: #409eff;
  padding-top: 50px;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  padding-right: 20px !important;
}
.el-col:last-child {
  padding-right: 10px !important;
}
.bg-purple {
  background: #fff;
  border: 1px solid #ebeef5;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  /* border-radius: 4px; */
  min-height: 36px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.grid-content .grid-content-left {
  font-size: 48px;
}
.grid-content .grid-content-right {
  font-size: 1.25rem;
  color: #c7c7c7;
  font-weight: bold;
}
.grid-content .grid-content-right .r-desc {
  margin-bottom: 10px;
  color: #666666;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-row .el-col.el-col-pr0 {
  padding-right: 0 !important;
}
.el-row.el-row-top {
  margin-top: 20px;
}
</style>
