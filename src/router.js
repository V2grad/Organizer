import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import WIP from '@/views/WIP'
import Actions from '@/views/Actions'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/plan',
      name: 'Plan',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "main" */ '@/views/Plan/Main')
    },
    {
      path: '/plan/transferred',
      name: 'TransferredCourse',
      component: () => import( /* webpackChunkName: "main" */ '@/views/Transferred')
    },
    {
      path: '/courses/custom',
      name: 'CustomCourse',
      component: () => import( /* webpackChunkName: "course" */ './views/Course/CustomCourse')
    },
    {
      path: '/courses',
      name: 'CourseSelect',
      component: () => import( /* webpackChunkName: "course" */ './views/Course/CourseSelect')
    },
    {
      path: '/actions',
      name: 'Actions',
      component: Actions
    },
    {
      path: '/export',
      name: 'ExportPlan',
      component: () => import( /* webpackChunkName: "export" */ './views/ExportPlan')
    }, {
      path: '/import/:json',
      name: 'ImportPlan',
      component: () => import( /* webpackChunkName: "import" */ './views/ImportPlan')
    }, {
      path: '/profile',
      name: 'Profile',
      component: () => import( /* webpackChunkName: "profile" */ './views/Profile')
    },
    {
      path: '/404',
      name: 'WIP',
      component: WIP
    },
    {
      path: '*',
      component: WIP
    }
  ]
})
