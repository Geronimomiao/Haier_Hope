import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default  () => {
  return new Vuex.Store({
    state: {
      user: {},
      flag: 0,
      score: 30,
      record: true,
      footerFlag: 1
    },
    mutations: {
      updateUserInfo(state, user) {
        state.user = user
      },
      updateFlag(state, flag) {
        state.flag = flag
      },
      increaseScore(state) {
        state.score += 5
        state.record = false
      },
      updateFooterFlag(state, flag) {
        state.footerFlag = flag
      }
    }
  })
}

