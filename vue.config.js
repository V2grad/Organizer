var OfflinePlugin = require('offline-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new OfflinePlugin()
    ]
  }
}
