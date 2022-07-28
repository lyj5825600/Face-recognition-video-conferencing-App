module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://101.43.253.100:8082',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  }
}

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
