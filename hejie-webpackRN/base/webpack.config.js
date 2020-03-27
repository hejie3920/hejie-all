const path = require("path")
const htmlWebpackPulgin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("./node_modules/clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  //入口文件配置 string | array | object
  mode: "development",
  entry: {
    index: "./src/index.js",
    list: "./src/list.js",
    detail: "./src/detail.js"
  },
  output: {
    //必须是绝对路径
    path: path.resolve(__dirname, "dist"),
    // []占位符
    filename: "[name].js"
    // publicPath: "https://www.cdn.com"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash].[ext]",
            outputPath: "imgs/",
            limit: 2048
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")]
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new CleanWebpackPlugin(),
    new htmlWebpackPulgin({
      title: "hello 我是首页",
      template: "./index.html",
      inject: "head",
      filename: "index.html",
      chunks: ["index"]
    }),
    new htmlWebpackPulgin({
      title: "hello 我是列表",
      template: "./index.html",
      inject: "body",
      filename: "list.html",
      chunks: ["list"]
    }),
    new htmlWebpackPulgin({
      title: "hello 我是详情",
      template: "./index.html",
      inject: "body",
      filename: "detail.html",
      chunks: ["detail"]
    })
  ]
}
