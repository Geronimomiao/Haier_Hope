<template>
    <div id="nav_footer">
      <div class="item">
        <span class="el-icon-date"></span>
        <span>首页</span>
      </div>
      <div class="item">
        <span class="el-icon-view"></span>
        <span>咨询</span>
      </div>
      <div class="item">
        <span class="el-icon-share"></span>
        <span>活动</span>
      </div>
      <div class="item">
        <span class="el-icon-setting"></span>
        <span>我的</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NavFooter"
    }
</script>

<style lang="stylus">

  #nav_footer
    position: fixed
    bottom: 0
    width: 100%
    height 3.5rem
    background-color #f5f5f5
    display flex
    .item
      flex 1
      text-align: center
      line-height: 1.5rem
      padding-top: 0.2rem
      [class^=el-icon-]
        font-size: 1.5rem
      span
        display: block


</style>
