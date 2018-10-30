var OfflinePlugin = require('offline-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new OfflinePlugin({
        // https://github.com/NekR/offline-plugin/blob/master/docs/examples/SPA.md
        // Unless specified in webpack's configuration itself
        publicPath: '/',
        appShell: '/',
        externals: [
          '/'
        ],
        responseStrategy: 'network-first',
        AppCache: {
          FALLBACK: {
            '/': '/error/cache-missed'
          }
        },
        excludes: ['**/.*', '**/_*', '**/*.map', '**/*.gz']
      })
    ]
  }
}
