import Vue from 'vue'
import Router from 'vue-router'

import index from '@/draft/index'
import task from '@/views/task'
import home from '@/views/home'
import news from '@/views/news'
import activity from '@/views/activity'

import hform from '@/draft/hform'
import formTech from '@/views/formTech'
import formRight from '@/views/formRight'
import formReq from '@/views/fromReq'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          name: 'task',
          component: task
        },
        {
          path: '/news',
          name: 'news',
          component: news
        },
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/activity',
          name: 'activity',
          component: activity
        },
      ]
    },
    {
      path: '/form',
      name: 'form',
      component: hform,
      children: [
        {
          path: '/form/formTech',
          name: 'formTech',
          component: formTech
        },
        {
          path: '/form/formRight',
          name: 'formRight',
          component: formRight
        },
        {
          path: '/form/formReq',
          name: 'formReq',
          component: formReq
        },
      ]
    }
  ]
})
