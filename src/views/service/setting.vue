<template>
  <div id="setting">
    <setting-header v-if="flag==0"></setting-header>
    <setting-header-editor v-if="flag==1"></setting-header-editor>
    <div class="base-info">
      <div class="info">
        <div class="info-type">姓名</div>
        <div class="info-value">Lorem</div>
        <i class="el-icon-caret-right"></i>
      </div>
      <div class="info">
        <div class="info-type">性别</div>
        <div class="info-value">男</div>
        <i class="el-icon-caret-right"></i>
      </div>
      <div class="info">
        <div class="info-type">年龄</div>
        <div class="info-value">21</div>
        <i class="el-icon-caret-right"></i>
      </div>
      <div class="info">
        <div class="info-type">行业</div>
        <div class="info-value">人工智能</div>
        <i class="el-icon-caret-right"></i>
      </div>
      <div class="info">
        <div class="info-type">邮箱</div>
        <div class="info-value">10*****2@qq.com</div>
        <i class="el-icon-caret-right"></i>
      </div>
    </div>
    <div class="introduction">
      <div class="title">
        <div class="info">个人简介</div>
      </div>
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur, delectus dolore doloremque enim est eveniet, facere magnam magni maiores minima mollitia nulla perferendis perspiciatis quam, temporibus voluptas voluptatem.
      </div>
    </div>
    <div class="sub" v-if="flag==1" @click="confirm">
      <el-button round>确认修改</el-button>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  import SettingHeader from '../../components/SettingHeader'
  import SettingHeaderEditor from '../../components/SettingHeaderEditor'

  export default {
    name: "setting",
    data() {
      return {}
    },
    components: {
      SettingHeader,
      SettingHeaderEditor,
    },
    computed: {
      ...mapState(['flag'])
    },
    methods: {
      confirm() {
        this.$notify({
          title: '成功',
          message: '信息修改成功',
          type: 'success',
          duration: 500
        });
        this.$store.commit('updateFlag', 0)
      },
    }
  }
</script>

<style lang="stylus">
  @import "../../common/stylus/border.styl"
  #setting
    .delay
      animation-delay: 1s
    .base-info
      height: auto
      background-color: #fff
      border-bottom: 10px solid #E7E7E7
      .info
        position: relative
        height: 3rem
        border-1px(#E7E7E7)
        &:nth-last-child(1)
          border-1px(#fff)
        .info-type
          position: absolute
          top: 50%
          transform translate(58%, -50%)
        .info-value
          position: absolute
          top: 50%
          right: 0
          transform translate(-3.2rem, -50%)
        .el-icon-caret-right
          position: absolute
          top: 50%
          right: 0
          transform translate(-100%, -50%)
    .introduction
      height: 11rem
      background-color: #fff
      border-10px(#E7E7E7)
      .title
        position: relative
        height: 2rem
        border-1px(#E7E7E7)
        .info
          position: absolute
          top: 0
          transform translate(10%, 50%)
      .content
        padding: 1rem 0.5rem
        font-size: 0.9rem
        text-indent: 2em
        white-space:normal
    .sub
      text-align: center
      background-color: #E7E7E7
      border-bottom: 10px solid #E7E7E7

</style>
