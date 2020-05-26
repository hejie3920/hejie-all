// 分片上传 + 断点传输
function upload() {
  let file = $("#upload")[0].files[0]

  var chunkSize = 1 * 1024 * 1024 //分片大小 2M
  var chunks = [], //保存分片数据
    token = Date.now(), //时间戳
    name = file.name,
    chunkCount = 0,
    sendChunkCount = 0,
    saveChunkKey = SparkMD5.hash(name)

  //拆分文件 像操作字符串一样
  if (file.size > chunkSize) {
    //拆分文件
    var start = 0,
      end = 0
    while (true) {
      end += chunkSize
      var blob = file.slice(start, end)
      start += chunkSize
      if (!blob.size) {
        //截取的数据为空 则结束
        //拆分结束
        break
      }
      chunks.push(blob) //保存分段数据
    }
  } else {
    chunks.push(file.slice(0))
  }
  chunkCount = chunks.length //分片的个数

  //没有做并发限制，较大文件导致并发过多，tcp 链接被占光 ，需要做下并发控制，比如只有4个在请求在发送
  function xhrSend(formData, cb) {
    axios({
      method: "post",
      url: "/upload",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData
    }).then((res) => {
      cb && cb(res)
    })
  }

  //获得本地缓存的数据
  function getUploadedFromStorage() {
    return JSON.parse(localStorage.getItem(saveChunkKey) || "{}")
  }

  //写入缓存
  function setUploadedToStorage(index) {
    var obj = getUploadedFromStorage()
    obj[index] = true
    localStorage.setItem(saveChunkKey, JSON.stringify(obj))
  }

  var uploadedInfo = getUploadedFromStorage() //获得已上传的分段信息

  for (var i = 0; i < chunkCount; i++) {
    console.log("index", i, uploadedInfo[i] ? "已上传过" : "未上传")

    if (uploadedInfo[i]) {
      //对比分段
      sendChunkCount = i + 1 //记录已上传的索引
      continue //如果已上传则跳过
    }
    var fd = new FormData() //构造FormData对象
    fd.append("token", token)
    fd.append("f1", chunks[i])
    fd.append("index", i)
    ;(function (index) {
      xhrSend(fd, function () {
        sendChunkCount += 1
        //将成功信息保存到本地
        setUploadedToStorage(index)
        if (sendChunkCount === chunkCount) {
          console.log("上传完成，发送合并请求")
          var formD = new FormData()
          formD.append("type", "merge")
          formD.append("token", token)
          formD.append("chunkCount", chunkCount)
          formD.append("filename", name)
          xhrSend(formD, (res) => {
            console.log("TCL: 结果", res)
          })
        }
      })
    })(i)
  }
}

// 正常多文件上传
// function upload() {
//   let dom = document.getElementById("upload")
//   let files = dom.files
//   let formData = new FormData()
//   for (const i in files) {
//     formData.append("f1", files[i])
//   }
//   axios({
//     method: "post",
//     url: "/upload",
//     headers: { "Content-Type": "multipart/form-data" },
//     data: formData,
//     onUploadProgress: (progressEvent) => {
//       let complete = (((progressEvent.loaded / progressEvent.total) * 100) | 0) + "%"
//       $("#progress").text(complete)
//     }
//   }).then((res) => {
//     console.log("接口返回", res)
//   })
// }
