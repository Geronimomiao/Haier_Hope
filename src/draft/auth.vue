<template>
  <div id="auth">
    <router-view></router-view>
    <div class="footer">
      <div class="title">
        <div class="line"></div>
        <div class="text">第三方登录</div>
      </div>
      <div class="icon">
        <div class="item" @click="wait"><i class="iconfont iconqq"></i></div>
        <div class="item" @click="wait"><i class="iconfont iconweixin"></i></div>
        <div class="item" @click="wait"><i class="iconfont iconweibo"></i></div>
        <div class="item" @click="wait"><i class="iconfont iconNGlingying"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "auth",
    data() {
      return {}
    },
    methods: {
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
    }
  }
</script>

<style lang="stylus">
  #auth
    height: 100vh
    .footer
      width: 100%
      position: absolute
      bottom: 0
      .title
        width: 90%
        margin-left: 5%
        color #C2C2C2
        text-align: center
        position: relative
        .line
          border-top 0.1rem solid #c2c2c2
        .text
          font-size: 0.8rem
          position: absolute
          transform translate(-50%, -60%)
          display: inline-block
          padding: 0px 15px
          z-index 10
          background-color: #fff
      .icon
        height: 4.5rem
        line-height: 4.5rem
        display flex
        .item
          text-align: center
          flex 1
          &:nth-child(1)
            color: #49B9F1;
          &:nth-child(2)
            color: #58C45F;
          &:nth-child(3)
            color: #E6142D;
          &:nth-child(4)
            color: #534040;
          i
            font-size: 2rem

</style>
