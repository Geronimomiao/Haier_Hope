<template>
  <div id="task">
    <task-top-header></task-top-header>
    <task-header></task-header>
    <div class="wrapper" ref="wrapper">
      <div class="wrapper-content">
        <div class="msg" v-for="item in data">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import TaskTopHeader from '../../components/TaskTopHeader'
  import TaskHeader from '../../components/TaskHeader'

  export default {
    name: "task",
    data() {
      return {
        data: [],

      }
    },
    components: {
      TaskTopHeader,
      TaskHeader,
    },
    mounted() {
      this.showData()
    },
    methods: {
      goForDemand() {
        this.$router.push({path: '/demand'})
      },
      goForService() {
        this.$router.push({path: '/service'})
      },
      goForTechnology() {
        this.$router.push({path: '/technology'})
      },
      async showData() {
        await this.axios.get('/api/hope/a/demand/demand/listData').then(res => {
          // this.demand = res.data.list[0]
          this.data[0] = res.data.list[0]
          this.data[0].type = '需求推荐'
          this.data[0].img = res.data.list[0].demandImg
        })

        this.show()
      },
      show() {
        let scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          scrollY: true,
        })
      },
    }
  }
</script>

<style lang="stylus">
  @import "../../common/stylus/border.styl"
  #task
    .wrapper
      position: fixed
      top: 8rem
      bottom: 3.6rem
      width: 100%
      z-index 30
      .wrapper-content
        .msg
          padding: 1rem 0.5rem
          height: 6rem
          border-bottom: 10px solid #e5e5e5
          .msg-header
            font-size: 0.8rem

</style>


