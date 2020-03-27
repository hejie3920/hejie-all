const path = require("path");
const CopyrightWebpackPlugin = require("./plugins/copyright-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  resolveLoader: {
    modules: ["node_modules", "./loaders"]
  },
  plugins: [
    new CopyrightWebpackPlugin({
      name: "laohan"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          "replaceLoader",
          {
            loader: "replaceLoaderAsync",
            options: {
              name: "和杰"
            }
          }
        ]
      }
    ]
  }
};
