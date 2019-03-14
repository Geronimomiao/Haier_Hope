<template>
    <div id="active_attend_form">
      <el-card class="box-card">
        <div slot="header" class="header">
          <span>报名信息确认</span>
          <i class="el-icon-close" @click="close"></i>
        </div>
        <div class="item">
          <el-form label-width="80px" label-position='left'>
            <el-form-item label="姓名:">
              <el-input placeholder="请输入您的姓名" v-model="name" clearable></el-input>
            </el-form-item>
            <el-form-item label="组织名称:">
              <el-input placeholder="请输入所在组织的名称" v-model="organization" clearable></el-input>
            </el-form-item>
            <el-form-item label="职务:">
              <el-input placeholder="请输入您的职务" v-model="position" clearable></el-input>
            </el-form-item>
            <el-form-item label="联系邮箱:">
              <el-input placeholder="请输入您的邮箱" v-model="email" clearable></el-input>
            </el-form-item>
            <el-form-item label="联系电话:">
              <el-input placeholder="请输入您的联系电话" v-model="phone" clearable></el-input>
            </el-form-item>
          </el-form>
          <div class="sub">
            <el-button type="primary">确认报名</el-button>
          </div>
        </div>
      </el-card>
    </div>
</template>

<script>
  export default {
    name: "ActiveAttendForm",
    props: ['flag'],
    data() {
      return {
        name: '',
        organization: '',
        position: '',
        email: '',
        phone: '',
      }
    },
    methods: {
      close() {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus">
  #active_attend_form
    background-color: #fff
    position: absolute
    bottom: 0
    z-index 150
    right: 0
    left: 0
    border-top-left-radius: 1rem
    border-top-right-radius: 1rem
    .box-card
      width: 100%
      border-top-left-radius: 1rem
      border-top-right-radius: 1rem
      .el-card__body
        padding-bottom: 0
      .header
        display: flex
        justify-content space-between
      .item
        margin-bottom: 18px;
        .el-input__inner
          border 0
          text-align: right
        .el-form-item
          margin-bottom: 0
      .sub
        text-align: right
        margin-right: 30px
</style>
