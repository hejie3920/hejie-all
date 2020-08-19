const path = require("path");
module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  // vue-cli直接关闭eslint
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", path.resolve("examples"))
      .set("~", path.resolve("packages"));

    config.module
      .rule("js")
      .include.add("/packages/")
      .end()
      .include.add("/examples/")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        return options;
      });
  }
};
