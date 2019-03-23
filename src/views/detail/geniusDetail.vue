<template>
  <div id="genius_detail">
    <div class="header">
      <div class="back" @click="goback">
        <i class="el-icon-caret-left"></i>
      </div>
      <div class="fav">
        <i class="iconfont iconxin1"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="info">
      <div class="img">
        <img :src="data.userId" alt="">
      </div>
      <div class="container">
        <div class="title">{{data.expertContact}}</div>
        <div class="footer">
          <div class="intro">{{data.expertType}}</div>
          <div class="score">
            <el-rate
              v-model="score"
              disabled
              text-color="#ff9900"
            >
            </el-rate>
          </div>
        </div>
      </div>
    </div>
    <div class="fuc">
      <div class="item">
        <div class="icon">
          <i class="iconfont iconzaixianzixun"></i>
        </div>
        <div class="msg">在线咨询</div>
      </div>
      <div class="item" @click="type = 2">
        <div class="icon">
          <i class="iconfont icontiwen"></i>
        </div>
        <div class="msg">提问题</div>
      </div>
      <div class="item" @click="type = 1">
        <div class="icon">
          <i class="iconfont iconteam"></i>
        </div>
        <div class="msg">线下约见</div>
      </div>
    </div>

    <div v-if="type == 0">
      <div class="text">
        <div class="item">
          <i class="icon4 iconfont"></i>
          <span>专家认证</span>
        </div>
        <div class="item">
          <i class="iconshijian iconfont"></i>
          <span>平均响应时长: 10分钟</span>
        </div>
      </div>
      <div class="evalution">
        <div class="title">
          擅长领域
        </div>
        <div class="tag">
          <span>{{ data.expertResearchField }}</span>
        </div>
      </div>
      <div class="pro-info">
        <div class="title">个人简介</div>
        <div class="msg">{{ data.expertIntroduce }}</div>
      </div>
    </div>

    <div v-if="type == 1">
      <div class="text">
        <div class="item">
          <i class="icon4 iconfont"></i>
          <span>约见量：37</span>
        </div>
        <div class="item">
          <i class="iconshijian iconfont"></i>
          <span>关注量: 32</span>
        </div>

      </div>
      <div class="meet-info">
        <div class="item">
          <el-input placeholder="请输入电话号码" v-model="input3">
            <template slot="prepend">
              <i class="el-icon-phone"></i>
              <sapn>预约电话</sapn>
            </template>
          </el-input>
        </div>
        <div class="item">
          <el-input placeholder="请输入预约时间" v-model="input3">
            <template slot="prepend">
              <i class="iconshijian iconfont"></i>
              <sapn>预约时间</sapn>
            </template>
          </el-input>
        </div>
        <div class="item">
          <el-input placeholder="请输入预约地址" v-model="input3">
            <template slot="prepend">
              <i class="icondidian iconfont"></i>
              <sapn>预约地址</sapn>
            </template>
          </el-input>
        </div>
        <div class="desc">
          问题描述：
          <div style="margin: 20px 0;"></div>
          <el-input
            type="textarea"
            :autosize="{ minRows: 7, maxRows: 7}"
            placeholder="请输入内容"
            v-model="textarea3">
          </el-input>
        </div>
        <div class="footer">
          <el-button type="primary">立即预约</el-button>
        </div>
      </div>
    </div>

    <div v-if="type == 2">
      <div class="meet-info">
        <div class="item">
          <el-input placeholder="请输入问题名称" v-model="input3">
            <template slot="prepend">
              <i class="icontiwen iconfont"></i>
              <sapn>问题名称</sapn>
            </template>
          </el-input>
        </div>
        <div class="item">
          <el-input placeholder="请输入问题所属领域" v-model="input3">
            <template slot="prepend">
              <i class="icontags iconfont"></i>
              <sapn>所属领域</sapn>
            </template>
          </el-input>
        </div>
        <div class="item">
          <el-input placeholder="请输入问题标签" v-model="input3">
            <template slot="prepend">
              <i class="iconquestion-circle iconfont"></i>
              <sapn>问题标签</sapn>
            </template>
          </el-input>
        </div>
        <div class="desc">
          问题描述：
          <div style="margin: 20px 0;"></div>
          <el-input
            type="textarea"
            :autosize="{ minRows: 7, maxRows: 7}"
            placeholder="请输入内容"
            v-model="textarea3">
          </el-input>
        </div>
        <div class="footer">
          <el-button type="primary">立即发问</el-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: "geniusDetail",
    data() {
      return {
        data: '',
        score: 4.1,
        type: 0,
        name: ''
      }
    },

    mounted() {
      this.showData()
    },
    methods: {
      async showData() {
        let id = this.$route.params.id
        await this.axios('/api/hope/a/expert/expert/form.json', {params: {expertId: id}}).then(res => {
          console.log(res.data.expert)
          this.data = res.data.expert
        })
      },
      goback() {
        this.$router.go(-1)
      }
    },
  }
</script>

<style lang="stylus">

  #genius_detail
    padding: 0.5rem
    .header
      display: flex
      justify-content space-between
      .fav
        i
          color: #3BA6FF;
    .info
      padding: 1rem 1.2rem
      position: relative
      .img
        position: absolute
        vertical-align top
        display: inline-block
        img
          height: 3rem
          width: 3rem
          border-radius 50%
      .container
        margin-left: 3.4rem
        font-size: 0.9rem
        .title
          margin-top: 0.3rem
          margin-bottom: 0.8rem
        .footer
          display: flex
          justify-content space-between



    .fuc
      display: flex
      height 3rem
      border-top: 1px solid #f0f0f0
      border-bottom: 1px solid #f0f0f0
      padding 0.4rem 0
      .item
        text-align: center
        flex 1
        border-right: 1px solid #f0f0f0
        &:nth-last-child(1)
          border none
        .icon
          i
            font-size: 2rem
            color: #43A7FF
        .msg
          margin-top: 0.2rem

    .text
      margin-top: 0.8rem
      padding-bottom: 0.8rem
      display: flex
      justify-content space-between

      .item
        i
          color: #3BA6FF

    .evalution
      border-top: 1px solid #f0f0f0
      padding-bottom: 0.8rem
      .title
        margin-top: 0.5rem
      .tag
        margin-left: 0.5rem
        margin-top: 0.7rem
        font-size: 0.6rem
        span
          padding: 0.2rem
          border-radius 0.2rem
          background-color: #EBEBEB

    .pro-info
      border-top: 1px solid #f0f0f0
      .title
        margin-top: 0.5rem
      .msg
        color: #959798
        line-height: 0.9rem
        text-indent 1.4rem
        margin-top: 0.5rem
        font-size: 0.7rem



    .meet-info
      border-top: 1px solid #f0f0f0
      .item
        margin-top: 0.9rem
        i
          color: #3BA6FF
        .el-input-group__append, .el-input-group__prepend
          padding: 0 10px
          background-color: #fff
          border none
        .el-input__inner
          height: 45px
        .el-input-group--prepend .el-input__inner, .el-input-group__append
          border-radius 4px
    .desc
      border-top: 1px dashed #f0f0f0
      margin-top: 0.9rem
      padding-top: 0.9rem
    .footer
      margin-top: 20px
      text-align: center

</style>
