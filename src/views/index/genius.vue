<template>
  <div id="genius">
    <top-search>
      <span slot="title">找专家</span>
    </top-search>
    <div class="type">
      <div class="item">专家类型</div>
      <div class="item">研究领域</div>
      <div class="item">所在地区</div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="wrapper-content">
        <div class="msg" v-for="item in data" @click="goDetail(item.id)">
          <div class="img">
            <img :src="item.userId" alt="">
          </div>
          <div class="main-msg">
            <div class="title">{{ item.expertTitle }}</div>
            <div class="research">领域: {{ item.expertResearchField }}</div>
            <div class="remark">简介: {{ item.expertIntroduce }}</div>
            <div class="evaluation">
              <div class="score">
                <el-rate
                  v-model="score"
                  disabled
                  show-score
                  text-color="#ff9900"
                >
                </el-rate>
              </div>
              <div class="location">
                <i class="icondidian iconfont"></i><!--
             --><span>{{ item.expertAddress }}</span>
              </div>
            </div>
            <div class="footer">
              <div class="tag"></div>
              <div class="location"></div>
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
    name: "genius",
    data() {
      return {
        data: '',
        score: 4.1
      }
    },
    components: {
      TopSearch
    },
    computed: {
      random() {
        return Math.ceil(Math.random() * 5);
      }
    },
    mounted() {
      this.showData()
    },
    methods: {
      async showData() {
        await this.axios.get('/api/hope/a/expert/expert/listData').then(res => {
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
      goDetail(id) {
        this.$router.push({
          name: 'geniusDetail',
          params: {
            id: id
          }
        })
      }
    },
  }
</script>

<style lang="stylus">

  #genius
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
      width: 100%
      overflow hidden
      position: fixed
      top: 6.4rem
      bottom: 3.5rem

      .msg
        padding: 1rem 0.5rem
        border-bottom: 5px solid #F4F4F4
        height: 6.5rem
        position: relative
        padding-bottom: 0.2rem

        .img
          position: absolute

          img
            width: 4rem
            height: 4rem
            border-radius 50%

        .main-msg

          height: 100%
          margin-left: 4.5rem

          .title, .research
            font-size: 0.8rem
            color: #3f3f42
            margin-bottom: 0.4rem

          .remark
            text-overflow: ellipsis;
            font-size: 0.8rem
            height: 2.3rem
            overflow hidden
            color #8C8C8C

          .evaluation
            display: flex
            justify-content space-between
            margin: 0.2rem 0
            .location
              font-size: 0.8rem
              i
                color #43A7FF





</style>
