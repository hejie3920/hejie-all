import React, { Component } from "react"
function C1(props) {
  console.log("props", props)
  return <div>{props.children("参数")}</div>
}
function C2(props) {
  return (
    <div>
      {React.Children.map(props.children, child => {
        if (child.type === "p") {
          return
        }
        return child
      })}
    </div>
  )
}

export class Composition extends Component {
  render() {
    return (
      <div>
        <C1>{params => <b>{params}</b>}</C1>
        <C2>
          <ul>
            <li>1fsadf12</li>
            <li>1fsadf12</li>
            <li>1fsadf12</li>
          </ul>
          <p>nihao</p>
        </C2>
      </div>
    )
  }
}

export default Composition
