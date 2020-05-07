// 一个很好看的 loading 插件
var ora = require("ora")
var rm = require("rimraf")
var path = require("path")
var chalk = require("chalk")
var webpack = require("webpack")
var webpackConfig = require("./webpack.prod.conf")
function resolve(dir) {
  return path.join(__dirname, "..", dir)
}
// 使用 ora 打印出 loading + log
var spinner = ora("正在打包...")

// 开始 loading 动画
spinner.start()

rm(resolve("dist"), (err) => {
  if (err) throw err

  // 开始 webpack 的编译
  webpack(webpackConfig, function (err, stats) {
    // 编译成功的回调函数
    spinner.stop()
    if (err) throw err
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + "\n\n"
    )

    console.log(chalk.cyan("  Build 成功.\n"))
    console.log(
      chalk.yellow(
        "  Tip: built files are meant to be served over an HTTP server.\n" +
          "  Opening index.html over file:// won't work.\n"
      )
    )
  })
})
