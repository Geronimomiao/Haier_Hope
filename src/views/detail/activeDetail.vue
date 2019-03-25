<template>
  <div id="active_detail">
    <title-header></title-header>
    <div class="msg" ref="msg">
      <div class="msg-content" v-for=" item in data ">
        <div class="msg-header">
          <div class="msg-title">{{ item.activityName }}</div>
          <div class="msg-time">
            <i class="iconshijian iconfont"></i>
            {{ item.activityStartTime }}
          </div>
        </div>
        <div class="msg-body" v-html="item.activityDesc"></div>
      </div>
    </div>
    <div class="sign-up">
      <el-button type="primary" round @click="open">我要报名</el-button>
    </div>
    <div @click="close">
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <mark-layer v-if="flag"></mark-layer>
      </transition>
    </div>
    <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
        <active-attend-form v-if="flag" :flag="flag" :id="this.$route.params.id" @close="close"></active-attend-form>
    </transition>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import TitleHeader from '../../components/TitleHeader'
  import MarkLayer from '../../components/MaskLayer'
  import ActiveAttendForm from '../../components/ActiveAttendForm'
  export default {
    name: "detail",
    data() {
      return {
        data: '',
        flag: 0
      }
    },
    components: {
      TitleHeader,
      MarkLayer,
      ActiveAttendForm
    },
    mounted() {
      this.showData()
    },
    methods: {

      async showData() {
        let id = this.$route.params.id
        await this.axios('/api/hope/a/activity/activity/listData', {params: {activityId: id}}).then(res => {
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
      close() {
        this.flag = 0
      },
      open() {
        this.flag = 1
      },
    }
  }
</script>

<style lang="stylus">

  #active_detail
    .msg
      position: fixed
      top: 2.6rem
      bottom: 0
      width: 100%
      z-index 30
      bottom: 3.5rem
      .msg-content
        width: 90%
        margin-left: 5%
        .msg-header
          text-align: center
          .msg-title
            font-size: 1.2rem
            padding: 1rem 0
          .msg-time
            padding-bottom: 0.4rem
            font-size: 0.8rem
            .iconfont
              font-size: 0.5rem



    .sign-up
      position: fixed
      width: 100%
      bottom: 0
      text-align: center
      background-color: #fff
      height: 3rem
      z-index 50
      line-height: 3rem
      .el-button.is-round
        border-radius 10px
        padding: 12px 30px
</style>
