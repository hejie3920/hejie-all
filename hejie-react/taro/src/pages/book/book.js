import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Input, Button,Swiper, SwiperItem} from '@tarojs/components'
import {AtCard} from 'taro-ui'
import { observer, inject} from '@tarojs/mobx'
import './book.styl'
let wx = {}
// let db = wx.cloud.database()
export default class Book extends Component {

  constructor(props){
    super(props)
    this.page = 0
    this.state = {
      goods:[],
      tops:[]
    }

  }
  onReachBottom(){
    this.page += 1
    this.getList()
  }
  getTop(){
    db.collection('books').orderBy('rate','desc').limit(4).get({
      success:tops=>{
        console.log('top',tops)
        this.setState({
          tops:tops.data
        })
      }
    })
  }
  getList(){
    wx.showLoading()
    let init = this.page === 0
    let PAGER = 6
    let item  = db.collection('books')

    if(!init){
      item = item.skip(this.page*PAGER)
    }
    item = item.limit(PAGER)
    item.get({
      success:res=>{
        console.log('getList',res)
        if(init){
          this.setState({
            goods:res.data
          })
        }else{
          this.setState({
            goods:[...this.state.goods, ...res.data]
          })
        }
        wx.hideLoading()

      }
    })
  }
  componentDidMount1(){
    this.getTop()
    this.getList()
  }
  render(){
    return <View>
      <Swiper
        autoplay
      
      >
        {
          this.state.tops.map(top=>{
            return <SwiperItem>
              <View class="swiper-container" >
                <image class="swiper-img" mode="aspectFit" src={top.image}></image>
              </View>
            </SwiperItem>
          })
        }
       
      </Swiper>
      {
        this.state.goods.map(good=>{
          return <AtCard
           thumb={good.image}
           title={good.title}

           extra={good.price}
           >
            {good.summary}
          </AtCard>
        })
      }
    </View>
  }


}