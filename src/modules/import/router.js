export default [{
  path: '/import/:json',
  name: 'ImportPlan',
  component: () => import( /* webpackChunkName: "import" */ './views/ImportPlan')
}]
