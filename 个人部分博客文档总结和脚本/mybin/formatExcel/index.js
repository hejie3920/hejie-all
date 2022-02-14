const xlsx = require("node-xlsx");
const fs = require("fs-extra");
const glob = require("glob");
const { resolve, extname, basename, join } = require("path");

const exec = (path) => {
  let sheets = xlsx.parse(path); //获取到所有sheets
  const extension = extname(path); //  获取后缀名
  let fileName = basename(path, extension); // 获取没有后缀的文件名
  let res = "";
  sheets.forEach(function (sheet) {
    for (let rowId in sheet["data"]) {
      let row = sheet["data"][rowId];
      res += row[0];
    }
  });
  fs.writeFileSync(resolve("./output/", fileName + ".txt"), res);
  console.log("TCL: 输出完成", resolve("./output/", fileName + ".txt"));
};

glob
  .sync(resolve(__dirname, "./docs", "**/*.et")) // 遍历该目录底下的所有文件
  .forEach((file) => {
    console.log("TCL: file", file);
    exec(file);
  });

console.log("TCL: 处理完成");
