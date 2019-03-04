<template>
  <div id="identity">
    <div class="header">身份认证</div>
    <side-title>
      <span slot="title">请选择身份</span>
    </side-title>
    <div class="select">
      <div class="option" >
        <div class="iconfont iconiconfontkeyan1"></div>
        <div class="msg">院校或科研院所</div>
        <el-radio v-model="radio" label="1"></el-radio>
      </div>
      <div class="option" >
        <div class="iconfont iconqiye"></div>
        <div class="msg">技术企业</div>
        <el-radio v-model="radio" label="2"></el-radio>
      </div>
      <div class="option">
        <div class="iconfont iconrencai"></div>
        <div class="msg">技术人才</div>
        <el-radio v-model="radio" label="3"></el-radio>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import SideTitle from '../components/SideTitle'
  export default {
    name: "identity",
    components: {
      SideTitle
    },
    data() {
      return {
        radio: '0'
      }
    },
    watch: {
      radio: function(val) {
        if (val == 1) {
          this.$router.push({path: '/identity/identityInstitution'})
        } else if (val == 2) {
          this.$router.push({path: '/identity/identityEnterprise'})
        } else if (val == 3) {
          this.$router.push({path: '/identity/identityTalent'})
        } else {
          this.$router.push({path: '/identity'})
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import "../common/stylus/border.styl"
  #identity
    .header
      height: 3rem
      line-height: 3rem
      text-align: center
      border-1px(rgba(7, 17, 27, 0.1))

    .select
      display: flex
      text-align: center
      padding-bottom: 1rem
      border-10px(rgba(7, 17, 27, 0.1))
      .option
        flex: 1
        .msg
          margin-top: 0.4rem
          margin-bottom: 0.8rem
          text-align: center
          font-size: 0.5rem
        [class^=iconfont]
          font-size: 2rem
        .el-radio__label
          display: none
</style>
