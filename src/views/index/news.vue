<template>
  <div id="news">
    <top-search>
      <span slot="title">看资讯</span>
    </top-search>
    <div class="wrapper">
      <ul class="content">
        <li @click="getHots" :class="[(type==0)?'hover':'']">热门</li>
        <li @click="type=1" :class="[(type==1)?'hover':'']">行业政策</li>
        <li @click="type=2" :class="[(type==2)?'hover':'']">扶持政策</li>
        <li @click="type=3" :class="[(type==3)?'hover':'']">最新政策</li>
        <li @click="type=4" :class="[(type==4)?'hover':'']">行业热点</li>
        <li @click="type=5" :class="[(type==5)?'hover':'']">企业案例</li>
        <li @click="type=6" :class="[(type==6)?'hover':'']">行业新闻</li>
        <li @click="type=7" :class="[(type==7)?'hover':'']">前沿信息</li>
        <li @click="type=8" :class="[(type==8)?'hover':'']">技术新闻</li>
      </ul>
    </div>
    <div class="msg">

    </div>
  </div>
</template>

<script>
  import TopSearch from '../../components/TopSearch'

  export default {
    name: "news",
    components: {
      TopSearch
    },
    data() {
      return {
        type: 0,
        data: ''
      }
    },
    mounted() {
      this.getHots()
    },
    methods: {
      async getHots() {
        this.type = 0
        await this.axios.get('/api/hope/a/news/news/listData').then(res => {
          console.log(res.data)
          this.data = res.data.list
        })
      }
    }
  }
</script>

<style lang="stylus">
  @import "../../common/stylus/border.styl"
  #news
    .wrapper
      margin-top: 0.3rem
      border-5px(#EEEEEE)
      .content::-webkit-scrollbar
        width: 0 !important
        height: 0 !important
      .content
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        overflow: auto;
        padding-bottom: 0.6rem
        li
          flex: 1 0 auto;
          padding: 0 5px;
          line-height: 1.5rem
          font-size: 0.8rem

          &.hover
            color #408ED0
            &:after
              display: block
              content: ''
              width: 100%
              border-top: 2px solid #408ED0
</style>
