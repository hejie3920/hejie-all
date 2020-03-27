import React, { PureComponent } from "react"

export default class life extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      title: props.title
    }
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   const { title } = nextProps
  //   // 当传入的type发生变化的时候，更新state
  //   if (title !== prevState.title) {
  //     return {
  //       title
  //     }
  //   }
  //   // // 否则，对于state不进行任何操作
  //   return null
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log("TCL: life -> componentWillReceiveProps -> nextProps", nextProps)
  //   // ⽗父组件重传props时就会调⽤用这个⽅方法
  //   // this.setState({})
  //   this.setState({ title: this.state.title + 100 })
  // }
  // shouldComponentUpdate(nextProps) {
  //   // 应该使⽤用这个⽅方法，否则⽆无论props是否有变化
  //   // 都将会导致组件跟着重新渲染
  //   if (nextProps.title === this.props.title && nextProps.arr.length === this.props.arr.length) {
  //     return false
  //   }
  //   return true
  // }
  handleClick = () => {
    this.setState({
      title: this.state.title + "asfl"
    })
  }

  render() {
    console.log("life渲染")
    return (
      <div>
        <button onClick={this.handleClick}>子组件按钮</button>
        <ul>
          {this.props.arr.map((item, index) => (
            <div
              key={index}
              onClick={e => {
                this.handleClick(e)
              }}>
              {item.name}
            </div>
          ))}
        </ul>
      </div>
    )
  }
}
