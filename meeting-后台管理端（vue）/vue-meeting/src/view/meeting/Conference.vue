<template>
  <el-card style="position: relative">
    <div class="title">会议室管理</div>
    <div class="operation-container">
      <el-button type="danger" :disabled="multipleSelection.length == 0" size="small" icon="el-icon-delete" @click="isDelete = true">
        批量删除
      </el-button>
      <!-- 条件筛选 -->
      <div style="margin-left:auto">
        <el-input v-model="meetingNum" prefix-icon="el-icon-search" size="small" placeholder="请输入会议号" style="width:200px" />
        <el-button type="primary" size="small" icon="el-icon-search" style="margin-left:1rem">
          搜索
        </el-button>
      </div>
    </div>
    <div style="text-align: center">
      <div style="margin-top: 10px;">
        <el-table :data="meetingList" border stripe size="small" @selection-change="handleSelectionChange" style="width: 100%;">
          <el-table-column type="selection" width="70"> </el-table-column>
          <!-- <el-table-column prop="id" label="编号" width="70"> </el-table-column> -->
          <el-table-column prop="meetingNumber" label="会议号"> </el-table-column>
          <el-table-column prop="meetingName" label="会议名称" width="260"> </el-table-column>
          <el-table-column prop="nickname" label="创建者" width="260"> </el-table-column>
          <el-table-column prop="meetingDelete" label="会议是否关闭" width="130">
            <template slot-scope="scope">
              <div v-if="scope.row.meetingDelete === 1">会议已关闭</div>
              <div v-else-if="scope.row.meetingDelete === 0">会议进行中</div>
            </template>
          </el-table-column>
          <el-table-column prop="meetingStartTime" label="创建时间" width="170">
            <template slot-scope="scope">
              <div>{{ scope.row.meetingStartTime | dateTime }}</div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-popconfirm title="确定关闭吗？" v-if="scope.row.meetingDelete === 0" style="margin-left:10px" @confirm="closeCurMeeting(scope.row.meetingNumber)">
                <el-button size="mini" type="text" slot="reference"> <i class="el-icon-edit" /> 关闭会议 </el-button>
              </el-popconfirm>
              <el-popconfirm title="确定删除吗？" style="margin-left:10px">
                <el-button size="mini" type="text" slot="reference"> <i class="el-icon-delete" /> 删除 </el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 批量删除对话框 -->
      <el-dialog :visible.sync="isDelete" width="30%">
        <div class="dialog-title-container" slot="title"><i class="el-icon-warning" style="color:#ff9900" />提示</div>
        <div style="font-size:1rem">是否删除选中项？</div>
        <div slot="footer">
          <el-button @click="isDelete = false">取 消</el-button>
          <el-button type="primary" @click="deleteLog(null)">
            确 定
          </el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 分页 -->
    <el-pagination class="pagination-container" background @size-change="sizeChange" @current-change="currentChange" :current-page="meetOps.current" :page-size="meetOps.size" :total="count" :page-sizes="[10, 20]" layout="total, sizes, prev, pager, next, jumper" />
  </el-card>
</template>

<script>
export default {
  name: 'Conference',
  data() {
    return {
      meetingNum: '',
      jl: {
        name: '',
        titleLevel: ''
      },
      meetingList: [],
      count: 0,
      meetOps: {
        current: 1,
        keywords: '',
        size: 10
      },
      updateJl: {
        roleName: '',
        roleLabel: '',
        isDisable: false
      },
      dialogVisible: false,
      isDelete: false,
      multipleSelection: [],
      titleLevels: ['admin', 'user', 'test']
    }
  },
  mounted() {
    this.initMeeting()
  },
  methods: {
    //查找方法
    async initMeeting() {
      const options = this.meetOps
      const { obj: res } = await this.axios.get('/api/meeting/viewAllConferenceInformation', {
        params: options
      })
      this.meetingList = res.recordList
      this.count = res.count
    },
    // 改变每页条数
    sizeChange(size) {
      this.$set(this.meetOps, 'size', size)
      this.initMeeting()
    },
    // 改变页码
    currentChange(current) {
      this.$set(this.meetOps, 'current', current)
      this.initMeeting()
    },
    // 当表格选择项发生变化时触发
    handleSelectionChange(e) {
      console.log(e)
    },
    // 关闭会议
    async closeCurMeeting(meetingNumber) {
      await this.postRequest('/api/meeting/adminCloseMeeting', { meetingNumber })
      this.initMeeting()
    }
  }
}
</script>

<style scoped>
el-table-column {
  text-align: center;
}
</style>
