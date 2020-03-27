
const db = wx.cloud.database()
let collection = db.collection('hejiebook')
Page({
  data:{
    books:[],
    page:1,
    imgurl:'',
  },
  onLoad(){
    this.getList(true)
  },
  getList(isInit){
    wx.showLoading()
    let PAGER = 2

    // 1 page是1
    // 2 page2 

    collection.skip(this.data.page * PAGER).limit(PAGER).get({
      success:res=>{
        if(isInit){
          this.setData({
            books: res.data
          })
        }else{
          this.setData({
            books: this.data.books.concat(res.data)
          })
        }
        wx.hideLoading()
      
      }
    })
  },
  onReachBottom(){
    console.log('触底')
    this.setData({
      page: this.data.page+1
    })
    this.getList()
  },
  onPullDownRefresh(){
    this.getList(true)

  },
  addBook(isbn){
    wx.cloud.callFunction({
      name:'hejiedouban',
      data:{
        isbn
      },
      success(res){
        let info = res.result
        console.log(info)
        info.count = 1

        collection.add({
          data:info,
          success(res){
            if(res._id){
              wx.showToast({
                title: '添加成功',
                icon: 'success',
                duration: 2000
              })
            }
          }
        })
        
        // 信息入库
        // wx.showModal({
        //   title:'搜索成功',
        //   content:`图书《${info.title}》评分是${info.rating.value}`
        // })
      }
    })
  },

  callLogin(){
    wx.chooseImage({
      count:1,
      success:res=>{
        wx.showLoading()
        let filePath = res.tempFilePaths[0]
        console.log([filePath])
        let cloudPath = 'hejie-quanzhan-10-'+(new Date().getTime())

        wx.cloud.uploadFile({
          filePath,
          cloudPath,
          success:res=>{
            console.log(res)
            this.setData({
              imgurl: res.fileID
            })
          }
        })

        wx.hideLoading()
      }
    })

    // wx.cloud.callFunction({
    //   name:'hejielogin',
    //   data:{
    //     a:1,
    //     b:2
    //   },
    //   success(res){
    //     console.log(res)
    //   }
    // })
    // wx.scanCode({
    //   success:res=>{
    //     this.addBook(res.result)
    //     console.log(res)
    //   }
    // })

  }
})