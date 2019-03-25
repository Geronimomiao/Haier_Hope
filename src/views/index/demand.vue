<template>
  <div id="demand">
    <top-search>
      <span slot="title">找需求</span>
    </top-search>
    <div class="type">
      <div class="item" @click="type_flag = 1">
        需求类型
        <div class="select" v-if="type_flag">
          <div class="select-item" @click="showData('科技需求', 'type')">科技需求</div>
          <div class="select-item" @click="showData('营销需求', 'type')">营销需求</div>
          <div class="select-item" @click="showData('创意需求', 'type')">创意需求</div>
          <div class="select-item" @click="showData('资金需求', 'type')">资金需求</div>
        </div>
      </div>
      <div class="item" @click="dir_flag = 1">
        所属领域
        <div class="select" v-if="dir_flag">
          <div class="select-item" @click="showData('水处理技术', 'dir')">减震降噪</div>
          <div class="select-item" @click="showData('新材料应用', 'dir')">新材料应用</div>
          <div class="select-item" @click="showData('减振降噪', 'dir')">传感器</div>
          <div class="select-item" @click="showData('流体机械', 'dir')">流体机械</div>
          <div class="select-item" @click="showData('机械结构设计', 'dir')">机械机构设计</div>
        </div>
      </div>
      <div class="item" @click="area_flag = 1">
        所在地区
        <div class="select" v-if="area_flag">
          <div class="select-item" @click="showData('浙江', 'area')">浙江</div>
          <div class="select-item" @click="showData('四川', 'area')">四川</div>
          <div class="select-item" @click="showData('上海', 'area')">上海</div>
          <div class="select-item" @click="showData('北京', 'area')">北京</div>
        </div>
      </div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="wrapper-content">
        <div class="msg" v-for="item in data" @click="goDetail(item.id)">
          <div class="msg-left">
            <div class="title">{{item.demandName}}</div>
            <div class="direction">领域：{{item.demandDirection}}</div>
            <div class="remark">{{item.remarks}}</div>
          </div>
          <div class="msg-right">
            <img :src="item.demandImg" alt="">
          </div>
          <div class="msg-footer">
            <div class="tag">{{item.demandDirection}}</div>
            <div class="location">
              <i class="icondidian iconfont"></i>
              <span>{{item.demandArea}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <demand-mask-layer v-if="type_flag | dir_flag | area_flag" @click.native="type_flag = 0"></demand-mask-layer>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import TopSearch from '../../components/TopSearch'
  import DemandMaskLayer from '../../components/DemandMaskLayer'
  export default {
    name: "demand",
    data() {
      return {
        data: '',
        type_flag: 0,
        dir_flag: 0,
        area_flag: 0,
      }
    },
    components: {
      TopSearch,
      DemandMaskLayer
    },
    mounted() {
      this.showData(0, 0)
    },
    methods: {
      async showData(args, type) {
        await this.axios.get('/api/hope/a/demand/demand/listData').then(res => {
          this.data = res.data.list
          console.log(this.data)
          if (args) {
            this.type_flag = 0
            this.dir_flag = 0
            this.area_flag = 0
            let news_filter = this.$options.filters['dataFilter']
            this.data = news_filter(this.data, args, type)
            console.log(this.data, args, type)
          }

        })
        this.show()
      },
      show() {
        let scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          scrollY: true,
        })
      },
      goDetail(id){
        this.$router.push({
          name: 'demandDetail',
          params: {
            id: id
          }
        })
      },
    },
    filters: {
      dataFilter(data, avg, type) {
        let arr = []
        if (type == 'type') {
          data.forEach(item => {
            if (item.demandType == avg) {
              arr.push(item)
            }
          })
        } else if (type == 'dir') {
          data.forEach(item => {
            if (item.demandDirection == avg) {
              arr.push(item)
            }
          })
        } else if (type == 'area') {
          data.forEach(item => {
            if (item.demandArea == avg) {
              arr.push(item)
            }
          })
        }
        return arr
      }
    }
  }
</script>

<style lang="stylus">

  #demand
    .type
      height: 2rem
      display: flex
      text-align: center
      border-bottom: 5px solid #eee
      z-index 160

      .item
        flex 1
        font-size: 0.8rem
        line-height: 2rem
        position: relative
        .select
          width: 100%
          position: absolute
          text-align: center
          background-color: #fff
          z-index 80
          .select-item:hover
            background-color: #EEEEEE
    .wrapper
      overflow hidden
      position: fixed
      top: 6.4rem
      bottom: 3.5rem
      .msg
        padding: 1rem 0.5rem
        border-bottom: 5px solid #F4F4F4
        height: 6.5rem
        .msg-left
          display: inline-block
          width: 55%
          overflow hidden
          height: 5rem
          .title
            font-size: 0.6rem
            color: #50ACFF
            margin-bottom: 0.2rem
          .direction
            font-size: 0.5rem
            margin-bottom: 0.2rem
          .remark
            font-size: 0.5rem
        .msg-right
          display: inline-block
          width: 40%
          img
            display: inline-block
            height: 5rem
            width: 100%
        .msg-footer
          width: 95%
          margin-top: 0.4rem
          display: flex
          justify-content space-between
          padding-bottom: 0.6rem
          .tag
            padding: 0.3rem 0.5rem
            background-color: #EBEBEB
            color #8D8D8D
            font-size: 0.8rem
            border-radius 0.3rem
          .location
            color: #8D8D8D


</style>
