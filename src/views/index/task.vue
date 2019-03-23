<template>
  <div id="task">
    <task-top-header></task-top-header>
    <task-header></task-header>
    <div class="wrapper" ref="wrapper">
      <div class="wrapper-content">
        <div class="msg" v-for="item in demand">
          <div class="title">
           <span>需求推荐</span>
            <i class="el-icon-caret-right"></i>
          </div>
          <div class="container">
            <div class="container-left">
              <div class="name">{{item.demandName}}</div>
              <div class="remark">{{item.remarks}}</div>
            </div>
            <div class="container-right">
              <img :src="item.demandImg" alt="">
            </div>
          </div>
        </div>
        <div class="msg" v-for="item in tech">
          <div class="title">
            <span>技术推荐</span>
            <i class="el-icon-caret-right"></i>
          </div>
          <div class="container">
            <div class="container-left">
              <div class="name">{{item.techName}}</div>
              <div class="remark">{{item.remarks}}</div>
            </div>
            <div class="container-right">
              <img :src="item.techImg" alt="">
            </div>
          </div>
        </div>
        <div class="msg" v-for="item in company">
          <div class="title">
            <span>服务推荐</span>
            <i class="el-icon-caret-right"></i>
          </div>
          <div class="container">
            <div class="container-left">
              <div class="name">{{item.companyName}}</div>
              <div class="remark">{{item.remarks}}</div>
            </div>
            <div class="container-right">
              <img :src="item.companyLogo" alt="">
            </div>
          </div>
        </div>
        <div class="msg" v-for="item in news">
          <div class="title">
            <span>资讯推荐</span>
            <i class="el-icon-caret-right"></i>
          </div>
          <div class="container">
            <div class="container-left">
              <div class="name">{{item.newsName}}</div>
              <div class="remark">{{item.remarks}}</div>
            </div>
            <div class="container-right">
              <img :src="item.newsImg" alt="">
            </div>
          </div>
        </div>
        <div class="msg" v-for="item in activity">
          <div class="title">
            <span>活动推荐</span>
            <i class="el-icon-caret-right"></i>
          </div>
          <div class="container">
            <div class="container-left">
              <div class="name">{{item.activityName}}</div>
              <div class="remark">{{item.remarks}}</div>
            </div>
            <div class="container-right">
              <img :src="item.activityImg" alt="">
            </div>
          </div>
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
          console.log(this.activity)
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
          height: 8rem
          border-bottom: 10px solid #e5e5e5
          .title
            font-size: 0.8rem

          .container
            margin-top: 0.3rem
            width: 100%
            &:after
              content: " ";
              display: block;
              height: 0;
              clear: both;
              visibility: hidden;

            .container-left
              float: left
              width: 55%
              .name
                font-size: 1rem
                margin-bottom: 0.3rem
                height: 2rem
                overflow hidden
              .remark
                font-size: 0.9rem
                text-indent 1.8rem
                height: 4.4rem
                overflow hidden
            .container-right
              float: right
              width: 40%
              img
                display: inline-block
                width: 100%
                height: 6rem

</style>


