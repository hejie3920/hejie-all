import React, { Component } from "react";
import logo from "./logo.svg";
import "./JsxTest.css";

function formatName(user) {
  return user.firstName + "-" + user.lastName;
}
export default class JsxTest extends Component {
  render() {
    const name = "Jerry";
    const greet = <p>hello, jerry!</p>;
    return (
      <div>
        {/* 表达式: 合法js表达式即可 */}
        <h1>{name}</h1>
        {/* 函数也是表达式 */}
        <p>{formatName({ firstName: "tom", lastName: "cruis" })}</p>
        {/* jsx也是表达式 */}
        {greet}

        {/* 属性 */}
        <img src={logo} style={{ width: "100px" }} alt="logo" className="img" />
        <label htmlFor="ff">fff</label>
      </div>
    );
  }
}
