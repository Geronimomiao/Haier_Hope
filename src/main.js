// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAxios from 'vue-axios'
import axios from 'axios'
import animate from 'animate.css'

import createStore from './vuex/store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios,axios);
Vue.use(animate)
/* eslint-disable no-new */

const store = createStore()

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
