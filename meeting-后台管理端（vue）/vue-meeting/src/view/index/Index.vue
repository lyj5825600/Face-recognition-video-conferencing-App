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
  name: 'Index'
}
</script>

<style scoped></style>
