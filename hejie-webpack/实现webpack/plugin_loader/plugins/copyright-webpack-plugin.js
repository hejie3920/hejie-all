class CopyrightWebpackPlugin {
  //   constructor(options) {
  //     console.log(options);
  //   }

  //compiler：webpack实例
  apply(compiler) {
    compiler.hooks.compilation.tap("CopyrightWebpackPlugin", compilation => {
      console.log("compilation");
    });

    compiler.hooks.emit.tapAsync(
      "CopyrightWebpackPlugin",
      (compilation, cb) => {
        compilation.assets["copyright.txt"] = {
          source: function() {
            return "hello copy";
          },
          size: function() {
            return 1024;
          }
        };
        cb();
      }
    );
  }
}
module.exports = CopyrightWebpackPlugin;
