<template>
  <el-card style="position: relative">
    <div class="title">角色管理</div>
    <div class="operation-container">
      <el-button type="primary" size="small" icon="el-icon-plus">
        新增
      </el-button>
      <el-button type="danger" :disabled="multipleSelection.length == 0" size="small" icon="el-icon-delete" @click="isDelete = true">
        批量删除
      </el-button>
      <!-- 条件筛选 -->
      <div style="margin-left:auto">
        <el-input prefix-icon="el-icon-search" size="small" placeholder="请输入角色名" style="width:200px" />
        <el-button type="primary" size="small" icon="el-icon-search" style="margin-left:1rem">
          搜索
        </el-button>
      </div>
    </div>
    <div style="text-align: center">
      <div style="margin-top: 10px;">
        <el-table :data="role" border stripe size="small" @selection-change="handleSelectionChange" style="width: 100%;">
          <el-table-column type="selection" width="70"> </el-table-column>
          <!-- <el-table-column prop="id" label="编号" width="70"> </el-table-column> -->
          <el-table-column prop="roleName" label="角色名称" width="260"> </el-table-column>
          <el-table-column prop="roleLabel" label="角色称号" width="260">
            <template slot-scope="scope">
              <el-tag>{{ scope.row.roleLabel }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="isDisable" label="是否启用" width="170">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.isDisable" active-color="#13ce66" inactive-color="#F4F4F5" :active-value="1" :inactive-value="0" />
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="170"> </el-table-column>
          <el-table-column label="操作">
            <el-button type="text" size="mini"> <i class="el-icon-edit" /> 菜单权限 </el-button>
            <el-button type="text" size="mini"> <i class="el-icon-folder-checked" /> 资源权限 </el-button>
            <el-popconfirm title="确定删除吗？" style="margin-left:10px">
              <el-button size="mini" type="text" slot="reference"> <i class="el-icon-delete" /> 删除 </el-button>
            </el-popconfirm>
          </el-table-column>
        </el-table>
      </div>
      <el-dialog title="编辑角色" :visible.sync="dialogVisible" width="30%">
        <div>
          <table>
            <tr>
              <td>
                <el-tag>角色名称</el-tag>
              </td>
              <td>
                <el-input v-model="updateJl.roleName" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td>
                <el-tag>职称级别</el-tag>
              </td>
              <td>
                <el-select v-model="updateJl.roleLabel" placeholder="角色称号" size="small" style="margin-left: 6px;margin-right:6px">
                  <el-option v-for="item in titleLevels" :key="item" :label="item" :value="item"> </el-option>
                </el-select>
              </td>
            </tr>
            <tr>
              <td>
                <el-tag>是否启用</el-tag>
              </td>
              <td>
                <el-switch v-model="updateJl.isDisable" activecolor="#13ce66" inactive-color="#ff4949" active-text="启用" inactive-text="禁用"> </el-switch>
              </td>
            </tr>
          </table>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button size="small" @click="dialogVisible = false">取 消</el-button>
          <el-button size="small" type="primary" @click="doUpdate">确 定</el-button>
        </span>
      </el-dialog>
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
  </el-card>
</template>

<script>
export default {
  name: 'PerRoles',
  data() {
    return {
      jl: {
        name: '',
        titleLevel: ''
      },
      role: [],
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
    this.initJls()
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
    showEditView(data) {
      Object.assign(this.updateJl, data)
      this.dialogVisible = true
    },
    //更新
    doUpdate() {
      this.postRequest('/api/role/updateRole', this.updateJl).then(resp => {
        if (resp) {
          this.initJls()
          this.dialogVisible = false
        }
      })
    },
    //删除
    deleteHandler(data) {
      //删除
      this.$confirm('此操作将永久删除【' + data.roleName + '】, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.getRequest('/api/role/roles/list/' + data.id).then(resp => {
            if (resp) {
              this.initJls()
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    //查找方法
    initJls() {
      this.getRequest('/api/role/roles/list').then(resp => {
        if (resp) {
          this.role = resp
        }
      })
    }
  }
}
</script>

<style scoped>
el-table-column {
  text-align: center;
}
</style>
