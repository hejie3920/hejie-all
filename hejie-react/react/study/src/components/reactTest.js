import React, { Component } from 'react'
class Test extends Component {
  constructor(props) {
    super(props)
    this.onClickToSetA = this.onClickToSetA.bind(this)
    this.state = {
      a: 1,
      b: 10000
    }
  }
  onClickToSetA() {
    setTimeout(() => {
      this.setState(
        {
          a: ++this.state.a
        },
        () => {
          console.log('0000')
        }
      )
      console.log('1111')
      this.setState(
        {
          b: Math.random()
        },
        () => {
          console.log('22222')
        }
      )
      console.log('3333')
    }, 0)
  }
  componentWillUpdate() {
    console.log('willUpdate')
  }
  componentDidUpdate() {
    console.log('didUdate')
  }
  render() {
    return [
      <div key="div-1">
        <button onClick={this.onClickToSetA}>Set State a</button>
      </div>,
      <div key="div-2">
        <p key="1">{this.state.a}</p>
        <p key="2">{this.state.b}</p>
      </div>
    ]
  }
}
export default Test
