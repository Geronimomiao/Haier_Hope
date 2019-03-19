<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="stylus">
  @import "../node_modules/animate.css/animate.css"
  #app
    height 100vh
    position: relative


  .el-notification
    @media screen and (max-width: 370px)
      width: 290px

  .el-message
    min-width: 300px
    left: 45%
</style>
