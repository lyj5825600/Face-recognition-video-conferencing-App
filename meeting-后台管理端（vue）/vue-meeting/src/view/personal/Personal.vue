<template>
  <el-card style="position: relative;height: 600px;">
    <el-tabs v-model="activeName">
      <el-tab-pane label="修改信息" name="first">
        <div class="user-edit-info">
          <el-upload class="user-avatar" action="/api/users/avatar" :show-file-list="false">
            <el-image style="width: 100px; height: 100px;border: 1px dashed  #c7c7c7;border-radius: 5%" src="https://static.talkxj.com/avatar/user.png"></el-image>
          </el-upload>
          <div class="form-box">
            <el-form label-width="70px" style="width:320px;margin-left:3rem">
              <el-form-item label="昵称">
                <el-input size="small"></el-input>
              </el-form-item>
              <el-form-item label="个人简介">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="个人网站">
                <el-input size="small"></el-input>
              </el-form-item>
              <el-button type="primary" size="medium" style="margin-left:4.375rem">修改</el-button>
            </el-form>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="修改密码" name="second">
        <el-form label-width="70px" style="width:320px;">
          <el-form-item label="新密码">
            <el-input size="small" v-model="newPsw"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input size="small" v-model="againNewPsw"></el-input>
          </el-form-item>
          <el-button type="primary" size="medium" style="margin-left:4.375rem" @click.native="editPassword">修改</el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      activeName: 'first',
      newPsw: '',
      againNewPsw: '',
      options: [
        {
          value: '选项1',
          label: '手机号'
        },
        {
          value: '选项2',
          label: 'QQ'
        }
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    async editPassword() {
      const { newPsw, againNewPsw } = this
      if (newPsw !== againNewPsw) return this.$message({ type: 'success', message: '密码不一致!' })
      const params = new URLSearchParams()
      params.append('password', newPsw)
      await this.putRequest('/api/updateUserPassword', params)
    }
  }
}
</script>
<style scoped>
.user-edit-info {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
</style>
