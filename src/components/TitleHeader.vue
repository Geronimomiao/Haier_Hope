<template>
  <div id="title_header">
    <el-row>
      <el-col :span="2">
        <i class="el-icon-arrow-left" @click="goback"></i>
      </el-col>
      <el-col :span="2" :offset="18">
        <i class="el-icon-arrow-left"></i>
      </el-col>
      <el-col :span="2">
        <i class="el-icon-arrow-left"></i>
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
  #back_header
    height 2.5rem
    color #FBFBFC
    background-color #6E7483
    i
      font-size 2rem
      line-height: 2.5rem


</style>
