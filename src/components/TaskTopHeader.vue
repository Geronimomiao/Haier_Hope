<template>
  <div id="task_top_header">
    <el-row :gutter="20">
      <el-col :span="18">
        <el-input placeholder="搜索技术/需求/专家/服务" v-model="search"></el-input>
      </el-col>
      <el-col :span="6">
        <el-dropdown>
          <span class="el-dropdown-link">
             <i class="iconfont iconjiahao"></i>
             <span>发布</span>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div class="down-item" @click="formTech">
                <i class="iconfont iconxuqiu"></i>
                发布技术
              </div><div class="down-item" @click="formReq">
                <i class="iconfont iconwangyuanjing"></i>
                发布需求
              </div>
              <div class="down-item" @click="formRight">
                <i class="iconfont iconkeyan"></i>
                发布专利
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: "TaskTopHeader",
    data() {
      return {
        search: ''
      }
    },
    methods: {
      formTech() {
        this.$router.push({path: '/form/formTech'})
      },
      formRight() {
        this.$router.push({path: '/form/formRight'})
      },
      formReq() {
        this.$router.push({path: '/form/formReq'})
      },
    }
  }
</script>

<style lang="stylus">

  #task_top_header
    position: fixed
    width: 100%

    z-index: 50
    height: 2.7rem
    background-color: #f5f5f5
    padding: 5px

    i
      font-weight: bold
      line-height: 2.7rem
      font-size: 1.4rem

    span
      line-height: 2.4rem
      font-size: 1rem

    .el-input__inner
      border-radius 1rem

</style>
