<template>
  <div id="form_tech">
    <back-header>
      <span slot="title">发布技术</span>
    </back-header>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题:">
        <el-input v-model="form.name" placeholder="请选择活动区域"></el-input>
      </el-form-item>
      <el-form-item label="技术方向:">
        <el-select v-model="form.region" placeholder="请选择活动区域">
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
      <el-form-item label="资金来源:">
        <el-select v-model="form.region" placeholder="请选择资金来源">
          <el-option label="科研经费" value="科研经费"></el-option>
          <el-option label="政府资金" value="政府资金"></el-option>
          <el-option label="企业资金" value="企业资金"></el-option>
          <el-option label="风险投资" value="风险投资"></el-option>
          <el-option label="个人自筹" value="个人自筹"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="交付形式:">
        <el-select v-model="form.region" placeholder="请选择交付形式">
          <el-option label="产品" value="产品"></el-option>
          <el-option label="工艺" value="工艺"></el-option>
          <el-option label="整体方案" value="整体方案"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专利状态:">
        <el-select v-model="form.region" placeholder="请选择专利状态">
          <el-option label="有" value="有"></el-option>
          <el-option label="没有" value="没有"></el-option>
        </el-select>
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
        <el-form-item label="技术亮点:">
          <el-input type="textarea" placeholder="请描述您的技术亮点"></el-input>
        </el-form-item>
      </div>
      <div class="tarea">
        <el-form-item label="技术描述:">
          <el-input type="textarea" placeholder="请详细描述您的技术方案"></el-input>
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

  #form_tech
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
