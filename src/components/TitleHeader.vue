<template>
  <div id="title_header">
    <el-row>
      <el-col :span="2" :offset="1">
        <i class="el-icon-arrow-left" @click="goback"></i>
      </el-col>
      <el-col :span="2" :offset="16">
        <i class="el-icon-star-off"></i>
      </el-col>
      <el-col :span="2">
        <i class="iconfont iconfenxiang"></i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "titleHeader",
    data() {
      return {}
    },
    methods: {
      goback() {
        this.$router.go(-1)
      }
    },
  }
</script>

<style lang="stylus">
  @import "../common/stylus/border.styl"

  #title_header
    height 2.5rem
    color #878787
    border-1px(#878787)
    z-index 50
    background-color: #fff
    margin-bottom: 0.2rem
    i
      font-size 1.5rem
      line-height: 2.5rem


</style>
