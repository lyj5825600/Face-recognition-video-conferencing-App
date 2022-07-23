<template>
  <el-card style="position: relative">
    <div class="title">接口管理</div>
    <div class="operation-container">
      <el-button type="primary" size="small" icon="el-icon-plus">新增</el-button>
      <div style="margin-left: auto;">
        <el-input size="small" type="text" prefix-icon="el-icon-search" style="width: 200px"></el-input>
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
          <el-button v-if="scope.row.children" type="text" size="mini">
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
  </el-card>
</template>

<script>
export default {
  name: 'PerInterface',
  data() {
    return {
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
    }
  }
}
</script>

<style scoped></style>
