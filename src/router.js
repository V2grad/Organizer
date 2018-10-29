import Vue from 'vue'
import Router from 'vue-router'

import MainLayout from '@/layouts/main'
import InitLayout from '@/layouts/init'

import HomeRouter from '@/modules/home/router'
import ActionRouter from '@/modules/action/router'
import ExportRouter from '@/modules/export/router'
import ImportRouter from '@/modules/import/router'
import PlanRouter from '@/modules/plan/router'
import CourseRouter from '@/modules/course/router'
import ProfileRouter from '@/modules/profile/router'
import UpgradeRouter from '@/modules/upgrade/router'

import CacheMissed from '@/views/CacheMissed'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '',
      component: InitLayout,
      children: [
        ...HomeRouter,
        // Trival
        ...UpgradeRouter,
        {
          path: '/404',
          name: 'WIP',
          component: () => import( /* webpackChunkName: "WIP" */ '@/views/WIP')
        }, {
          path: '/cache',
          name: 'CacheMissed',
          component: CacheMissed
        }
      ]
    }, {
      path: '',
      component: MainLayout,
      children: [
        ...ActionRouter,
        ...ExportRouter,
        ...ImportRouter,
        ...PlanRouter,
        ...CourseRouter,
        ...ProfileRouter,
      ]
    },
    { // Fallback
      path: '',
      component: InitLayout,
      children: [{
        path: '*',
        component: () => import( /* webpackChunkName: "WIP" */ '@/views/WIP')
      }]
    }
  ]
})
