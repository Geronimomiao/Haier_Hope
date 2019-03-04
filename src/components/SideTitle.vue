<template>
    <div id="title">
      <i class="blue"></i>
      <span>
        <slot name="title"></slot>
      </span>
    </div>
</template>

<script>
  export default {
    name: "Title",
    data() {
      return {}
    },
  }
</script>

<style lang="stylus">
  #title
    display: flex
    align-items center
    height: 1.8rem
    padding-left: 1rem

    .blue
      display: inline-block
      width: 0.6rem
      height: 1rem
      background-color: cornflowerblue
      margin-right: 0.2rem

    span
      font-size: 0.8rem
</style>
