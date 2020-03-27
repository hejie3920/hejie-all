import React, { Component } from "react"
// import { Input } from "antd"

export const rfhoc = Component => {
  let NewComponent = props => {
    console.log("TCL: rfhoc")
    return <Component {...props} />
  }
  return NewComponent
}
export const rfphoc = params => {
  return Component => {
    console.log("TCL: rfphoc", params)
    const NewComponent = props => {
      return <Component {...props} />
    }
    return NewComponent
  }
}

export const rchoc = WrappedComponent => {
  class NewComponent extends Component {
    componentDidMount() {
      console.log("TCL: rchoc")
    }
    render() {
      return <WrappedComponent />
    }
  }
  return NewComponent
}

export const rcphoc = key => WrappedComponent => {
  return class extends Component {
    componentDidMount() {
      console.log("TCL: rcphoc", key)
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

@rfhoc
@rcphoc("人沙发")
@rchoc
@rfphoc("挥洒后端返回")
class func extends React.PureComponent {
  componentDidMount() {
    console.log("func组件componentDidMount")
  }

  render() {
    console.log("TCL: ", "渲染")
    return (
      <div>
        <a href='/'>我是func组件</a>
        <h1>{this.props.name}</h1>
        {/* <div>
          {this.props.arr.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div> */}
        <Composition color='red'>{params => <b>{params}</b>}</Composition>
      </div>
    )
  }
}
function Composition(props) {
  return (
    <div style={{ background: props.color }}>
      <h2>asfdl</h2>
      {props.children("测试")}
    </div>
  )
}

export default func

// let phoc = key => WrappedComponent => {
//   return class extends Component {
//     componentWillMount() {
//       console.log("TCL: 23333", key)
//     }
//     render() {
//       return <WrappedComponent {...this.props} />
//     }
//   }
// }

// // 状态提升高阶组件封装input框

// export const withState = WrappedComponent => {
//   class NewComponent extends Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         value: ""
//       }
//     }
//     handleChange = e => {
//       this.setState({
//         value: e.target.value
//       })
//     }
//     render() {
//       const newProps = {
//         hocState: {
//           value: this.state.value,
//           onChange: this.handleChange
//         }
//       }
//       return <WrappedComponent {...newProps} {...this.props} />
//     }
//   }
//   return NewComponent
// }

// class SimpleControlledComponent extends React.Component {
//   render() {
//     //此时的SimpleControlledComponent为无状态组件，状态由高阶组件 维护
//     return (
//       <div>
//         <h3>状态管理提升到高阶组件里面</h3>
//         <Input placeholder='请输入' name='simple' {...this.props.hocState} />
//         <p>{this.props.hocState.value}</p>
//       </div>
//     )
//   }
// }
// const ComponentWithControlledState = phoc("123")(withState(SimpleControlledComponent))
// export default ComponentWithControlledState

// 懒加载高阶
// import React, { Component } from "react"
// /**
//  * 异步加载模块
//  * @param {*} importComponent
//  */
// export default function asyncComponent(importComponent) {
//   class AsyncComponent extends Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//         component: null
//       }
//     }

//     async componentDidMount() {
//       const { default: component } = await importComponent()

//       this.setState({ component })
//     }

//     render() {
//       const C = this.state.component

//       return C ? <C {...this.props} /> : null
//     }
//   }
//   return AsyncComponent
// }
// use: const info = asyncComponent(() => import("@/pages/info/info"))
// const setUser = asyncComponent(() => import("@/pages/set_user/set_user"))
// const msite = asyncComponent(() => import("@/pages/msite/msite"))
// const shop = asyncComponent(() => import("@/pages/shop/shop"))
// const food = asyncComponent(() => import("@/pages/food/food"))
// const technology = asyncComponent(() => import("@/pages/technology/technology"))

// 高阶组件时把静态方法也给包进来
// 但要这样做，你需要知道哪些方法应该被拷贝。你可以使用 hoist-non-react-statics 自动拷贝所有非 React 静态方法:

// import hoistNonReactStatic from 'hoist-non-react-statics';
// function enhance(WrappedComponent) {
//   class Enhance extends React.Component {/*...*/}
//   hoistNonReactStatic(Enhance, WrappedComponent);
//   return Enhance;
// }
