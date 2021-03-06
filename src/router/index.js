import Vue from 'vue'
import Router from 'vue-router'

import index from '@/draft/index'
import task from '@/views/index/task'
import home from '@/views/index/home'
import news from '@/views/index/news'
import activity from '@/views/index/activity'
import demand from '@/views/index/demand'
import genius from '@/views/index/genius'
import iservice from '@/views/index/service'
import technology from '@/views/index/technology'


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
import setting from '@/views/service/setting'
import message from '@/views/service/message'
import attention from '@/views/service/attention'
import personal_activity from '@/views/service/activity'
import personal_demand from '@/views/service/demand'
import personal_news from '@/views/service/news'
import personal_subscription from '@/views/service/subscription'

import newsDetail from '@/views/detail/newDetail'
import activityDetail from '@/views/detail/activeDetail'
import demandDetail from '@/views/detail/demandDetail'
import techDetail from '@/views/detail/techDetail'
import serviceDetail from '@/views/detail/serviceDetail'
import geniusDetail from '@/views/detail/geniusDetail'



import auth from '@/draft/auth'
import login from '@/views/auth/login'
import register from '@/views/auth/register'

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
          path: '/detail',
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
        {
          path: '/demand',
          name: 'demand',
          component: demand
        },
        {
          path: '/genius',
          name: 'genius',
          component: genius
        },
        {
          path: '/service',
          name: 'service',
          component: iservice
        },
        {
          path: '/technology',
          name: 'technology',
          component: technology
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
        {
          path: '/service/setting',
          name: 'setting',
          component: setting
        },
        {
          path: '/service/message',
          name: 'message',
          component: message
        },
        {
          path: '/service/attention',
          name: 'attention',
          component: attention
        },
        {
          path: '/service/activity',
          name: 'personal_activity',
          component: personal_activity
        },
        {
          path: '/service/demand',
          name: 'personal_demand',
          component: personal_demand
        },
        {
          path: '/service/news',
          name: 'personal_news',
          component: personal_news
        },
        {
          path: '/service/subscription',
          name: 'personal_subscription',
          component: personal_subscription
        },
      ]
    },
    {
      path: '/news/detail',
      name: 'newsDetail',
      component: newsDetail,
    },
    {
      path: '/activity/detail',
      name: 'activityDetail',
      component: activityDetail,
    },
    {
      path: '/demand/detail',
      name: 'demandDetail',
      component: demandDetail,
    },
    {
      path: '/tech/detail',
      name: 'techDetail',
      component: techDetail,
    },
    {
      path: '/service/detail',
      name: 'serviceDetail',
      component: serviceDetail,
    },
    {
      path: '/genius/detail',
      name: 'geniusDetail',
      component: geniusDetail,
    },
    {
      path: '/auth',
      name: 'auth',
      component: auth,
      children: [
        {
          path: '/auth/login',
          name: 'login',
          component: login
        },
        {
          path: '/auth/register',
          name: 'register',
          component: register
        },
      ]
    },
  ]
})
