import Vue from 'vue'
import Router from 'vue-router'

import index from '@/draft/index'
import task from '@/views/index/task'
import home from '@/views/index/home'
import news from '@/views/index/news'
import activity from '@/views/index/activity'

import hform from '@/draft/hform'
import formTech from '@/views/form/formTech'
import formRight from '@/views/form/formRight'
import formReq from '@/views/form/fromReq'

import identity from '@/draft/identity'
import identityEnterprise from '@/views/identity/identityEnterprise'
import identityInstitution from '@/views/identity/identityInstitution'
import identityTalent from '@/views/identity/identityTalent'

import service from '@/draft/service'
import integral from '@/views/service/integral'
import wallet from '@/views/service/wallet'

import newsDetail from '@/views/news/detail'

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
        },
    {
      path: '/identity',
      name: 'identity',
      component: identity,
      children: [
        {
          path: '/identity/identityEnterprise',
          name: 'identityEnterprise',
          component: identityEnterprise
        },
        {
          path: '/identity/identityInstitution',
          name: 'identityInstitution',
          component: identityInstitution
        },
        {
          path: '/identity/identityTalent',
          name: 'identityTalent',
          component: identityTalent
        },
      ]
    },
    {
      path: '/service',
      name: 'service',
      component: service,
      children: [
        {
          path: '/service/integral',
          name: 'integral',
          component: integral
        },
        {
          path: '/service/wallet',
          name: 'wallet',
          component: wallet
        },
      ]
    },
    {
      path: '/news/detail',
      name: 'newsDetail',
      component: newsDetail,
    },
  ]
})
