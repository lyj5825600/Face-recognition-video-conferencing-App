<template>
  <div>
    <el-card style="position: relative">
      <div class="title">用户信息</div>
      <div class="operation-container">
        <!-- 条件筛选 -->
        <div style="margin-left:auto">
          <el-select style="margin-right: 1rem;" size="small" v-model="value" clearable placeholder="请选择登录方式">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
          <el-input prefix-icon="el-icon-search" v-model="searchUser" size="small" placeholder="请输入昵称" style="width:200px" />
          <el-button type="primary" size="small" icon="el-icon-search" style="margin-left:1rem">
            搜索
          </el-button>
        </div>
      </div>
      <el-table :data="userList" border style="width: 100%">
        <el-table-column prop="avatar" label="头像" align="center">
          <template slot-scope="scope">
            <el-avatar shape="square" :src="scope.row.avatar"></el-avatar>
          </template>
        </el-table-column>
        <el-table-column prop="nickname" label="昵称"> </el-table-column>
        <el-table-column prop="loginType" label="登陆方式">
          <template slot-scope="scope">
            {{ scope.row.loginType == 1 ? '手机号' : 'QQ' }}
          </template>
        </el-table-column>
        <el-table-column prop="roleList" label="用户角色">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.roleList === null">用户</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="禁用">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.isDisable" active-color="#13ce66" inactive-color="#F4F4F5" :active-value="1" :inactive-value="0" />
          </template>
        </el-table-column>
        <el-table-column prop="ipAddress" width="170" label="登录页"></el-table-column>
        <el-table-column prop="ipSource" label="登录地址" width="180">
          <template slot-scope="scope">
            {{ scope.row.ipSource ? scope.row.ipSource : '不详' }}
          </template>
        </el-table-column>
        <el-table-column prop="address" label="创建时间" align="center" width="190">
          <template slot-scope="scope">
            <i class="el-icon-time" style="margin-right:5px" />
            {{ scope.row.createTime | dateTime }}
          </template>
        </el-table-column>
        <el-table-column prop="address" label="上次登录时间" align="center" width="180">
          <template slot-scope="scope">
            {{ scope.row.lastLoginTime | dateTime }}
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <span v-if="false">{{ scope }}</span>
            <!-- {{ scope }} -->
            <el-dropdown trigger="click">
              <span class="el-dropdown-link"> <el-button type="primary" size="small">编辑</el-button></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-edit" @click.native="editPassword(scope.row.nickname)">修改密码</el-dropdown-item>
                <el-dropdown-item icon="el-icon-delete">删除用户</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination class="pagination-container" background @size-change="sizeChange" @current-change="currentChange" :current-page="options.current" :page-size="options.size" :total="count" :page-sizes="[10, 20, 25]" layout="total, sizes, prev, pager, next, jumper" />
      <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="30%" center>
        <el-form :model="form" label-position="left" label-width="60px">
          <el-form-item label="账号">
            <el-input v-model="form.username" disabled></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input v-model="form.password" autocomplete="off" show-password></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateAdminPassword">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'UsersUser',
  data() {
    return {
      searchUser: '',
      value: '',
      userList: [],
      dialogFormVisible: false,
      form: {
        username: 'hhh',
        password: ''
      },
      count: 0,
      options: {
        current: 1,
        keywords: '',
        size: 10
      }
    }
  },
  created() {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      const { obj: res } = await this.getRequest('/api/users', { params: this.options })
      this.userList = res
      this.count = res.length
    },
    async updateAdminPassword() {
      // 管理员修改密码
      this.dialogFormVisible = false
      await this.putRequest('/api/updateAdminPassword', this.form)
    },
    editPassword(username) {
      this.dialogFormVisible = true
      this.$set(this.form, 'username', username)
    },
    sizeChange(size) {
      this.$set(this.options, 'size', size)
      this.getUsers()
    },
    currentChange(current) {
      this.$set(this.options, 'current', current)
      this.getUsers()
    }
  }
}
</script>

<style scoped></style>
