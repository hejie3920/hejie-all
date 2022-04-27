const fs = require("fs");
const path = require("path");
const process = require("child_process");

function resolve(dir) {
  return path.join(__dirname, dir);
}
const filePath = resolve("../../all.md");

String.prototype.replaceAll = function (s1, s2) {
  return this.replace(new RegExp(s1, "gm"), s2);
};
// execCmd(`doctoc ${filePath}`, formatMd)

// function execCmd(cmdStr, cb) {
//   if (!cmdStr) return
//   process.exec(cmdStr, (error, stdout, stderr) => {
//     if (error) {
//       console.log(`执行命令${cmdStr}失败：` + error)
//     } else {
//       console.log(`执行命令${cmdStr}`)
//       cb && cb()
//     }
//   })
// }
function formatMd() {
  console.warn("TCL: ", "开始将md文档里面所有标题的中英文间的空格移除");
  fs.readFile(filePath, "utf-8", function (err, data) {
    if (err) {
      console.error(err);
    } else {
      let str = data.toString();

      // let imgReg = /!\[.*\]\((.*)\)/gm
      // 处理图片
      let imgReg = /!\[.*\]\((.*)\)[^:]/gm;
      str = str.replace(imgReg, (res, $1) => {
        return `![image](${$1}):${$1}
        `;
      });
      // 处理标题
      let reg = /#+ (.*)/g;
      let arr = [];
      let res = [];
      while ((arr = reg.exec(str))) {
        if (/\s/.test(arr[1])) {
          res.push(arr[1]);
        }
      }
      res.forEach((item) => {
        str = str.replaceAll(item, item.replaceAll(" ", ""));
      });

      fs.writeFile(filePath, str, "utf8", function (err, data) {
        if (err) {
          console.error(err);
        } else {
          console.warn("TCL: ", "done");
          // execCmd(`doctoc ${filePath}`);
        }
      });
    }
  });
}
formatMd();
