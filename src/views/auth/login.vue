<template>
    <div id="login">
      <back-header-white>
        <span slot="title">登录</span>
      </back-header-white>
      <div class="form">
        <el-input v-model="name" placeholder="请输入账号"></el-input>
        <el-input v-model="password" placeholder="请输入密码"></el-input>
        <el-button type="primary" @click="wait">登录</el-button>
        <div class="form-footer">
          <div class="item" @click="register">立即注册</div>
          <div class="item">忘记密码</div>
        </div>
      </div>
    </div>
</template>

<script>
  import BackHeaderWhite from '../../components/BackHeaderWhite'
  export default {
    name: "login",
    data() {
      return {
        name: '',
        password: ''
      }
    },
    components: {
      BackHeaderWhite
    },
    methods: {
      register() {
        this.$router.push({path: '/auth/register'})
      },
      wait() {
        this.$message('请稍等....');
        setTimeout(this.login, 1500)
      },
      login() {
        this.$message({
          message: '恭喜你,登录成功',
          type: 'success',
          onClose: this.$router.push({path: '/'}),
        });
      }
    },
  }
</script>

<style lang="stylus">
  #login
    #back_header
      color black
      background-color: #F2F2F2
    .form
      .el-input
        margin: 0 5%
        margin-top: 0.8rem
        .el-input__inner
          background-color: #F2F2F2
          border 0px
          width: 90%
      .el-button, .form-footer
        width: 90%
        margin: 0 5%
        margin-top: 0.8rem
      .form-footer
        display: flex
        color #A5A5A5
        font-size: 0.8rem
        justify-content space-between


</style>
