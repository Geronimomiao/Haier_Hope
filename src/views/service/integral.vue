<template>
  <div id="integral">
    <back-header-white>
      <span slot="title">我的积分</span>
    </back-header-white>
    <div class="banner">
      <div class="item">
        <div class="text">总积分: {{ score }}</div>
      </div>
    </div>
    <div class="exchange">
      <div class="container">
        <el-form :inline="true">
          <el-form-item label="兑换:">
            <el-input v-model="name" placeholder="0"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">全部</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="submit">
      <el-button type="primary">确认兑换</el-button>
    </div>
    <div class="tip">
      <side-title>
        <span slot="title">注意事项</span>
      </side-title>
      <div class="msg">
        <div class="item"><i class="el-icon-info"></i> 100积分 = 1币</div>
        <div class="item"><i class="el-icon-info"></i> 100积分其兑换，且只能以100整数倍数进行兑换</div>
        <div class="item"><i class="el-icon-info"></i> 积分兑换后存入钱包余额中,可用于其他平台消费</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import BackHeaderWhite from '../../components/BackHeaderWhite'
  import SideTitle from '../../components/SideTitle'
  export default {
    name: "integral",
    data() {
      return {
        name: ''
      }
    },
    computed: {
      ...mapState(['score'])
    },
    components: {
      BackHeaderWhite,
      SideTitle,
    }
  }
</script>

<style lang="stylus">
  #integral
    .banner
      height: 8rem
      background-color: #648FAF
      border-radius: 0.5rem
      display: flex
      justify-content: center
      padding: 0.5rem 0
      margin: 0 0.2rem
      margin-top: 0.8rem
      .item
        width: 50%
        background-color: #fff
        border-radius 50%
        border 0.2rem solid #C8CFC1
        display: flex
        justify-content: center
        align-items center

        .text
          font-size: 2rem

    .exchange
      position: relative
      margin-top: 1rem
      height: 3rem
      background-color: #fff
      padding: 0 1rem
      padding-bottom: 0.5rem
      @media screen and (max-width: 370px)
        padding: 0
      .container
        position: absolute
        top: 70%;
        transform: translate(10%, -50%);
        @media screen and (max-width: 370px)
          transform: translate(6%, -50%);
        .el-button
          padding: 8px 10px
        .el-input__inner
          height: 2rem
    .submit
      margin-top: 1rem
      height: 6rem
      background-color: #fff
      display: flex
      align-items center
      justify-content center

    .tip
      padding-top: 0.5rem
      margin-top: 1rem
      height: 13rem
      background-color: #fff
      .msg
        padding: 0 2rem
        display: flex
        flex-direction column
        .item
          flex 1
          padding-top: 0.8rem
          line-height: 1.2rem
</style>
