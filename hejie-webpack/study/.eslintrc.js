module.exports = {
  root: true,
  // 改版解析规则应该这样配置
  parserOptions: {
    parser: "babel-eslint"
  },
  // 在Vue项目里面要配置Vue的lint插件，单纯配standard是不足够的，会解析不了vue文件
  extends: ["plugin:vue/essential", "standard"],
  // 配置需要检查的文件，需要安装对应的插件，跟着提示来就可以了
  plugins: ["html", "vue"],
  rules: {
    // 自定义个别规则写在这，0忽略，1警告，2报错
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // 方法名和括号之前不需要空格
    "space-before-function-paren": 0,
    // 将”未使用的变量“调整为警告级别，原为错误级别，更多规则请看官网
    "no-unused-vars": 1,
    // 结尾是不是要分号
    semi: ["error", "never"],
    // 单引号还是双引号
    quotes: ["error", "double"]
    // // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    // "no-console": ["off"],
    // curly: ["error"],
    // "no-floating-decimal": ["error"],
    // "no-undef": ["error"],
    // "no-unused-vars": [
    //   "error",
    //   {
    //     vars: "local",
    //     args: "none"
    //   }
    // ],
    // "no-var": "error",
    // indent: [
    //   "error",
    //   4,
    //   {
    //     SwitchCase: 1
    //   }
    // ],
    // "comma-dangle": ["error", "never"],

    // "brace-style": [
    //   "error",
    //   "1tbs",
    //   {
    //     allowSingleLine: true
    //   }
    // ],
    // "array-bracket-spacing": ["error", "never"],
    // "block-spacing": ["error", "always"],
    // "arrow-parens": ["error", "always"],
    // "arrow-spacing": [
    //   "error",
    //   {
    //     before: true,
    //     after: true
    //   }
    // ],
    // "no-duplicate-imports": [
    //   "error",
    //   {
    //     includeExports: true
    //   }
    // ],
    // "space-in-parens": ["error", "never"],
    // "quote-props": ["error", "as-needed"],
    // "keyword-spacing": [
    //   "error",
    //   {
    //     before: true,
    //     after: true
    //   }
    // ],
    // "key-spacing": ["error"]
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    worker: true,
    mocha: true,
    phantomjs: true,
    serviceworker: true
  }
}
