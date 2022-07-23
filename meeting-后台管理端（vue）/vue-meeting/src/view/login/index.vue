<template>
  <div class="img">
    <div>
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        :rules="rules"
        class="loginContainer"
      >
        <h3 class="loginTitle">登录</h3>
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            size="normal"
            type="text"
            v-model="ruleForm.code"
            auto-complete="false"
            placeholder="点击图片更换验证码"
            style="width:250px;margin-right: 5px"
          ></el-input>
          <img :src="captchaUrl" @click="updateCaptcha" />
        </el-form-item>
        <el-button type="primary" style="width: 100%" @click="submitLogin"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
import { postRequest } from "../../util/api";

export default {
  name: "Login",
  data() {
    return {
      captchaUrl: "/captcha?time=" + new Date(),
      ruleForm: {
        username: "admin@qq.com",
        password: "1234567",
        code: ""
      },
      checked: true,
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ],
        code: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    this.updateCaptcha();
  },
  methods: {
    updateCaptcha() {
      //验证码
      this.captchaUrl = "/api/captcha?time=" + new Date();
    },
    //登录
    submitLogin() {
      this.$refs.ruleForm.validate(valid => {
        // 校验
        if (valid) {
          postRequest("/api/login", this.ruleForm).then(resp => {
            if (resp) {
              //存储用户token
              const tokenStr = resp.obj.tokenHead + resp.obj.token;
              window.sessionStorage.setItem("tokenStr", tokenStr);
              // 清空菜单
              this.$store.commit("initRoutes", []);
              //页面跳转
              let path = this.$route.query.redirect;
              this.$router.replace(path === "/" || path === undefined ? "/home" : path).catch(()=>true);
            }
          });
        } else {
          this.$message.error("请输入所有字段");
          return false;
        }
      });
    }
  }
};
</script>

<style>
/* html{
   width: 100%;
   width: 100%;
   background-image:url('@/assets/images/login.jpg')
}  */
/* @/assets/images/login.jpg */
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.loginTitle {
  margin: 0 auto 40px auto;
  text-align: center;
  color: #505458;
}

/*.loginRemember {
    text-align: left;
    margin: 0px 0px 15px 0px;
  }*/

.el-form-item__content {
  display: flex;
  align-items: center;
}
</style>
