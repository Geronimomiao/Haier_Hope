<template>
    <div id="nav_footer">
      <div class="item" :class="[(footerFlag==1)?'selected':'']" @click="task">
        <span class="el-icon-date"></span>
        <span>首页</span>
      </div>
      <div class="item" :class="[(footerFlag==2)?'selected':'']" @click="news">
        <span class="el-icon-view"></span>
        <span>咨讯</span>
      </div>
      <div class="item" :class="[(footerFlag==3)?'selected':'']" @click="activity">
        <span class="el-icon-share"></span>
        <span>活动</span>
      </div>
      <div class="item" :class="[(footerFlag==4)?'selected':'']" @click="home">
        <span class="el-icon-setting"></span>
        <span>我的</span>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "NavFooter",

    computed: {
      ...mapState(['footerFlag'])
    },
    methods: {
      task() {
        this.$router.push({path: '/'})
        this.$store.commit('updateFooterFlag', 1)
      },
      news() {
        this.$router.push({path: '/detail'})
        this.$store.commit('updateFooterFlag', 2)
      },
      activity() {
        this.$router.push({path: '/activity'})
        this.$store.commit('updateFooterFlag', 3)
      },
      home() {
        this.$router.push({path: '/home'})
        this.$store.commit('updateFooterFlag', 4)
      },
    },
  }
</script>

<style lang="stylus">

  #nav_footer
    position: absolute
    bottom: 0
    width: 100%
    height 3.5rem
    background-color #f5f5f5
    display flex
    z-index 100
    .item
      flex 1
      text-align: center
      line-height: 1.5rem
      padding-top: 0.2rem
      [class^=el-icon-]
        font-size: 1.5rem
      span
        display: block
    .selected
      color: #659ce6;


</style>
