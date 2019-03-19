<template>
  <div id="technology">
    <top-search>
      <span slot="title">找技术</span>
    </top-search>
    <div class="type">
      <div class="item" :class="[(flag==1)?'selected':'']" @click="flag=1">所有技术</div>
      <div class="item" :class="[(flag==2)?'selected':'']" @click="flag=2">技术专题</div>
      <div class="item" :class="[(flag==3)?'selected':'']" @click="flag=3">专利成果</div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="wrapper-content">
        <div class="msg" v-for="item in data" @click="goDetail(item.id)">
          <div class="msg-left">
            <div class="title">{{item.techDirection}}</div>
            <div class="direction">领域：{{item.tags[0]}}</div>
            <div class="remark">{{item.remarks}}</div>
          </div>
          <div class="msg-right">
            <img :src="item.techImg" alt="">
          </div>
          <div class="msg-footer">
            <div class="tag">{{item.tags[0]}}</div>
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
    name: "technology",
    data() {
      return {
        flag: 1,
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
        await this.axios.get('/api/hope/a/tech/tech/listData').then(res => {
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
          name: 'techDetail',
          params: {
            id: id
          }
        })
      }
    },
  }
</script>

<style lang="stylus">

  #technology
    .type
      height: 2rem
      display: flex
      text-align: center
      border-bottom: 5px solid #eee
      z-index 50
      .selected
        color: #43A7FF
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
            border-radius 0.3rem
            padding: 0.3rem 0.5rem
            background-color: #EBEBEB
            color #8D8D8D
            font-size: 0.8rem
          .location
            color: #8D8D8D



</style>
