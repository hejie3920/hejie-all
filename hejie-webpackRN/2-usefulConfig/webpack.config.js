const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  //devtool:"cheap-module-source-map",  线上
  //devtool:"cheap-module-eval-source-map" 开发
  devtool: "cheap-module-eval-source-map",
  // mode: "development",
  mode: "production",
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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "./src"),
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "webpack_day2",
      filename: "index.html",
      template: "./index.html"
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
