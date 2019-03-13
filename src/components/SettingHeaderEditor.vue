<template>
  <div id="setting_header_editor">
    <div class="header">
      <i class="el-icon-arrow-left" @click="changeStatus"></i>
    </div>
    <div class="avatar-info">
      <div class="msg">头像</div>
      <div class="img"></div>
      <i class="el-icon-caret-right"></i>
    </div>
    <div class="nick-name">
      <div class="msg">用户名</div>
      <div class="name">内测用户</div>
      <i class="el-icon-caret-right"></i>
    </div>
  </div>
</template>

<script>

  export default {
    name: "SettingHeaderEditor",
    data() {
      return {}
    },
    methods: {
      changeStatus() {
        this.$store.commit('updateFlag', 0)
      },
    }
  }
</script>

<style lang="stylus">
  @import "../common/stylus/border.styl"
  #setting_header_editor
    .header
      position: relative
      height: 2.8rem
      background-color: #595555
      .el-icon-arrow-left
        padding: 0.5rem
        position: absolute
        top: 0.2rem
        left: 0.7rem
        font-size: 1.5rem
        color: #ffff
        font-weight: bold

    .avatar-info
      position: relative
      height: 6rem
      background-color: #fff
      border-10px(#E7E7E7)

      .msg
        position: absolute
        top: 50%
        transform translate(100%, -75%)

      .img
        position: absolute
        top: 50%
        right: 0
        transform translate(-75%, -60%)
        background-image: url("http://wsmpage.cn/yan/zanzibar%20sunset.jpg")
        height: 4rem
        width: 4rem
        border-radius 3.5rem
        display: inline-block
        background-size: cover

      .el-icon-caret-right
        position: absolute
        top: 50%
        right: 0
        transform translate(-105%, -60%)

    .nick-name
      position: relative
      height: 3rem
      background-color: #fff
      border-10px(#E7E7E7)

      .msg
        position: absolute
        top: 0
        z-index 2
        transform translate(38%, 66%)

      .name
        position: absolute
        right: 0
        top: 0
        z-index 2
        transform translate(-78%, 66%)

      .el-icon-caret-right
        position: absolute
        top: 50%
        right: 0
        transform translate(-105%, -80%)


</style>
