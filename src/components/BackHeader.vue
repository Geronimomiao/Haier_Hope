<template>
    <div id="back_header">
      <el-row>
        <el-col :span="2">
          <i class="el-icon-arrow-left" @click="goback"></i>
        </el-col>
        <el-col :span="22">
          <div class="title">
            <slot name="title"></slot>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: "backHeader",
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

    background-color #6E7483
    i
      font-size 2rem
      line-height: 2.5rem
    .title
      line-height: 2.5rem
      text-align: center
      font-size: 1.2rem

</style>
