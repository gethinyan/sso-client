module.exports = {
  devServer: {
    open: false,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://server.sso.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
