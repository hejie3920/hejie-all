// 加载 webpack
var merge = require("webpack-merge")
// 加载 webpack.base.conf.js
var baseWebpackConfig = require("./webpack.base.conf")

// 合并 webpack.base.conf.js
var webpackConfig = merge(baseWebpackConfig, {
  // 是否使用 #source-map 开发工具，更多信息可以查看 DDFE 往期文章
  devtool: false,
})

module.exports = webpackConfig
