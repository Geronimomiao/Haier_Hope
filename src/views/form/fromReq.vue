<template>
  <div id="form_req">
    <back-header>
      <span slot="title">发布需求</span>
    </back-header>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题:">
        <el-input v-model="form.name" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="需求领域:">
        <el-select v-model="form.region" placeholder="请选择需求领域">
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
      <el-form-item label="技术标签:">
        <el-input v-model="form.name" placeholder="请选择活动区域"></el-input>
      </el-form-item>
      <el-form-item label="需求类型:">
        <el-select v-model="form.region" placeholder="请选择需求类型">
          <el-option label="科技需求" value="科技需求"></el-option>
          <el-option label="营销需求" value="营销需求"></el-option>
          <el-option label="创意需求" value="创意需求"></el-option>
          <el-option label="资金需求" value="资金需求"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属区域:">
        <el-input v-model="form.name" placeholder="请输入所属区域"></el-input>
      </el-form-item>
      <el-form-item label="合作方式:">
        <el-select v-model="form.region" placeholder="请选择合作方式">
          <el-option label="技术入股" value="技术入股"></el-option>
          <el-option label="技术转让" value="技术转让"></el-option>
          <el-option label="技术服务" value="技术服务"></el-option>
          <el-option label="合作开发" value="合作开发"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <div class="tarea">
        <el-form-item label="需求描述:">
          <el-input type="textarea" placeholder="请描述您的具体需求，目前主要的技术问题，需求场景等"></el-input>
        </el-form-item>
      </div>
      <div class="tarea">
        <el-form-item label="预期效果:">
          <el-input type="textarea" placeholder="请描述您的预期效果"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="附件">
        <el-input v-model="form.name" placeholder="请选择要上传的附件"></el-input>
      </el-form-item>
      <el-form-item label="图片">
        <el-input v-model="form.name" placeholder="请选择要上传的图片"></el-input>
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
    </el-form>
    <div class="form-footer">
      提交
    </div>
  </div>
</template>

<script>
  import BackHeader from '../../components/BackHeader'

  export default {
    name: "formTech",
    data() {
      return {
        form: {
          name: '',
          region: '',
          desc: '',
        }
      }
    },
    components: {
      BackHeader
    }
  }
</script>

<style lang="stylus">
  @import "../../common/stylus/border.styl"

  #form_req
    .el-input__inner
      border-style: none

    .el-form-item
      margin-bottom: 0
      border-1px(rgba(7, 17, 27, 0.1))

    .el-select
      width: 100%

    .tarea
      .el-textarea
        height: 5rem

      .el-form-item__content
        margin-left: 0 !important

      .el-textarea__inner
        border: 0

    .form-footer
      height: 2.5rem
      line-height: 2.5rem
      text-align: center
      width: 100%
      bottom: 0
      color #73A23A

</style>
