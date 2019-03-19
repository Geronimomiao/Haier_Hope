<template>
  <div id="activity">
    <top-search>
      <span slot="title">看活动</span>
    </top-search>
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li @click="getSpecify(0, '')" :class="[(type==0)?'hover':'']">全部</li>
        <li @click="getSpecify(1, '创新路演')" :class="[(type==1)?'hover':'']">创新路演</li>
        <li @click="getSpecify(2, '展会论坛')" :class="[(type==2)?'hover':'']">展会论坛</li>
        <li @click="getSpecify(3, '互动沙龙')" :class="[(type==3)?'hover':'']">互动沙龙</li>
        <li @click="getSpecify(4, '培训讲座')" :class="[(type==4)?'hover':'']">培训讲座</li>
        <li @click="getSpecify(5, '走访考察')" :class="[(type==5)?'hover':'']">走访考察</li>
        <li @click="getSpecify(6, '线上分享')" :class="[(type==6)?'hover':'']">线上分享</li>
        <li @click="getSpecify(7, '其他')" :class="[(type==7)?'hover':'']">其他</li>
      </ul>
    </div>
    <div class="msg" ref="msg">
      <div class="msg-content">
        <div v-for="item in data" class="item" @click="goDetail(item.id)">
          <div class="msg-title">
            {{item.activityName}}
          </div>
          <div class="msg-body">
            <img :src="item.activityImg" alt="">
            <div class="remark">{{item.remarks}}</div>
            <!--<div class="remark"> Lorem ipsum doleat repudiandae sequi soluta sunt ullam voluptatum.  </div>-->
          </div>
          <div class="msg-footer">
            <el-row>
              <el-col :span="5">
                <i class="icontarget iconfont"></i><!--
             --><span class="text">{{item.activityState}}</span>
              </el-col>
              <el-col :span="4">
                <i class="icondidian iconfont"></i><!--
             --><span class="text">{{item.activityLocation}}</span>
              </el-col>
              <el-col :span="7">
                <i class="iconshijian iconfont"></i><!--
             --><span class="text">{{ item.activityStartTime | timeFilter }}</span>
              </el-col>
              <el-col :span="8">
                <div class="btn">
                  <el-button type="primary" size="mini">我要报名</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import TopSearch from '../../components/TopSearch'

  export default {
    name: "news",
    components: {
      TopSearch
    },
    data() {
      return {
        type: 0,
        data: ''
      }
    },
    mounted() {
      this.getSpecify(0, '')
    },
    methods: {
      content() {
        let scroll = new BScroll(this.$refs.msg, {
          click: true,
          scrollY: true,
        })
      },
      async getSpecify(type, value) {
        this.type = type
        await this.axios.get('/api/hope/a/activity/activity/listData', {params: {activityType: value}}).then(res => {
          console.log(res.data.list)
          this.data = res.data.list
        })
        this.content()
      },
      goDetail(id){
        this.$router.push({
          name: 'activityDetail',
          params: {
            id: id
          }
        })
      },
    },
    filters: {
      timeFilter(value) {
        return value.split(/\s+/)[0]
      }
    }
  }
</script>

<style lang="stylus">
  #activity
    .wrapper
      z-index 50
      padding-top: 0.3rem
      border-5px(#EEEEEE)
      background-color: #fff
      .content::-webkit-scrollbar
        width: 0 !important
        height: 0 !important

      .content
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        overflow: auto;
        padding-bottom: 0.6rem

        li
          flex: 1 0 auto;
          padding: 0 5px;
          line-height: 1.5rem
          font-size: 0.8rem

          &.hover
            color #408ED0
            &:after
              display: block
              content: ''
              width: 100%
              border-top: 2px solid #408ED0

    .msg
      overflow hidden
      width: 100%
      position: fixed
      top: 6.5rem
      bottom: 3.5rem

      .item
        margin: 0.5rem
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        .msg-title
          padding: 0.3rem 0
          font-size: 0.8rem
          text-align: center
        .msg-body
          display: flex
          width: 80%
          margin-left: 10%
          img
            height: 4rem
            width: 7rem
            padding: 0.5rem
          .remark
            font-size: 0.8rem
            padding: 0.5rem 0
            height: 3.5rem
            overflow hidden
        .msg-footer
          padding: 0.5rem
          .text
            font-size: 0.7rem
          .btn
            text-align: center
            .el-button--mini, .el-button--mini.is-round
              padding: 5px 8px
              margin-top: -1rem
</style>
