import React, { Component } from "react"
import ReactDOM from "react-dom"

import PropTypes from "prop-types"
import { connect } from "react-redux"
import { asyncFetch, add } from "../store/goods"
import { Button } from "antd"
import { Fragment } from "react"

// Context
// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext("light")
class func extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 34
    }
  }

  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ThemeContext.Provider value={this.state.count}>
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}
export default func
// v-html
let htmlStr = `<div><strong>你好啊</strong></div>`
// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
  return (
    <Fragment>
      <div id='htmlStr' dangerouslySetInnerHTML={{ __html: htmlStr }}></div>
      <ThemedButton />
    </Fragment>
  )
}

// 类用上下文
class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext
  componentDidMount() {
    console.log("TCL: ", this.props)
  }
  render() {
    return <Button>{this.context}</Button>
  }
}

// 函数用上下文
// function ThemedButton() {
//   return (
//     <div>
//       <ThemeContext.Consumer>{value => <Button>{value}</Button>}</ThemeContext.Consumer>
//     </div>
//   )
// }

// react-redux
// const mapStateToProps = state => ({
//   list: state.goods.list
// })
// // 函数式
// // const mapDispatchToProps = dispatch => ({
// //   add: payload => dispatch({ type: "add", payload }),
// // })
// // 对象式
// const mapDispatchToProps = {
//   add,
//   asyncFetch
// }
// @connect(mapStateToProps, mapDispatchToProps)
// class Learn extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       num: 0
//     }
//   }
//   static propTypes = {
//     name: PropTypes.string.isRequired
//   }
//   handleClick = () => {
//     this.props.asyncFetch(this.state.num + 1)
//   }
//   render() {
//     const { list } = this.props
//     console.log("TCL: ", "渲染")
//     return (
//       <div>
//         <div className='name'>{this.props.name}</div>
//         {list.map((item, index) => (
//           <div key={index}>{item}</div>
//         ))}
//         <Button onClick={this.handleClick}>点击</Button>
//       </div>
//     )
//   }
// }
// export default Learn

// React16新增

// 挂载在指点节点，ReactDOM.createPortal
// class Modal extends Component {
//   constructor(props) {
//     super(props)
//     // 根节点下创建一个div节点
//     this.container = document.createElement("div")
//     document.body.appendChild(this.container)
//   }
//   componentWillUnmount() {
//     document.body.removeChild(this.container)
//   }
//   render() {
//     // 创建的DOM树挂载到this.container指向的div节点下面
//     return ReactDOM.createPortal(
//       <div className='modal'>
//         <span className='close' onClick={this.props.onClose}></span>
//         <div className='content'> {this.props.children} </div>
//       </div>,
//       this.container
//     )
//   }
// }
// export default Modal

// 错误边界
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { hasError: false }
//   }

//   static getDerivedStateFromError(error) {
//     // 更新 state 使下一次渲染能够显示降级后的 UI
//     return { hasError: true }
//   }

//   componentDidCatch(error, errorInfo) {
//     // 你同样可以将错误日志上报给服务器
//     logErrorToMyService(error, errorInfo)
//   }

//   render() {
//     if (this.state.hasError) {
//       // 你可以自定义降级后的 UI 并渲染
//       return <h1>Something went wrong.</h1>
//     }

//     return this.props.children
//   }
// }

// 路由懒加载，React.lazy
// 异常捕获边界（Error boundaries）
// 如果模块加载失败（如网络问题），它会触发一个错误。你可以通过异常捕获边界（Error boundaries）技术来处理这些情况，以显示良好的用户体验并管理恢复事宜。

// import React, { Suspense } from "react"
// import MyErrorBoundary from "./MyErrorBoundary"

// const OtherComponent = React.lazy(() => import("./OtherComponent"))
// const AnotherComponent = React.lazy(() => import("./AnotherComponent"))

// const MyComponent = () => (
//   <div>
//     <MyErrorBoundary>
//       <Suspense fallback={<div>Loading...</div>}>
//         <section>
//           <OtherComponent />
//           <AnotherComponent />
//         </section>
//       </Suspense>
//     </MyErrorBoundary>
//   </div>
// )

// 基于react-router的路由懒加载
// import React, { Suspense, lazy } from "react"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// const Home = lazy(() => import("./routes/Home"))
// const About = lazy(() => import("./routes/About"))

// const App = () => (
//   <Router>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Switch>
//         <Route exact path='/' component={Home} />
//         <Route path='/about' component={About} />
//       </Switch>
//     </Suspense>
//   </Router>
// )

// 实现v-html
// ReactDOM.render('html内容', document.getElementById("container"))
