import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Input, Button} from '@tarojs/components'
import {AtButton, AtInput,AtListItem,AtList} from 'taro-ui'
import { observer, inject} from '@tarojs/mobx'
import './index.styl'

@inject('todoStore')
@observer
export default class Index extends Component {

  config = {
    navigationBarTitleText: '和杰taro'
  }
  constructor(props){
    super(props)
    this.state = {
      title:'和杰',
      val:''
    }
  }
  handleInput   = val=>{
    this.setState({
      val
    })
  }
  handleClick=()=>{
    this.props.todoStore.addTodo(this.state.val)
    this.setState({
      val:""
    })
  }
  render () {
    let {todoStore} = this.props
    return (
      <View className='index'>
        <View className="title">{this.state.title}</View>
        <AtInput value={this.state.val} onChange={this.handleInput}></AtInput>

        <AtList>
        {
            todoStore.todos.map(v=>{
              return <AtListItem title={v}></AtListItem>
            })
          }
        </AtList>
        
        <AtButton type="primary" onClick={this.handleClick}>添加</AtButton>
      </View>
    )
  }
}

