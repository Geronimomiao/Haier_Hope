<template>
  <div id="technology">
    <top-search>
      <span slot="title">找技术</span>
    </top-search>
    <div class="type">
      <div class="item selected">所有技术</div>
      <div class="item">技术专题</div>
      <div class="item">专利成果</div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="wrapper-content">
        <div class="msg" v-for="item in data" @click="goDetail(item.id)">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import TopSearch from '../../components/TopSearch'
  export default {
    name: "technology",
    data() {
      return {
        data: ''
      }
    },
    components: {
      TopSearch
    },
    mounted() {
      this.showData()
    },
    methods: {
      async showData() {
        await this.axios.get('/api/hope/a/demand/demand/listData').then(res => {
          this.data = res.data.list
          console.log(this.data)
        })
        this.show()
      },
      show() {
        let scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          scrollY: true,
        })
      },
      goDetail(id){
        this.$router.push({
          name: 'demandDetail',
          params: {
            id: id
          }
        })
      }
    },
  }
</script>

<style lang="stylus">

  #technology
    .type
      height: 2rem
      display: flex
      text-align: center
      border-bottom: 5px solid #eee
      z-index 50
      .selected
        color: #43A7FF
      .item
        flex 1
        font-size: 0.8rem
        line-height: 2rem

</style>
