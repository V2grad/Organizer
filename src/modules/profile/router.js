export default [{
  path: '/profile',
  name: 'Profile',
  component: () => import( /* webpackChunkName: "profile" */ './views/Profile')
}]
