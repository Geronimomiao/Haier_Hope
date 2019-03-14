<template>
  <div id="detail">
    <title-header></title-header>
    <div class="msg" ref="msg">
      <div class="msg-content" v-for=" item in data ">
        <div class="title">{{ item.newsName }}</div>
        <div class="tag">
          <span>{{ item.newsTrade }}</span>
          <span>{{ item.newsType }}</span>
        </div>
        <div v-html="item.newsContent" class="msg-text"></div>
        <div class="msg-footer">
          <el-button type="primary">有帮助(11)</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import TitleHeader from '../../components/TitleHeader'

  export default {
    name: "detail",
    data() {
      return {
        data: ''
      }
    },
    components: {
      TitleHeader,
    },
    mounted() {
      this.showData()
    },
    methods: {
      async showData() {
        let id = this.$route.params.id
        await this.axios('/api/hope/a/news/news/listData', {params: {newsId: id}}).then(res => {
          console.log(res.data.list)
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
    }
  }
</script>

<style lang="stylus">

  #detail
    .msg
      position: fixed
      top: 2.6rem
      bottom: 0
      width: 100%
      z-index 30

      .msg-content
        width: 90%
        margin-left: 5%

        .title
          font-size: 1.5rem
          margin-top: 2rem
          margin-bottom: 1rem

        .tag
          font-size: 0.8rem
          padding-bottom: 0.5rem
          border-bottom: 1px solid #878787

          span
            background-color: #EBEBEB
            color: #ADADAD
            border-radius 1rem
            padding: 0.1rem 0.5rem
            margin-right: 0.5rem

        .msg-text
          margin-top: 0.2rem

        .msg-footer
          padding: 0.5rem 0
          display: flex
          flex-direction row-reverse


</style>
