// 使用 NodeJS 自带的文件路径插件
var path = require("path")
// 加载 webpack
var merge = require("webpack-merge")

// 加载 webpack.base.conf.js
var baseWebpackConfig = require("./webpack.base.conf")

// 一个可以插入 html 并且创建新的 .html 文件的插件
var HtmlWebpackPlugin = require("html-webpack-plugin")

// 合并 webpack.base.conf.js
var webpackConfig = merge(baseWebpackConfig, {
  // 是否使用 #source-map 开发工具，更多信息可以查看 DDFE 往期文章
  devtool: false,
  plugins: [
    // 将 index.html 作为入口，注入 html 代码后生成 index.html文件
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      inject: true
    })
  ]
})

module.exports = webpackConfig
