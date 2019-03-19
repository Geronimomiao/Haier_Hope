<template>
  <div id="news">
    <top-search>
      <span slot="title">看资讯</span>
    </top-search>
    <div class="wrapper">
      <ul class="content">
        <li @click="getData(0, '')" :class="[(type==0)?'hover':'']">热门</li>
        <li @click="getData(1, '行业政策')" :class="[(type==1)?'hover':'']">行业政策</li>
        <li @click="getData(2, '扶持政策')" :class="[(type==2)?'hover':'']">扶持政策</li>
        <li @click="getData(3, '最新政策')" :class="[(type==3)?'hover':'']">最新政策</li>
        <li @click="getData(4, '行业热点')" :class="[(type==4)?'hover':'']">行业热点</li>
        <li @click="getData(5, '企业案例')" :class="[(type==5)?'hover':'']">企业案例</li>
        <li @click="getData(6, '行业新闻')" :class="[(type==6)?'hover':'']">行业新闻</li>
        <li @click="getData(7, '前沿信息')" :class="[(type==7)?'hover':'']">前沿信息</li>
        <li @click="getData(8, '技术新闻')" :class="[(type==8)?'hover':'']">技术新闻</li>
      </ul>
    </div>
    <div class="msg" ref="msg">
      <div class="msg-content">
        <div class="item" v-for="item in data" @click="goDetail(item.id)">
          <div class="container">
            <el-row :gutter="20">
              <el-col :span="12" :offset="2">
                <div class="item-title">{{item.newsName}}</div>
              </el-col>
              <el-col :span="8" :offset="1">
                <div class="item-img">
                  <img :src="item.newsImg" alt="">
                </div>
              </el-col>
            </el-row>
            <div class="remarks">
              {{item.remarks}}
            </div>
            <el-row :gutter="20">
              <el-col :span="12" :offset="2">
                <div class="item-time">
                  {{item.updateDate}}
                </div>
              </el-col>
              <el-col :span="6" :offset="3">
                <div class="tag">
                  {{item.newsTrade}}
                </div>
              </el-col>
            </el-row>
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
      this.getData(0, '')
    },
    methods: {
      async getData(type, value) {
        this.type = type
        await this.axios.get('/api/hope/a/news/news/listData',  {params: {newsType: value}}).then(res => {
          console.log(res.data)
          this.data = res.data.list
        })
        this.show()
      },
      show() {
        let scroll = new BScroll(this.$refs.msg, {
          click: true,
          scrollY: true,
        })
      },
      goDetail(id){
        this.$router.push({
          name: 'newsDetail',
          params: {
            id: id
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  @import "../../common/stylus/border.styl"
  #news
    .wrapper
      z-index 50
      padding-top: 0.3rem
      border-5px(#EEEEEE)
      background-color: #fff
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

    .msg
      position: fixed
      bottom: 3.5rem
      top: 6.5rem
      z-index 30
      width: 100%
      .item
        border-bottom: 5px solid #eee
        .container
          margin: 0.6rem 0
          .remarks
            margin: 0.6rem 0
            width: 80%
            margin-left: 10%
            font-size: 0.5rem
            color #8F8F8F
            text-align: center
            margin-top: 0
          .item-title
            font-size: 1rem
            margin-top: 0.3rem
          .item-img
            img
              display: inline-block
              width: 6rem
              height: 4rem
              border-radius 0.5rem
              margin-bottom: 0.3rem
          .item-time, .tag
            font-size: 0.6rem
            color: #8D8D8D
          .tag
            background-color: #fff
            padding: 0
</style>
