// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
// 对外暴露的云函数 其实就是一个node函数
exports.main = async (event, context) => {
  const {a,b} = event

  const wxContext = cloud.getWXContext()

  return {
    sum:a+b,
    openid: wxContext.OPENID
  }

}