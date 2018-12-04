export default [{
  path: '/import/:json/download',
  name: 'DirectDownload',
  component: () => import( /* webpackChunkName: "import" */ './views/DirectDownload')
}, {
  path: '/import/:json',
  name: 'ImportPlan',
  component: () => import( /* webpackChunkName: "import" */ './views/ImportPlan')
}]
