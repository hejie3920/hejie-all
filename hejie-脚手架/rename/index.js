const fs = require('fs')
const path = require('path')
const url = '/Users/zhanghejie/Desktop/社区'

fs.readdir(url, 'utf8', (err, fileList) => {
  if (err) throw err
  fileList.forEach((item, index) => {
    let length = item.split('.').length
    //获取文件后缀名
    let type = '.' + item.split('.')[length - 1]
    let oldName = item
    //新名称,根据需求修改名称，可以使用正则等等
    // 去除斜杠
    let newName = item.replace(/(\／)/g, '-').replace(/(@2x)*/g, '')

    fs.rename(url + item, url + newName, (err) => {
      if (err) throw err
      console.log('done: ' + newName)
    })
  })
})
