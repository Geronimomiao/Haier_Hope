<template>
  <div id="demand">
    <top-search>
      <span slot="title">找需求</span>
    </top-search>
    <div class="type">
      <div class="item">需求类型</div>
      <div class="item">所属领域</div>
      <div class="item">所在地区</div>
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
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import TopSearch from '../../components/TopSearch'

  export default {
    name: "demand",
    data() {
      return {
        data: ''
      }
    },
    components: {
      TopSearch
    },
    mounted() {
      this.showData()
    },
    methods: {
      async showData() {
        await this.axios.get('/api/hope/a/demand/demand/listData').then(res => {
          this.data = res.data.list
          console.log(this.data)
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
      }
    },
  }
</script>

<style lang="stylus">

  #demand
    .type
      height: 2rem
      display: flex
      text-align: center
      border-bottom: 5px solid #eee
      z-index 50

      .item
        flex 1
        font-size: 0.8rem
        line-height: 2rem
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
          .location
            color: #8D8D8D


</style>
