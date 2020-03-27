const webpack = require("webpack");
const merge = require("webpack-merge");

const devConfig = {
  devtool: "cheap-module-eval-source-map",
  mode: "development",
  devServer: {
    contentBase: "./dist", //资源文件目录
    open: true, //自动打开浏览器
    hot: true,
    port: 8081, //服务器端口,
    hotOnly: true,
    proxy: {
      "/api": {
        target: "http://localhost:9092"
      }
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = devConfig;
