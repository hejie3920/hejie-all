import React, { Component } from "react"

class StateCop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 1,
      b: 1000,
      counter: 0
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        counter: this.state.counter + 1
      })
      console.log("TCL: 2", this.state.counter) // 6.  ==> 2
    }, 300)
    // 批量操作：对同一个key多次操作会合并，会执行最后一次
    this.setState({ counter: this.state.counter + 1 })
    this.setState({ counter: this.state.counter + 7 })
    this.setState({ counter: this.state.counter + 100 }, () => {
      console.log("TCL: 1", this.state.counter) // 4.  ==> 1
    })
    console.log("TCL: 3", this.state.counter) // 1.  ==> 0
    this.setState(prev => {
      console.log("TCL: 4", this.state.counter) // 2. ==> 0
    })
    setTimeout(() => {
      console.log("TCL: 5", this.state.counter) // 5.  ==> 1
    }, 280)
    this.setState(pre => {
      console.log("TCL: 6", pre.counter) // 3.  ==> 1
    })
    console.log("TCL: 7", this.state.counter)
    //  TCL: 3 0
    //  TCL: 7 0
    //  TCL: 4 0
    //  TCL: 6 100
    //  willUpdate
    //  didUdate
    //  TCL: 1 100
    //  TCL: 5 100
    //  willUpdate
    //  didUdate
    //  TCL: 2 101
    document.body.addEventListener("click", () => {
      this.setState({
        counter: 300
      })
      console.log("TCL: ", this.state.counter) // 结果300
    })
  }
  onClickToSetA = () => {
    setTimeout(() => {
      this.setState(
        pre => {
          console.log("TCL: 之前")
          return { a: ++pre.a }
        },
        () => {
          console.log("0000")
        }
      )
      console.log("1111")
      this.setState(
        {
          b: Math.random()
        },
        () => {
          console.log("2222")
        }
      )
      console.log("3333")
    }, 0)
    //  willUpdate
    //  didUdate
    //  0000
    //  1111
    //  willUpdate
    //  didUdate
    //  2222
    //  3333
  }
  componentWillUpdate() {
    console.log("willUpdate")
  }
  componentDidUpdate() {
    console.log("didUdate")
  }
  render() {
    return (
      <div>
        <h2>setState原理</h2>
        <div key='div-1'>
          <button onClick={this.onClickToSetA}>点击我</button>
        </div>
        <div key='div-2'>
          <p key='1'>a: {this.state.a}</p>
          <p key='2'>b: {this.state.b}</p>
        </div>
      </div>
    )
  }
}
export default StateCop
