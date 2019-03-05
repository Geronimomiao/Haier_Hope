<template>
  <div id="back_header">
    <i class="el-icon-arrow-left" @click="goback"></i>
    <slot name="title"></slot>
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
    background-color: #fff
    line-height: 2.5rem
    text-align: center
    position: relative
    i
      font-size: 1.3rem
      line-height: 2.5rem
      position: absolute
      left: 1.2rem



</style>
