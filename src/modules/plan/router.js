export default [{
  path: '/plan',
  name: 'Plan',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import( /* webpackChunkName: "main" */ './views/Main')
}, {
  path: '/plan/transferred',
  name: 'TransferredCourse',
  component: () => import( /* webpackChunkName: "main" */ './views/Transferred')
}]
