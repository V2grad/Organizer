export default [{
  path: '/upgrade',
  name: 'ForceUpgrade',
  component: () => import( /* webpackChunkName: "upgrade" */ './views/forceUpgrade')
}]
