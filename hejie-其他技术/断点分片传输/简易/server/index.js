/**
 * 服务入口
 */
var http = require("http")
var koaStatic = require("koa-static")
var path = require("path")
var koaBody = require("koa-body") //文件保存库
var fs = require("fs")
var Koa = require("koa2")
const router = require("koa-router")()

var app = new Koa()
var port = process.env.PORT || "8100"
var uploadHost = `http://localhost:${port}/uploads/`
function resolve(dir) {
  return path.join(__dirname, "..", dir)
}

app.use(
  koaBody({
    formidable: {
      //设置文件的默认保存目录，不设置则保存在系统临时目录下  os
      uploadDir: resolve("static/uploads")
    },
    multipart: true // 开启文件上传，默认是关闭
  })
)

//开启静态文件访问
app.use(koaStatic(resolve("static")))

//分片上传
router.post("/upload", async (ctx, next) => {
  var body = ctx.request.body
  var files = ctx.request.files ? ctx.request.files.f1 : [] //得到上传文件的数组
  var result = []
  var fileToken = ctx.request.body.token // 文件标识
  var fileIndex = ctx.request.body.index //文件顺序
  var filename = body.filename

  if (files && !Array.isArray(files)) {
    //单文件上传容错
    files = [files]
  }

  files &&
    files.forEach((item) => {
      var path = item.path
      var fname = item.name //原文件名称
      var nextPath = path.slice(0, path.lastIndexOf("/") + 1) + fileIndex + "-" + fileToken
      if (item.size > 0 && path) {
        //重命名文件
        fs.renameSync(path, nextPath)
        result.push(uploadHost + nextPath.slice(nextPath.lastIndexOf("/") + 1))
      }
    })

  // 分片上传
  if (body.type === "merge") {
    //合并分片文件
    let chunkCount = body.chunkCount,
      folder = resolve("static/uploads") + "/"

    var writeStream = fs.createWriteStream(`${folder}${filename}`)

    var cindex = 0
    //合并文件
    function fnMergeFile() {
      var fname = `${folder}${cindex}-${fileToken}`
      var readStream = fs.createReadStream(fname)
      readStream.pipe(writeStream, { end: false })
      readStream.on("end", function () {
        fs.unlink(fname, function (err) {
          if (err) {
            throw err
          }
        })
        if (cindex + 1 < chunkCount) {
          cindex += 1
          fnMergeFile()
        }
      })
    }
    fnMergeFile()
  }
  ctx.body = { result: uploadHost + filename }
})
// 普通文件上传
// router.post("/upload", async (ctx, next) => {
//   if (!ctx.request.files.f1) {
//     return false
//   }
//   var files = ctx.request.files.f1 //得道文件对象
//   let result = []
//   let filesList = Array.isArray(files) ? files : [files]

//   filesList.forEach((item) => {
//     var path = item.path
//     var fname = item.name //原文件名称
//     var nextPath = path + fname
//     if (item.size > 0 && path) {
//       let resPath = path.slice(0, path.lastIndexOf("/") + 1) + fname
//       //重命名文件
//       fs.renameSync(path, resPath)

//       //文件可访问路径放入数组
//       result.push(resPath)
//     }
//   })

//   //以 json 形式输出上传文件地址
//   ctx.body = { result }
// })

app.use(router.routes())
app.listen(port, () => {
  console.log(`This server is running at http://localhost:${port}/index.html`)
})
