<template>
  <div id="attention">
    <back-header-white>
      <span slot="title">我的关注</span>
    </back-header-white>
    <div class="content">
      <div class="img"></div>
      <div class="msg">暂无关注</div>
    </div>
  </div>
</template>

<script>
  import BackHeaderWhite from '../../components/BackHeaderWhite'

  export default {
    name: "attention",
    data() {
      return {}
    },
    components: {
      BackHeaderWhite
    }
  }
</script>

<style lang="stylus">

  #attention
    height: 100vh

    .content
      height: 80%
      display: flex
      justify-content center
      align-items center
      flex-direction column
      .img
        background-image: url('http://wsmpage.cn/fuchuang/4B7534E8-4524-414B-AEFB-5BE4290A37FA.png')
        height: 12rem
        width: 12rem
        border-radius 12rem
        background-size: cover
        margin-bottom: 3rem




</style>
