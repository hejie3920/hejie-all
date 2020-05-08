// 第一种，直接用download-git-repo的
const { promisify } = require("util")
module.exports.clone = async function (repo, desc) {
  const download = promisify(require("download-git-repo"))
  const ora = require("ora")
  const process = ora(`正在下载....${repo}`)
  process.start()
  await download(repo, desc)
  process.succeed()
}

// 第二种，直接用git clone
// var process1 = require("child_process")
// const ora = require("ora")
// module.exports = {
//   clone: function (repo, name) {
//     const process = ora(`正在下载....${repo}`)
//     process.start()
//     process1.exec("git clone " + repo, function (error, stdout, stderr) {
//       if (error !== null) {
//         console.log("exec error: " + error)
//         return
//       }
//       console.log(stdout)
//       process.succeed()
//     })
//   }
// }
