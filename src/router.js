import Vue from 'vue'
import Router from 'vue-router'

import HomeRouter from '@/modules/home/router'
import ActionRouter from '@/modules/action/router'
import ExportRouter from '@/modules/export/router'
import ImportRouter from '@/modules/import/router'
import PlanRouter from '@/modules/plan/router'
import CourseRouter from '@/modules/course/router'
import ProfileRouter from '@/modules/profile/router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...HomeRouter,
    ...ActionRouter,
    ...ExportRouter,
    ...ImportRouter,
    ...PlanRouter,
    ...CourseRouter,
    ...ProfileRouter,
    // Trival
    {
      path: '/404',
      name: 'WIP',
      component: () => import( /* webpackChunkName: "import" */ '@/views/WIP')
    },
    {
      path: '*',
      component: () => import( /* webpackChunkName: "import" */ '@/views/WIP')
    }
  ]
})
