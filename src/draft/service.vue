<template>
    <div id="service">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
</template>

<script>
  export default {
    name: "service",
    data() {
      return {}
    },
  }
</script>

<style lang="stylus">
  #service
    height: 100vh
    background-color: #E7E7E8
</style>
