const fs = require('fs')
const path = require('path')
const request = require('request')
const cheerio = require('cheerio')
const colors = require('colors')
const async = require('async')

// 定义类
class imageSpider {
  //构造函数
  constructor(options) {
    this.urltxt = options.urltxt || 'http://www.16sucai.com/tupian/'
    this.startpage = options.startpage || 2
    this.endpage = options.endpage || 6
    this.sourcedir = options.sourcedir || 'images'
    this.picdir = `./${this.sourcedir}/${this.startpage}_${this.endpage}/`
    this.imgArr = []
    this.count = 0
  }
  init() {
    this.createFolder()
    this.main()
  }

  createFolder() {
    // --------------------------------------
    // 创建 图片保存目录
    // fs.mkdir 这里有个隐患，直接使用 对已存在的文件夹创建时会报错，在不存在的一级目录下创建二级目录也会报错，待封装fs.mkdir后再修改
    // --------------------------------------
    fs.mkdir(this.picdir, function (err) {
      if (err) {
        // return console.log(err);
      }
    })
  }

  syncLoad(requrl) {
    return new Promise((resolve, reject) => {
      request(requrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(body)
          //console.log(body);
        }
      })
    })
  }

  async main() {
    console.log('---------------开始抓取页面内容---------------'.cyan)
    for (let i = this.startpage; i < this.endpage; i++) {
      let requrl = `${this.urltxt}${i}.html`
      let body = await this.syncLoad(requrl)
      this.analysisData(body) //采集主函数
      // let downloadImg = function(uri, filename, callback){
      //     request(uri).pipe(fs.createWriteStream( picdir +filename)).on('close', function(){
      //         console.log(filename.cyan +"保存成功");//request的流数据pipe保存到 picdir文件夹下
      //     });
      // };
    }
    // --------------------------------------
    // 下载保存
    // NodeJs path API http://nodejs.org/api/path.html#path_path_basename_p_ext
    // request.head==》》fs模块createWriteStream写入到指定目录
    // 爬取资源较大时有待 用async来限制一下异步的并发，由于node并发连接数太多可能会被和谐
    // --------------------------------------
    async.mapLimit(
      this.imgArr,
      20,
      (imgArr, callback) => {
        if (imgArr.imgsrc && imgArr.filename) {
          // count++
          // console.log(`这一轮并发请求线程里面共有${count}个请求`);
          let writeStream = fs.createWriteStream(this.picdir + imgArr.filename)
          let readStream = request(imgArr.imgsrc)
          readStream.pipe(writeStream)

          readStream.on('close', function () {
            callback(null)
            // console.log('文件下载成功');
          })
          readStream.on('error', function (err) {
            callback(null)
            console.log('错误信息:' + err)
          })
          writeStream.on('finish', function () {
            console.log(imgArr.filename.cyan + '保存成功') //request的流数据pipe保存到 picdir文件夹下
            writeStream.end()
          })
        } else {
          callback(null)
        }
      },
      (err, result) => {
        if (err) {
          console.log(err)
        } else {
          console.log('全部完成!')
        }
      }
    )
  }

  // 数据解析抓取主函数
  analysisData(ourdata) {
    let $ = cheerio.load(ourdata)
    let pic = $('.vector_listbox_pubu li img')
    let titleArr = $('.vector_listbox_pubu li p a')
    let thispage = '当前页' + pic.length + '张'
    console.log(thispage.rainbow)
    for (let i = 0; i < pic.length; i++) {
      // indexOf筛选src是否带有前缀http,此处取的是查看原图<a>的href,若$('.text img')则将herf改为src,其他站点类推
      let pics_src = pic[i].attribs.src
      let imgsrc
      if (pics_src.includes('http')) {
        imgsrc = pics_src
      } else {
        imgsrc = 'http:' + pics_src
      }
      let name = titleArr[i].children[0] && titleArr[i].children[0].data
      // console.log(imgsrc.green);
      let filename = this.parseUrlForFileName(imgsrc, name) //生成文件名
      let item = { imgsrc, filename }
      this.imgArr.push(item)
      // downloadImg(imgsrc,filename,function() {
      //     console.log(filename.cyan + ' done');
      // });
    }
  }

  //图片命名
  parseUrlForFileName(address, alt) {
    let filename
    if (!alt) filename = path.basename(address)
    else filename = alt + path.extname(address)
    return filename
  }
}
//静态变量
module.exports = imageSpider
