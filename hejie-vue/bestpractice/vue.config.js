// resolve定义一个绝对路径获取函数
const path = require('path')
const bodyParser = require("body-parser");

function resolve(dir) {
  return path.join(__dirname, dir)
}

// commonjs nodejs
const port = 7070;
const title = 'vue项目最佳实践';

module.exports = {
    publicPath: 'best-practice',
    devServer: {
        port,
        proxy: {
            // 代理 /dev-api/user/login 到 http://127.0.0.1:3000/user/login
            [process.env.VUE_APP_BASE_API]: {
              target: `http://127.0.0.1:3000/`,
              changeOrigin: true, // 要不要变更origin头
              pathRewrite: { // 地址重写：http://127.0.0.1:3000/user/login
                ["^" + process.env.VUE_APP_BASE_API]: ""
              }
            }
          },
        // before: app => {
        //     // node服务器代码 基于express
        //     // bodyPaser用来解析post请求中的json数据
        //     app.use(bodyParser.json());
        //     // app.use(
        //     //   bodyParser.urlencoded({
        //     //     extended: true
        //     //   })
        //     // );
        //     //登录接口声明
        //     app.post("/dev-api/user/login", (req, res) => {
        //       const { username } = req.body;
      
        //       if (username === "admin" || username === "jerry") {
        //         res.json({
        //           code: 1,
        //           data: username
        //         });
        //       } else {
        //         res.json({
        //           code: 10204,
        //           message: "用户名或密码错误"
        //         });
        //       }
        //     });
      
        //     app.get("/dev-api/user/info", (req, res) => {
        //         // 从请求头中获取令牌
        //         // adfasdfkadf; ja;kdfj;akdfjakdsfj;akjdf; akjdf;kalsjf;ajf
        //         // 令牌头         令牌体                     哈希
        //         // 加密算法        用户信息；有效期          
        //       const roles = req.headers['x-token'] === "admin" ? ["admin"] : ["editor"];
        //       res.json({
        //         code: 1,
        //         data: roles
        //       });
        //     });
        //   }
    },
    configureWebpack: {
        name: title
    },
    chainWebpack(config) {
        // svg规则配置一下，排除icons目录
        config.module.rule('svg')
            .exclude.add(resolve('src/icons'))
            .end();
        // 新增icons规则，设置svg-sprite-loader
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({ symbolId: 'icon-[name]'}) // 使用图标名称
            .end()
    }
}