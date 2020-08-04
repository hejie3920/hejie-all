const fs = require('fs')
const path = require('path')
const process = require('child_process')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const filePath = resolve('../all.md')

String.prototype.replaceAll = function (s1, s2) {
  return this.replace(new RegExp(s1, 'gm'), s2)
}
execCmd(`doctoc ${filePath}`, formatMd)

function execCmd(cmdStr, cb) {
  if (!cmdStr) return
  process.exec(cmdStr, (error, stdout, stderr) => {
    if (error) {
      console.log(`执行命令${cmdStr}失败：` + error)
    } else {
      console.log(`执行命令${cmdStr}`)
      cb && cb()
    }
  })
}
function formatMd() {
  console.warn('TCL: ', '开始将md文档里面所有标题的中英文间的空格移除')
  fs.readFile(filePath, 'utf-8', function (err, data) {
    if (err) {
      console.error(err)
    } else {
      let str = data.toString()

      // let imgReg = /!\[.*\]\((.*)\)/gm
      let imgReg = /!\[.*\]\((.*)\)[^:]/gm
      str = str.replace(imgReg, (res, $1) => {
        return `![image](${$1}):${$1}`
      })
      let reg = /- \[.*\]/g
      let arr = []
      let res = []
      while ((arr = reg.exec(str))) {
        let item = arr[0].slice(3, -1)
        res.push(item)
      }
      res.forEach((item) => {
        if (/\s*/g.test(item)) {
          str = str.replaceAll(item, item.replace(/\s*/g, ''))
        }
      })

      fs.writeFile(filePath, str, 'utf8', function (err, data) {
        if (err) {
          console.error(err)
        } else {
          console.warn('TCL: ', 'done')
          execCmd(`doctoc ${filePath}`)
        }
      })
    }
  })
}
