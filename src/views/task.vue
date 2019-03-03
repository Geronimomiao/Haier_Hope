<template>
  <div id="task">
    <task-top-header></task-top-header>
    <task-header></task-header>
  </div>
</template>

<script>
  import TaskTopHeader from '../components/TaskTopHeader'
  import TaskHeader from '../components/TaskHeader'
  export default {
    name: "task",
    components: {
      TaskTopHeader,
      TaskHeader,
    },
  }
</script>

<style lang="stylus">

</style>
