<template>
  <el-card style="position: relative">
    <div class="title">接口管理</div>
    <div class="operation-container">
      <el-button type="primary" size="small" icon="el-icon-plus">新增</el-button>
      <div style="margin-left: auto;">
        <el-input size="small" v-model="searchApi" type="text" prefix-icon="el-icon-search" style="width: 200px"></el-input>
        <el-button type="primary" size="small" icon="el-icon-search" style="margin-left:1rem">
          搜索
        </el-button>
      </div>
    </div>
    <el-table v-loading="loading" :data="tableData" style="width: 100%" row-key="id" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
      <el-table-column label="资源名" prop="resourceName"> </el-table-column>
      <el-table-column label="资源路径" prop="url"> </el-table-column>
      <el-table-column label="请求方式" prop="requestMethod">
        <template slot-scope="scope" v-if="scope.row.requestMethod">
          <el-tag :type="tagType(scope.row.requestMethod)">
            {{ scope.row.requestMethod }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="匿名访问" prop="isAnonymous">
        <template slot-scope="scope">
          <el-switch v-if="scope.row.url" v-model="scope.row.isAnonymous" active-color="#13ce66" inactive-color="#F4F4F5" :active-value="1" :inactive-value="0" />
        </template>
      </el-table-column>
      <el-table-column label="创建时间" prop="createTime" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time" style="margin-right:5px" />
          {{ scope.row.createTime | date }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="200">
        <template slot-scope="scope">
          <el-button v-if="scope.row.children" type="text" size="mini" @click="openAddResource(scope.row)">
            <i class="el-icon-plus" />
            新增
          </el-button>
          <el-button type="text" size="mini">
            <i class="el-icon-edit" />
            修改
          </el-button>
          <el-popconfirm title="确定删除吗？" style="margin-left:10px">
            <el-button size="mini" type="text" slot="reference"> <i class="el-icon-delete" /> 删除 </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增模态框 -->
    <el-dialog :visible.sync="addResource" width="30%">
      <div class="dialog-title-container" slot="title" ref="resourceTitle" />
      <el-form label-width="80px" size="medium" :model="resourceForm">
        <el-form-item label="资源名">
          <el-input v-model="resourceForm.resourceName" style="width:220px" />
        </el-form-item>
        <el-form-item label="资源路径">
          <el-input v-model="resourceForm.url" style="width:220px" />
        </el-form-item>
        <el-form-item label="请求方式">
          <el-radio-group v-model="resourceForm.requestMethod" style="height: 36px;display: flex;align-items: center">
            <el-radio :label="'GET'">GET</el-radio>
            <el-radio :label="'POST'">POST</el-radio>
            <el-radio :label="'PUT'">PUT</el-radio>
            <el-radio :label="'DELETE'">DELETE</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addResource = false">取 消</el-button>
        <el-button type="primary" @click="addOrEditResource">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  name: 'PerInterface',
  data() {
    return {
      addResource: false,
      resourceForm: {
        requestMethod: '',
        resourceName: '',
        url: '',
        parentId: '',
        isAnonymous: ''
      },
      searchApi: '',
      loading: true,
      tableData: [],
      options: {
        current: 1,
        keywords: '',
        size: 10
      }
    }
  },
  created() {
    this.getResources()
  },
  computed: {
    tagType(type) {
      return function(type) {
        switch (type) {
          case 'GET':
            return ''
            break
          case 'POST':
            return 'success'
            break
          case 'PUT':
            return 'warning'
            break
          case 'DELETE':
            return 'danger'
        }
      }
    }
  },
  methods: {
    async getResources() {
      const { obj: res } = await this.getRequest('/api/resource/admin/resources', this.options)
      this.loading = false
      this.tableData = res
    },
    openAddResource(resource) {
      this.resourceForm = {
        requestMethod: resource.requestMethod,
        resourceName: resource.resourceName,
        url: resource.url,
        parentId: resource.id,
        isAnonymous: resource.isAnonymous
      }
      this.$refs.resourceTitle.innerHTML = '修改资源'
      this.addResource = true
    },
    addOrEditResource() {
      this.postRequest('/api/resource/admin/saveOrUpdateResource', this.resourceForm).then(res => {
        this.getResources()
        this.addResource = false
      })
    }
  }
}
</script>
