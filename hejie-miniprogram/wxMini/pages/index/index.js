//index.js
//获取应用实例



const app = getApp()
Page({
  data:{
    val:'',
    name:'和杰',
    todos:['吃饭','睡觉','和杰学习前端']
  },
  onLoad(){
    console.log('index页面加载拉')
  },
  onShow(){
    console.log('index页面显示拉')
  },
  onHide() {
    console.log('index页面隐藏拉')
  },
  input(e){
    this.setData({
      val:e.detail.value
    })
    
  },
  addTodo(){

    this.setData({
      val:'',
      todos:[...this.data.todos,this.data.val]
    })
    
  }
})
