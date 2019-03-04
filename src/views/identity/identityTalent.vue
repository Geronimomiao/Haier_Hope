<template>
  <div id="identity_talent">
    <side-title>
      <span slot="title">填写内容</span>
    </side-title>
    <div class="form">
      <el-form :model="form" label-width="80px">
        <el-form-item label="所在单位">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="从事方向:">
          <el-select v-model="form.region" placeholder="请选择从事方向">
            <el-option label="减震降噪" value="减震降噪"></el-option>
            <el-option label="新材料应用" value="新材料应用"></el-option>
            <el-option label="传感器" value="传感器"></el-option>
            <el-option label="绿色能源" value="绿色能源"></el-option>
            <el-option label="射频技术" value="射频技术"></el-option>
            <el-option label="人工智能" value="人工智能"></el-option>
            <el-option label="流体机械" value="流体机械"></el-option>
            <el-option label="水处理技术" value="水处理技术"></el-option>
            <el-option label="食品技术" value="食品技术"></el-option>
            <el-option label="制冷系统设计" value="制冷系统设计"></el-option>
            <el-option label="燃烧技术" value="燃烧技术"></el-option>
            <el-option label="空气进化技术" value="空气进化技术"></el-option>
            <el-option label="机械结构设计" value="机械结构设计"></el-option>
            <el-option label="加热技术" value="加热技术"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专家标签">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input v-model="form.name" placeholder="请输入联系人姓名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.name" placeholder="请输入联系人邮箱"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.name" placeholder="请输入联系人联系方式"></el-input>
        </el-form-item>
        <div class="tarea">
          <el-form-item label="个人简介:">
            <el-input type="textarea" placeholder="请填写个人简介"></el-input>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button type="primary">提交</el-button>
          <el-button @click="goback">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import SideTitle from '../../components/SideTitle'
  export default {
    name: "identityTalent",
    data() {
      return {
        form: {
          name: ''
        }
      }
    },
    components: {
      SideTitle
    },
    methods: {
      goback() {
        this.$router.push({path: '/home'})
      }
    }
  }
</script>

<style lang="stylus">
  #identity_talent
    .form
      padding: 0.8rem 2rem
      .el-select
        width: 100%
      .el-textarea__inner
        height: 5rem
      .el-button--default
        float: right
</style>
