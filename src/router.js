import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import WIP from '@/views/WIP'
import Actions from '@/views/Actions'

import Landing from '@/views/Import/Landing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/plan',
      name: 'plan',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "main" */ '@/views/Plan/Main')
    },
    {
      path: '/courses/custom',
      name: 'CustomCourse',
      component: () => import(/* webpackChunkName: "course" */ './views/Course/CustomCourse')
    },
    {
      path: '/courses',
      name: 'CourseSelect',
      component: () => import(/* webpackChunkName: "course" */ './views/Course/CourseSelect')
    },
    {
      path: '/actions',
      name: 'Actions',
      component: Actions
    },
    {
      path: '/export',
      name: 'ExportPlan',
      component: () => import(/* webpackChunkName: "export" */ './views/ExportPlan')
    }, {
      path: '/import/new',
      name: 'ImportPlanLanding',
      component: Landing
    }, {
      path: '/import/:json',
      name: 'ImportPlan',
      component: () => import(/* webpackChunkName: "import" */ './views/Import/ImportPlan')
    },
    {
      path: '/404',
      name: 'WIP',
      component: WIP
    },
    { path: '*', component: WIP }
  ]
})
