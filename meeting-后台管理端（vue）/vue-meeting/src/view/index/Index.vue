<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="grid-content-left">
            <i class="el-icon-user-solid" style="color: rgb(64, 201, 198);"></i>
          </div>
          <div class="grid-content-right">
            <div class="r-desc">访问量</div>
            <div class="r-count">{{userCount}}</div>
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
            <div class="r-count">{{ userCount }}</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="grid-content-left">
            <i class="el-icon-user-solid" style="color: #f4516c;"></i>
          </div>
          <div class="grid-content-right">
            <div class="r-desc">会议量</div>
            <div class="r-count">{{meetingData}}</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="grid-content-left">
            <i class="el-icon-user-solid" style="color: #2080f0;"></i>
          </div>
          <div class="grid-content-right">
            <div class="r-desc">签到量</div>
            <div class="r-count">{{signCount}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-card>111</el-card>
    <el-row class="el-row-top">
      <el-card>111</el-card>
    </el-row>
    <el-row class="el-row-top">
      <el-col :span="16">
        <el-card>123</el-card>
      </el-col>
      <el-col :span="8" class="el-col-pr0">
        <el-card>123</el-card>
      </el-col>
    </el-row>
    <el-row class="el-row-top">
      <el-col :span="16">
        <el-card>123</el-card>
      </el-col>
      <el-col :span="8" class="el-col-pr0">
        <el-card>123</el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data(){
    return{
      userCount:21,
      meetingData:212,
      signCount:235
    }
  },
  created() {
    this.getStatistics();
  },
  methods: {
    getStatistics() {
      this.axios.get("/api/user-info/getStatistics").then((data) => {
        this.userCount=data.obj.userCount
        this.meetingData=data.obj.meetingData
        this.signCount=data.obj.signCount

      });
    }
  }
}
</script>

<style scoped></style>
