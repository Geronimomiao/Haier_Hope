<template>
    <div id="top_search">
      <span class="text">
        <slot name="title"></slot>
      </span>
      <i class="el-icon-search"></i>
      <el-input v-model="input" placeholder="搜你想搜"></el-input>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "TopSearch",
    data() {
      return {
        input: ''
      }
    },
  }
</script>

<style lang="stylus">
  @import "../common/stylus/border.styl"
  #top_search
    height 4rem
    border-5px(#EEEEEE)
    .text
      margin-left: 1rem
      font-size: 1rem
      line-height: 3.5rem
      margin-right: 1rem
      @media (min-width: 350px) and (max-width: 400px)
        margin-right: 2rem
        font-size: 1.2rem
        font-weight: bold
    i
      font-weight: bold
      font-size: 1.2rem
    .el-input
      width: 60%
    .el-input__inner
      border-radius 1rem
      height: 2rem

</style>
