<template>
  <div id="message">
    <back-header-white>
      <span slot="title">我的消息</span>
    </back-header-white>
    <div class="content">
      <div class="img"></div>
      <div class="msg">暂无消息</div>
    </div>
  </div>
</template>

<script>
  import BackHeaderWhite from '../../components/BackHeaderWhite'

  export default {
    name: "message",
    data() {
      return {}
    },
    components: {
      BackHeaderWhite
    }
  }
</script>

<style lang="stylus">

  #message
    height: 100vh

    .content
      height: 80%
      display: flex
      justify-content center
      align-items center
      flex-direction column
      .img
        background-image: url('http://wsmpage.cn/fuchuang/62ABDFBF-9A34-45A3-B79F-E35DF0EB689C.png')
        height: 12rem
        width: 12rem
        border-radius 12rem
        background-size: cover
        margin-bottom: 3rem

</style>
