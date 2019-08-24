const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const devConfig = require("./webpack.dev");
const proConfig = require("./webpack.pro");

const baseConfig = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
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
  optimization: {
    //帮我们自动做代码分割
    splitChunks: {
      chunks: "all" //默认是支持异步，我们使用all
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "webpack_day2",
      filename: "index.html",
      template: "./index.html"
    }),
    new CleanWebpackPlugin()
  ]
};

module.exports = env => {
  if (env && env.production) {
    return merge(baseConfig, proConfig);
  } else {
    return merge(baseConfig, devConfig);
  }
};
