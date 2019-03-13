<template>
  <div id="setting_header">
    <div class="height-header">
      <i class="el-icon-arrow-left" @click="goback"></i>
    </div>
    <div class="height-info">
      <div class="avatar" @click="changeStatus"></div>
      <div class="edit" @click="changeStatus">
        <el-button type="primary" size="mini" plain>编辑资料</el-button>
      </div>
      <div class="nick-name">内测用户</div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "SettingHeader",
    data() {
      return {}
    },
    computed: {
      ...mapState(['flag'])
    },
    methods: {
      goback() {
        this.$router.go(-1)
      },
      changeStatus() {
        console.log(this.flag)
        this.$store.commit('updateFlag', 1)
      },
    },
  }
</script>

<style lang="stylus">
  @import "../common/stylus/border.styl"
  #setting_header
    .height-header
      height: 7rem
      background-color: #595555
      position: relative
      .el-icon-arrow-left
        padding: 0.5rem
        position: absolute
        top: 1.2rem
        left: 1rem
        font-size: 2rem
        color: #ffff
        font-weight: bold
    .height-info
      position: relative
      display: flex
      align-items center
      height: 7rem
      background-color: #fff
      border-10px(#E7E7E7)
      .nick-name
        margin-left: 2rem
      .edit
        position: absolute
        top: 1rem
        right: 1rem
        .el-button--primary.is-plain
          background-color: #fff
        .el-button--primary.is-plain:hover
          color cornflowerblue
      .avatar
        position: absolute
        top: 0
        transform translate(25%, -50%)
        background-image: url("http://wsmpage.cn/yan/zanzibar%20sunset.jpg")
        height: 4.5rem
        width: 4.5rem
        border-radius 3.5rem
        border 3px solid #fff
        display: inline-block
        background-size: cover
</style>
