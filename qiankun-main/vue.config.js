const path = require('path')
const getRepoInfo = require('git-repo-info')

process.env.VUE_APP_REPO_INFO = JSON.stringify(getRepoInfo())

module.exports = {
  publicPath: '/portal',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        assets: path.resolve(__dirname, 'src/assets'),
      },
    },
  },
  devServer: {
    port: 8090,
    open: true,
    disableHostCheck: true,
    // proxy: {
    //   '/his': {
    //     target: '',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/his': '/',
    //     },
    //   },
    // },
  },
}
