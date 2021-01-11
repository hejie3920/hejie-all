const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  configureWebpack: config => {
    config.resolve.alias['@css'] = resolve('src/scss')
    config.resolve.alias['@img'] = resolve('src/assets/img')
    // tree shaking摇树
    config.optimization.minimize = true
  },
  devServer: {
    port: 3370,
    // 自动打开浏览器
    open: true
    // proxy: {
    //   // '/api': {
    //   //   target: 'http://fundgz.1234567.com.cn',
    //   //   pathRewrite: {
    //   //     '/api': ''
    //   //   },
    //   //   changeOrigin: true
    //   // }
    //   '/api': {
    //     target: 'https://fundsuggest.eastmoney.com',
    //     pathRewrite: {
    //       '/api': ''
    //     },
    //     changeOrigin: true
    //   }
    // }
  }
}
