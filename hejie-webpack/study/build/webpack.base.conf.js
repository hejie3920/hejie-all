var path = require("path")
var webpack = require("webpack")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
// 一个可以插入 html 并且创建新的 .html 文件的插件
var HtmlWebpackPlugin = require("html-webpack-plugin")
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const myCopy = require("../myPlugins/copy")

function resolve(dir) {
  return path.join(__dirname, "..", dir)
}

module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    // 编译输出的根路径
    path: resolve("public/dist"),
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
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        // 这一项是为了安全起见，去检查部分源文件而已
        // enforce: 'pre',
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
        use: ["style-loader", "css-loader"]
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
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    // DLL
    new webpack.DllReferencePlugin({
      context: ".",
      manifest: require("../public/dll/bundle.manifest.json")
    }),
    // 将 index.html 作为入口，注入 html 代码后生成 index.html文件
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      inject: true
    }),
    // new myCopy({
    //   from: "public",
    //   to: "public2"
    // }),
    // 用dll分出包后，包不能被HTMLWebpackPlugin自动插入到html里面，
    // 这时候需要用add-asset-html-webpack-plugin将这些包加入bundle里面
    new AddAssetHtmlPlugin({ filepath: resolve("public/dll/bundle.js") })
  ]
}
