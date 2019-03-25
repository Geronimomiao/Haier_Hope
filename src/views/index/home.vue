<template>
  <div id="home">
    <div class="user-header">我的</div>
    <div class="user-info" @click="setting">
      <div class="avatar"></div>
      <span class="nick-name">内测人员</span>
      <i class="el-icon-arrow-right icon-arrow"></i>
    </div>
    <div class="user-msg">
      <div class="item"  @click="change">
        <div class="iconfont icontags"></div>
        <div class="text" v-if="record">签到</div>
        <div class="text" v-else>已签</div>
      </div>
      <div class="item" @click="integral">
        <div class="iconfont icondingyue"></div>
        <div class="text">积分</div>
      </div>
      <div class="item" @click="wallet">
        <div class="iconfont iconqianbao"></div>
        <div class="text">钱包</div>
      </div>
    </div>
    <div class="user-service">
      <div class="title">我的服务</div>
      <div class="func">
        <div class="item" @click="demand">
          <div class="iconfont iconshuifeichaxun"></div>
          <div class="text">我的需求</div>
        </div>
        <div class="item">
          <div class="iconfont iconzaixianzixun" @click="news"></div>
          <div class="text">我的资讯</div>
        </div>
        <div class="item" @click="attention">
          <div class="iconfont iconteam"></div>
          <div class="text">我的关注</div>
        </div>
      </div>
      <div class="func">
        <div class="item">
          <div class="iconfont iconshijian" @click="activity"></div>
          <div class="text">我的活动</div>
        </div>
        <div class="item" @click="message">
          <div class="iconfont iconliuyan"></div>
          <div class="text">我的消息</div>
        </div>
        <div class="item" @click="subscription">
          <div class="iconfont iconlianjie"></div>
          <div class="text">我的订阅</div>
        </div>
      </div>
    </div>
    <div class="user-func">
      <div class="item" @click="setting">
        <span class="func">个人资料</span>
        <i class="el-icon-arrow-right icon-arrow"></i>
      </div>
      <div class="item" @click="identity">
        <span class="func">身份认证</span>
        <i class="el-icon-arrow-right icon-arrow"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "home",
    computed: {
      ...mapState(['record'])
    },
    methods: {
      identity() {
        this.$router.push({path: '/identity'})
      },
      integral() {
        this.$router.push({path: '/service/integral'})
      },
      wallet() {
        this.$router.push({path: '/service/wallet'})
      },
      setting() {
        this.$router.push({path: '/service/setting'})
      },
      message() {
        this.$router.push({path: '/service/message'})
      },
      attention() {
        this.$router.push({path: '/service/attention'})
      },
      activity() {
        this.$router.push({path: '/service/activity'})
      },
      demand() {
        this.$router.push({path: '/service/demand'})
      },
      news() {
        this.$router.push({path: '/service/news'})
      },
      subscription() {
        this.$router.push({path: '/service/subscription'})
      },
      change() {
        if (!this.record) { return }
        this.$store.commit('increaseScore')
        this.$message({
          showClose: true,
          message: '签到成功 积分加五',
          type: 'success'
        });
      },
    }
  }
</script>

<style lang="stylus">
  @import "../../common/stylus/border.styl"
  #home
    height: 100vh
    background-color: rgba(7, 17, 27, 0.1)

    [class^="user-"]
      background-color: #fff

    .user-header
      text-align: center
      height: 3rem
      line-height: 3rem
      border-1px(rgba(7, 17, 27, 0.1))

    .user-info
      height 5rem
      position: relative;

      .avatar
        background-image url("http://wsmpage.cn/yan/zanzibar%20sunset.jpg")
        height: 3.5rem
        width: 3.5rem
        border-radius 3.5rem
        display: inline-block
        background-size: cover
        position: absolute;
        top: 50%;
        transform: translate(20%, -50%);

      .nick-name
        line-height: 5rem
        margin-left: 5rem

      .icon-arrow
        position: absolute;
        right: 0
        top: 50%;
        transform: translate(-150%, -50%);

    .user-msg
      margin-top: 1.7rem
      height: 5rem
      display: flex
      text-align: center

      .item
        flex 1
        padding-top: 0.8rem

        [class^="iconfont"]
          font-size: 2.2rem
          margin-bottom: 0.2rem

    .user-service
      margin-top: 1.7rem
      height: 11.5rem
      .title
        padding-top: 0.8rem
        padding-left: 0.8rem
      .func
        display: flex
        text-align: center
        .item
          flex 1
          padding-top: 0.8rem
          [class^="iconfont"]
            font-size: 2.2rem
            margin-bottom: 0.2rem
    .user-func
      margin-top: 1.7rem
      height: 6rem
      display: flex
      flex-direction: column
      .item
        flex: 1
        line-height: 3rem
        position: relative
        border-1px(rgba(7, 17, 27, 0.1))
        &:nth-last-child(1)
          border-1px(#fff)
        .func
          padding-top: 0.8rem
          padding-left: 0.8rem
        .icon-arrow
          position: absolute;
          right: 0
          top: 50%;
          transform: translate(-150%, -50%);


</style>
