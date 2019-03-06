<template>
  <div id="wallet">
    <back-header-white>
      <span slot="title">我的钱包</span>
    </back-header-white>
    <div class="banner">
      <div class="title">
        Hope余额(元)
      </div>
      <div class="item">
        ¥1000
      </div>
    </div>
    <div class="func">
      <div class="item">
        <i class="el-icon-goods"></i>
        <div class="msg">充值</div>
      </div>
      <div class="line"></div>
      <div class="item">
        <i class="el-icon-sold-out"></i>
        <div class="msg">提现</div>
      </div>
    </div>
    <div class="option">
      <div class="item">
        <span class="o-func">我的支付包</span>
        <i class="el-icon-arrow-right icon-arrow"></i>
      </div>
      <div class="item">
        <span class="o-func">我的微信</span>
        <i class="el-icon-arrow-right icon-arrow"></i>
      </div>
      <div class="item">
        <span class="o-func">账户明细</span>
        <i class="el-icon-arrow-right icon-arrow"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import BackHeaderWhite from '../../components/BackHeaderWhite'
  import SideTitle from '../../components/SideTitle'
  export default {
    name: "wallet",
    data() {
      return {
        name: ''
      }
    },
    components: {
      BackHeaderWhite,
      SideTitle,
    }
  }
</script>

<style lang="stylus">
  @import "../../common/stylus/border.styl"
  #wallet
    .banner
      height: 8rem
      background-color: #534E4E
      border-radius: 0.8rem
      display: flex
      justify-content: center
      align-items center
      padding: 0.5rem 0
      margin: 0 0.2rem
      margin-top: 0.8rem
      position: relative
      .title
        position: absolute
        left: 0.8rem
        top: 0.5rem
        color: #fff
      .item
        color: #fff
        font-size: 3rem


    .func
      display: flex
      height: 3rem
      margin-top: 0.8rem
      background-color: #fff
      .line
        transform: translate(0, 8%);
        height 84%
        width: 2px
        background-color: #E1E1E1
      .item
        flex: 1
        display: flex
        justify-content center
        align-items center
        font-size: 1.3rem
        i
          margin-right: 0.5rem


    .option
      margin-top: 1.7rem
      display: flex
      flex-direction: column
      background-color: #fff
      .item
        flex: 1
        line-height: 3rem
        position: relative
        border-1px(rgba(7, 17, 27, 0.1))
        .o-func
          padding-top: 0.8rem
          padding-left: 0.8rem
        .icon-arrow
          position: absolute;
          right: 0
          top: 50%;
          transform: translate(-150%, -50%);
</style>
