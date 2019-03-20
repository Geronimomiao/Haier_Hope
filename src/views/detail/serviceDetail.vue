<template>
  <div id="service_detail">
    <div class="service-header">
      <div class="service-header-top">
        <div class="back" @click="goback">
          <i class="el-icon-caret-left"></i>
        </div>
        <div class="fav">
          <i class="iconxin1 iconfont"></i>
          <span>关注</span>
        </div>
      </div>
      <div class="service-header-body">
        <img :src="data.companyLogo" alt="">
        <div class="title">{{ data.companyName }}</div>
      </div>
    </div>
    <div class="service-desc">
      <side-title>
        <span slot="title">公司描述</span>
      </side-title>
      <div class="content desc">
        <div class="item">
          <span class="name">行业：</span>
          <span class="value">{{ data.companyBusiness }}</span>
        </div>
        <div class="item">
          <span class="name">地点：</span>
          <span class="value">{{ data.companyArea }}</span>
        </div>
        <div class="item">
          <span class="name">联系人：</span>
          <span class="value">{{ data.companyContactsPerson }}</span>
        </div>
        <div class="item">
          <span class="name">公司电话：</span>
          <span class="value">{{ data.companyPhone }}</span>
        </div>
        <div class="item">
          <span class="name">公司邮箱：</span>
          <span class="value">{{ data.companyMail }}</span>
        </div>
        <div class="item"></div>
      </div>
    </div>
    <div class="service-detail">
      <side-title>
        <span slot="title">公司简介</span>
      </side-title>
      <div v-html="data.companyDesc" class="content"></div>
    </div>
    <div class="service-footer">
      <div class="item">
        <i class="iconzaixianzixun iconfont"></i>
        <span>资讯</span>
      </div>
      <div class="item">
        <i class="iconliuyan iconfont"></i>
        <span>留言</span>
      </div>
    </div>
  </div>
</template>

<script>
  import SideTitle from '../../components/SideTitle'

  export default {
    name: "serviceDetail",
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
    methods: {
      async showData() {
        let id = this.$route.params.id
        await this.axios('/api/hope/a/service/serviceCompany/form.json', {params: {companyId: id}}).then(res => {
          console.log(res.data)
          this.data = res.data.serviceCompany
        })
      },
      goback() {
        this.$router.go(-1)
      }
    },
  }
</script>

<style lang="stylus">

  #service_detail
    .service-header
      padding: 0.5rem 0.8rem
      padding-bottom: 0
      border-bottom: 10px solid #f4f4f4

      .service-header-top
        display: flex
        justify-content space-between

        .el-icon-caret-left
          z-index 1000
          position: absolute

      .service-header-body
        margin-top: 1rem
        text-align: center

        img
          height: 8rem
          width: 70%
          border-radius 1rem

        .title
          margin-top: 0.6rem
          margin-bottom: 0.8rem
          color: #6B6767


    .service-desc, .service-detail
      padding: 0.5rem 1rem
      border-bottom: 10px solid #f4f4f4

      .content
        width: 80%
        margin-left: 10%
      .desc
        .item
          font-size: 0.9rem
          padding: 0.2rem 0
          .name
            display: inline-block
            width: 5rem

    .service-footer
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
