<template>
  <div id="demand_detail">
    <div class="detail-header">
      <i class="el-icon-caret-left" @click="goback"></i>
      <div class="detail-header-img">
        <img :src="data.demandImg" alt="">
      </div>
      <div class="detail-header-msg">
        <div class="msg">
          <div class="title">{{ data.demandName }}</div>
          <div class="attention">
            <div class="time">{{ data.updateDate | timeFilter }}</div>
            <div class="fav">
              <i class="iconxin1 iconfont"></i>
              <span>收藏</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-body">
      <div class="detail-body-info">
        <side-title>
          <span slot="title">项目描述</span>
        </side-title>
        <div class="desc info-body">
          <div class="item">需求类型: {{data.demandType}}</div>
          <div class="item">需求领域: {{data.demandDirection}}</div>
          <div class="item">合作方式: {{data.demandCooperation}}</div>
          <div class="item">所属地区: {{data.demandArea}}</div>
          <div class="item">研发经费: {{data.demandFunds}}</div>
          <div class="item">需求附件: <span>点击下载</span></div>
        </div>
      </div>
      <div class="detail-body-desc">
        <side-title>
          <span slot="title">项目简介</span>
        </side-title>
        <div class="desc" v-html="data.demandDesc"></div>
      </div>
      <div class="detail-body-contact">
        <side-title>
          <span slot="title">联系人信息</span>
        </side-title>
        <div class="desc info-body">
          <div class="item">联系人姓名: {{data.demandContacts}}</div>
          <div class="item">联系人电话: {{data.demandPhone}}</div>
          <div class="item">联系人邮箱: {{data.demandMail}}</div>
        </div>
      </div>
    </div>
    <div class="detail-footer">
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
    name: "demandDetail",
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
        console.log(id)
        await this.axios('/api/hope/a/demand/demand/form.json', {params: {demandId: id}}).then(res => {
          console.log(res.data.demand)
          this.data = res.data.demand
        })
      },
      goback() {
        this.$router.go(-1)
      }
    },
    filters: {
      timeFilter(value) {
        return value.split(/\s+/)[0]
      }
    }
  }
</script>

<style lang="stylus">
  @import "../../common/stylus/border.styl"
  #demand_detail
    .detail-header
      padding: 1.6rem 2.4rem
      padding-bottom: 1rem
      border-bottom: 4px solid #EFEFEF
      .el-icon-caret-left
        position: absolute
        top: 0.6rem
        left: 0.7rem
        font-size: 1.2rem
        padding: 0.3rem
      .detail-header-img
        width: 37%
        display: inline-block
        img
          width: 100%
          height: 5rem
          border-radius 5%
      .detail-header-msg
        vertical-align: top
        margin-left: 3%

        width: 55%
        display: inline-block
        .msg
          height: 5rem
          position: relative
          .title
            font-size: 0.6rem
          .attention
            position: absolute
            bottom: 0
            right: 5%
            .time
              font-size: 0.5rem
            .fav
              span, i
                font-size: 0.5rem
    .detail-body
      .info-body
        .item
          font-size: 0.8rem
          padding 0.3rem 0
          span
           color #67D667
      .desc
        padding: 0.4rem 2.4rem
        padding-bottom: 1rem
        border-bottom: 4px solid #EFEFEF


    .detail-footer
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
