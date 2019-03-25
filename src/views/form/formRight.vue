<template>
  <div id="form_right">
    <back-header>
      <span slot="title">发布专利</span>
    </back-header>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="专利名称:">
        <el-input v-model="form.name" placeholder="请输入专利名称"></el-input>
      </el-form-item>
      <el-form-item label="专利类型:">
        <el-select v-model="form.region" placeholder="请选择专利类型">
          <el-option label="发明专利" value="发明专利"></el-option>
          <el-option label="实用新型专利" value="实用新型专利"></el-option>
          <el-option label="外观设计专利" value="外观设计专利"></el-option>
          <el-option label="国际专利" value="国际专利"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="权人类型:">
        <el-select v-model="form.region" placeholder="请选择权人类型">
          <el-option label="大专院校" value="发明专利"></el-option>
          <el-option label="科研院所" value="实用新型专利"></el-option>
          <el-option label="企业" value="企业"></el-option>
          <el-option label="事业单位" value="事业单位"></el-option>
          <el-option label="个人" value="个人"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专业领域:">
        <el-select v-model="form.region" placeholder="请选择专业领域">
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
      <el-form-item label="专利标签:">
        <el-input v-model="form.name" placeholder="请输入标签"></el-input>
      </el-form-item>
      <el-form-item label="专利权人:">
        <el-input v-model="form.name" placeholder="请输入专利权人"></el-input>
      </el-form-item>
      <el-form-item label="法律状态:">
        <el-select v-model="form.region" placeholder="请选择相应的法律状态">
          <el-option label="有效" value="有效"></el-option>
          <el-option label="无效" value="无效"></el-option>
          <el-option label="再审" value="再审"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="国别代码:">
        <el-input v-model="form.name" placeholder="请输入国别省市代码"></el-input>
      </el-form-item>
      <el-form-item label="申请号:">
        <el-input v-model="form.name" placeholder="请输入申请号"></el-input>
      </el-form-item>
      <el-form-item label="国内外:">
        <el-select v-model="form.region" placeholder="请选择国内外">
          <el-option label="国内" value="国内"></el-option>
          <el-option label="国外" value="国外"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发明人:">
        <el-input v-model="form.name" placeholder="请输入发明人姓名"></el-input>
      </el-form-item>
      <el-form-item label="主分类号:">
        <el-input v-model="form.name" placeholder="请输入主分类号"></el-input>
      </el-form-item>
      <el-form-item label="申请日:">
        <el-input v-model="form.name" placeholder="请输入申请日"></el-input>
      </el-form-item><el-form-item label="公布日:">
        <el-input v-model="form.name" placeholder="请输入公布日"></el-input>
      </el-form-item><el-form-item label="代理机构:">
        <el-input v-model="form.name" placeholder="请输入代理机构"></el-input>
      </el-form-item><el-form-item label="代理人:">
        <el-input v-model="form.name" placeholder="请输入代理人姓名"></el-input>
      </el-form-item>
      <el-form-item label="地址:">
        <el-input v-model="form.name" placeholder="请输入申请人地址"></el-input>
      </el-form-item>
      <el-form-item label="主权项:">
        <el-input v-model="form.name" placeholder="请输入主权项"></el-input>
      </el-form-item>
      <div class="tarea">
        <el-form-item label="专利摘要:">
          <el-input type="textarea" placeholder="请描述您的专利摘要"></el-input>
        </el-form-item>
      </div>
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
    <div class="form-footer" @click="sub">
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
    },
    methods: {
      sub() {
        this.$message({
          showClose: true,
          message: '提交成功 请耐心等待审核',
          type: 'success'
        });
        this.$router.push({path: '/'})
      }
    }
  }
</script>

<style lang="stylus">
  @import "../../common/stylus/border.styl"

  #form_right
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
