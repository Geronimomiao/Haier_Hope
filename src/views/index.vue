<template>
  <div id="index">
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import NavFooter from '../components/NavFooter'
  export default {
    name: "index",
    components: {
      NavFooter
    }
  }
</script>

<style lang="stylus">

</style>
