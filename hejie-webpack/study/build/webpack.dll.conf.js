const webpack = require('webpack')
var path = require('path')
// 拼接我们的工作区路径为一个绝对路径
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    bundle: [
      'vue',
      'element-ui'
      //其他库
    ]
  },
  output: {
    path: resolve('public/dll'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: resolve('public/dll/bundle.manifest.json'),
      name: '[name]_library'
    })
  ]
}
