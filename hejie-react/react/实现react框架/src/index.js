// import React from "react";
// import ReactDOM from "react-dom";
import React, {Component} from './kreact'
import ReactDOM from "./kreact-dom";

function Comp(props) {
  return <h2>hi {props.name}</h2>;
}

class Comp2 extends Component {
  render() {
    return (
      <div>
        comp2
      </div>
    )
  }
}

// jsx就是js对象，就是vdom
const foo = 'bar';
const users = [
    {name:'tom'},
    {name:'jerry'},
]
const jsx = (
  <div id="demo" className={foo}>
    <span>hi</span>
    <Comp name="函数组件" />
    <Comp2 name="类组件" />
    {users.map(user=><div>{user.name}</div>)}
  </div>
);
// React.createElement() => vdom
console.log(jsx);

ReactDOM.render(jsx, document.querySelector("#root"));
