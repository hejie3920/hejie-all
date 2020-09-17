const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const base = process.env.NODE_ENV === 'production' ? './' : './'

function resolve(src) {
  return path.join(__dirname, src)
}
module.exports = {
  devtool: 'cheap-source-map',
  mode: 'development',
  entry: resolve('./index.js'),
  output: {
    publicPath: base,
    filename: 'main.js',
    path: resolve('./dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true
  },
  resolve: {
    alias: {
      '@p': resolve('./mypixiruntime'),
      '@actions': resolve('./src/actions')
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              publicPath: base + '/images'
            }
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
}
