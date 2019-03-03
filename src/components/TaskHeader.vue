<template>
    <div id="task_header">
        <div class="item">
          <i class="iconfont iconquestion-circle"></i>
          <span class="text">找需求</span>
        </div>
        <div class="item">
          <i class="iconfont iconwrench"></i>
          <span class="text">找技术</span>
        </div>
        <div class="item">
          <i class="iconfont iconrencai"></i>
          <span class="text">找专家</span>
        </div>
        <div class="item">
          <i class="iconfont iconsever"></i>
          <span class="text">找服务</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TaskHeader",
    data() {
      return {}
    },
  }
</script>

<style lang="stylus">
  #task_header
    height: 5.5rem
    background-color: #f5f5f5
    display: flex
    .item
      text-align: center
      flex 1
      i
        font-size: 2.3rem
        line-height: 3.7rem
        color #40a9ff
      .text
        line-height: 1.2rem
        font-weight: bold
      span, i
        display: block
</style>
