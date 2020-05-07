// 使用 NodeJS 自带的文件路径插件
var path = require("path")
var webpack = require("webpack")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
// 拼接我们的工作区路径为一个绝对路径
function resolve(dir) {
  return path.join(__dirname, "..", dir)
}

module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    // 编译输出的根路径
    path: resolve("dist"),
    // 编译输出的文件名
    filename: "[name].bundle.js"
  },
  mode: process.env.NODE_ENV,
  resolve: {
    // 自动补全的扩展名
    extensions: [".js", ".json"]
  },
  resolveLoader: {
    modules: ["node_modules", resolve("myLoaders")]
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          // 缓存的第一种
          // "babel-loader?cacheDirectory=true",
          // 第二种，用cache-loader
          "cache-loader",
          "babel-loader",
          {
            loader: "chain-loader",
            options: {
              name: "和杰"
            }
          }
        ],
        include: resolve("src")
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
        include: [resolve("src")]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "img/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      // 这表明将选择哪些块进行优化。当提供一个字符串，有效值为all，async和initial。
      // 提供all可能特别强大，因为它意味着即使在异步和非异步块之间也可以共享块。
      chunks: "all",
      // 拆分前必须共享模块的最小块数。
      minSize: 30000,
      // 拆分前必须共享模块的最小块数。
      minChunks: 1,
      // 按需加载时并行请求的最大数量。
      maxAsyncRequests: 3,
      // 初始页面加载时并行请求的最大并行数
      maxInitialRequests: 3,
      cacheGroups: {
        vendors: {
          name: `vendors`,
          test: /[\\/]node_modules[\\/]/,
          // 当webpack处理文件路径时，它们始终包含/在Unix系统和\Windows上。这就是为什么[\\/]在{cacheGroup}
          // .test字段中使用in 来表示路径分隔符的原因。/ 或\in { cacheGroup }.test会在跨平台使用时引起问题。
          priority: -10,
          chunks: "initial"
        },
        common: {
          name: `common`,
          minChunks: 2,
          priority: -20,
          chunks: "initial",
          // 如果当前块包含已从主捆绑包中拆分出的模块，则将重用该模块，而不是生成新的模块。这可能会影响块的结果文件名。
          reuseExistingChunk: true
        }
      }
    },
    // 分离manifest
    runtimeChunk: {
      name: "manifest"
    },
    // tree shaking
    usedExports: true
  },
  // 分析
  plugins: [
    // new BundleAnalyzerPlugin(),
    // DLL
    new webpack.DllReferencePlugin({
      context: ".",
      manifest: require("../dll/bundle.manifest.json")
    })
  ]
}
