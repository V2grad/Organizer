import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import WIP from './views/WIP.vue'

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
      path: '/404',
      name: 'WIP',
      component: WIP
    },
    {
      path: '/plan',
      name: 'plan',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Main.vue')
    },
    {
      path: '/courses',
      name: 'CourseSelect',
      component: () => import(/* webpackChunkName: "about" */ './views/CourseSelect.vue')
    },
    {
      path: '/export',
      name: 'ExportPlan',
      component: () => import(/* webpackChunkName: "about" */ './views/ExportPlan.vue')
    }, {
      path: '/import/new',
      name: 'ImportPlanLanding',
      component: () => import(/* webpackChunkName: "about" */ './views/ImportPlanLanding.vue')
    }, {
      path: '/import/:json',
      name: 'ImportPlan',
      component: () => import(/* webpackChunkName: "about" */ './views/ImportPlan.vue')
    },
    { path: '*', component: WIP }
  ]
})
