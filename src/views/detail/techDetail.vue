<template>
  <div id="tech_detail">
    <div class="tech-header">
      <div class="tech-header-top">
        <div class="back" @click="goback">
          <i class="el-icon-caret-left"></i>
        </div>
        <div class="fav">
          <i class="iconxin1 iconfont"></i>
          <span>关注</span>
        </div>
      </div>
      <div class="tech-header-body">
        <img :src="data.techImg" alt="">
        <div class="title">{{ data.techName }}</div>
      </div>
      <div class="tech-header-footer">
        <div class="item">
          <i class="iconwrench iconfont"></i>
          <span>技术方向</span>
        </div>
        <div class="item">
          <span class="tag">{{ data.techDirection }}</span>
        </div>
        <div class="item">
          <i class="iconyuedu iconfont"></i>
          <span>已有{{random}}人已读</span>
        </div>
      </div>
    </div>
    <div class="tech-desc">
      <side-title>
        <span slot="title">技术简介</span>
      </side-title>
      <div v-html="data.techAdvantage" class="content"></div>
    </div>
    <div class="tech-detail">
      <side-title>
        <span slot="title">技术描述</span>
      </side-title>
      <div v-html="data.techDesc" class="content"></div>
    </div>
    <div class="tech-footer">
      <div class="item">
        <i class="iconliuyan iconfont"></i>
        <span>留言</span>
      </div>
      <div class="item">
        <i class="iconfenxiang iconfont"></i>
        <span>分享</span>
      </div>
    </div>
  </div>
</template>

<script>
  import SideTitle from '../../components/SideTitle'
  export default {
    name: "techDetail",
    data() {
      return {
        data: ''
      }
    },
    components: {
      SideTitle
    },
    mounted() {
      this.showData()
    },
    computed: {
      random() {
        return Math.ceil(Math.random() * 1000);
      }
    },
    methods: {
      async showData() {
        let id = this.$route.params.id
        await this.axios('/api/hope/a/tech/tech/form.json', {params: {techId: id}}).then(res => {
          console.log(res.data.tech)
          this.data = res.data.tech
        })
      },
      goback() {
        this.$router.go(-1)
      }
    },
  }
</script>

<style lang="stylus">

  #tech_detail
    .tech-header
      padding: 0.5rem 0.8rem
      padding-bottom: 0
      border-bottom: 10px solid #f4f4f4

      .tech-header-top
        display: flex
        justify-content space-between
        .el-icon-caret-left
          z-index 1000
          position: absolute
      .tech-header-body
        margin-top: 1rem
        text-align: center

        img
          height: 8rem
          width: 70%
          border-radius 1rem

        .title
          margin-top: 0.6rem
          color: #6B6767

      .tech-header-footer
        padding: 0.5rem
        font-size: 0.8rem

        .item
          margin: 0.6rem 0
          &:nth-last-child(1)
            margin-bottom: 0
        .tag
          padding: 0.1rem 0.4rem
          background-color: #EBEBEB
          color: #929292
          border-radius 0.2rem

        i
          color: #44A7FF
          font-size: 1.2rem
          vertical-align middle


    .tech-desc, .tech-detail
      padding: 0.5rem 1rem
      border-bottom: 10px solid #f4f4f4
      .content
        width: 80%
        margin-left: 10%

    .tech-footer
      display: flex
      text-align: center
      padding: 0.8rem 0
      .item
        flex 1
        display: flex
        flex-direction column
        span
          font-size: 1.1rem
        i
          color: #0B91FF
          font-size: 1.6rem
          padding-bottom: 0.3rem
</style>
