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
      footerFlag: 1,
      activityList: [],
      demandList: [],
      newsList: [],
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
      },
      addActivity(state, id) {
        state.activityList.push(id)
      },
      addDemand(state, id) {
        state.demandList.push(id)
      },
      removeDemand(state) {
        state.demandList.pop()
      },
      addNews(state, id) {
        state.newsList.push(id)
      },
    }
  })
}

