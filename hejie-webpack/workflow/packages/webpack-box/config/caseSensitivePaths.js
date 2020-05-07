// [CaseSensitivePaths 严格区分大小写]
module.exports = ({ config, webpackVersion, resolve, options }) => {
  return () => {
    // webpack 5 不兼容
    if (parseInt(webpackVersion) >= 5) return
    config
      .plugin('case-sensitive-paths')
      .use(require('case-sensitive-paths-webpack-plugin'))
  }
}
