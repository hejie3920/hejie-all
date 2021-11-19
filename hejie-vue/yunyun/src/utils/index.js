export function $(str, parent = "", selectAll = false) {
  parent = parent || document
  let res = ""
  if (str) {
    if (!selectAll) {
      res = parent.querySelector(str)
    } else {
      res = parent.querySelectorAll(str)
    }
  }
  return res
}

export function dateFormat(fmt, date) {
  let ret
  const opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  }
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt)
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"))
    }
  }
  return fmt
}

export function downloadIamge(imgsrc, name) {
  //下载图片地址和图片名
  let image = new Image()
  // 解决跨域 Canvas 污染问题
  image.setAttribute("crossOrigin", "anonymous")
  image.onload = function() {
    let canvas = document.createElement("canvas")
    canvas.width = image.width
    canvas.height = image.height
    let context = canvas.getContext("2d")
    context.drawImage(image, 0, 0, image.width, image.height)
    let url = canvas.toDataURL("image/png") //得到图片的base64编码数据
    let a = document.createElement("a") // 生成一个a元素
    let event = new MouseEvent("click") // 创建一个单击事件
    a.download = name || "photo" // 设置图片名称
    a.href = url // 将生成的URL设置为a.href属性
    a.dispatchEvent(event) // 触发a的单击事件
  }
  image.setAttribute("crossOrigin", "Anonymous")
  image.src = imgsrc
}
