import React, { Component } from "react"
class Test extends Component {
  constructor(props) {
    super(props)
    this.onClickToSetA = this.onClickToSetA.bind(this)
    this.state = {
      a: 1,
      b: 10000,
      value: "你好"
    }
  }
  onClickToSetA() {
    setTimeout(() => {
      this.setState(
        {
          a: this.state.a + 1
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
  }
  componentWillUpdate() {
    console.log("willUpdate")
  }
  componentDidUpdate() {
    console.log("didUdate")
  }
  test = () => {
    console.log("TCL: ", this.input.value)
  }
  render() {
    console.log("TCL: ", this.input)
    return [
      <div key='div-1'>
        <button onClick={this.onClickToSetA}>Set State a</button>
      </div>,
      <div key='div-2'>
        <textarea
          name=''
          ref={input => {
            this.input = input
          }}></textarea>
        <button onClick={this.test}>测试</button>
        <p key='1'>{this.state.a}</p>
        <p key='2'>{this.state.b}</p>
      </div>
    ]
  }
}
export default Test
