// 使用 NodeJS 自带的文件路径插件
var path = require("path")
// 使用 webpack
var webpack = require("webpack")
// 使用 webpack 配置合并插件
var merge = require("webpack-merge")
// 加载 webpack.base.conf
var baseWebpackConfig = require("./webpack.base.conf")

// 使用 html-webpack-plugin 插件，这个插件可以帮我们自动生成 html 并且注入到 .html 文件中
var HtmlWebpackPlugin = require("html-webpack-plugin")

// 将内容束展示为方便交互的树状图
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// 将我们 webpack.dev.conf.js 的配置和 webpack.base.conf.js 的配置合并
module.exports = merge(baseWebpackConfig, {
  // module: {
  //   // 使用 styleLoaders
  //   rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  // },
  // cheap-module-eval-source-map is faster for development
  // 使用 #eval-source-map 模式作为开发工具，此配置可参考 DDFE 往期文章详细了解
  devtool: "#cheap-module-eval-source-map",
  plugins: [
    // 将 index.html 作为入口，注入 html 代码后生成 index.html文件
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    })
  ]
})
