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
        data: '',
        demand: '',
        tech: '',
        company: '',
        news: '',
        activity: '',
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
        await this.axios.get('/api/hope/a/activity/activity/allRecommend').then(res => {
          // this.demand = res.data.list[0]
          // console.log(res.data)
          this.data = res.data
          let news_filter = this.$options.filters['dataFilter']
          this.demand = news_filter(this.data, 'demandId')
          this.news = news_filter(this.data, 'newsId')
          this.activity = news_filter(this.data, 'activityId')
          this.tech = news_filter(this.data, 'techId')
          this.company = news_filter(this.data, 'companyId')

        })
        this.show()
      },
      show() {
        let scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          scrollY: true,
        })
      },
    },
    filters: {
      dataFilter(data, avg) {
        let arr = []
        data.forEach(item => {
          if (item.hasOwnProperty(avg)) {
            arr.push(item)
          }
        })
        return arr
      }
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


