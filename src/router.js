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
      name: 'no-found',
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
      path: '/plan/courses',
      name: 'CourseSelect',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CourseSelect.vue')
    },
    { path: '*', component: WIP }
  ]
})
