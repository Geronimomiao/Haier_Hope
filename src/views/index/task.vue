<template>
  <div id="task">
    <task-top-header></task-top-header>
    <task-header></task-header>
    <div class="warpper">
      <div class="item">
        <div class="title" @click="goForDemand">
          <span class="msg">需求推荐</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="container">
          <div class="content">
            <div class="text">
              <div class="text-title">寻找洗衣机杀菌新方案</div>
              <div class="text-content">寻找能够在水中发挥杀菌作用的新技术，能够和洗衣机产品相结合。</div>
            </div>
            <div class="img"></div>
          </div>
          <span class="tag">洗衣机</span>
        </div>
      </div>
      <div class="item">
        <div class="title" @click="goForTechnology">
          <span class="msg">技术推荐</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="container">
          <div class="content">
            <div class="text">
              <div class="text-title">寻找嵌入式冰箱创新设计团队</div>
              <div class="text-content">寻找嵌入式冰箱创新设计团队。</div>
            </div>
            <div class="img"></div>
          </div>
          <span class="tag">冰箱</span>
        </div>
      </div>
      <div class="item">
        <div class="title" @click="goForService">
          <span class="msg">服务推荐</span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="container">
          <div class="content">
            <div class="text">
              <div class="text-title">酒柜除湿-制冷系统改进方向</div>
              <div class="text-content">酒柜除湿-制冷系统改进方向。</div>
            </div>
            <div class="img"></div>
          </div>
          <span class="tag">酒柜</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TaskTopHeader from '../../components/TaskTopHeader'
  import TaskHeader from '../../components/TaskHeader'

  export default {
    name: "task",
    components: {
      TaskTopHeader,
      TaskHeader,
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
    }
  }
</script>

<style lang="stylus">

  #task
    .warpper
      display: flex
      flex-direction column
      overflow hidden
      .item
        background-color: #fff
        border-bottom: 10px solid #e7e7e7

        .title
          margin-top: 0.5rem
          margin-left: 0.3rem
          display flex
          align-items center

          .msg
            font-size: 0.7rem

        .container
          width: 90%
          margin-left: 5%
          position: relative

          .content
            height: 7rem
            display: flex

            .text
              font-size: 0.7rem
              width: 13rem

              .text-title
                margin: 0.4rem 0
                text-align: center

              .text-content
                color: #8D8D8D
                padding: 0.2rem
                font-size: 0.8rem
                text-indent 1.6rem

            .img
              background-image: url('http://wsmpage.cn/reddot/99a6b64a-1ec7-47cf-af29-1447a2cbdde7')
              height: 5rem
              width: 8rem
              display: inline-block
              background-size: cover

          .tag
            padding: 0.2rem 0.2rem
            background-color: #EBEBEB
            font-size: 0.8rem
            border-radius 0.3rem
            color #ABABAB
            position: absolute
            bottom: 0.5rem
            right: 0

</style>
