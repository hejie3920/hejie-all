// 这个高阶函数withStyle其实在服务端loader isomorphic-style-loader里都有
// 可以直接用官方的，那个用法比较复杂点

import React from "react"
// 这玩意是为了把要高阶的目标函数的静态函数也给整合在新的高阶组件里
import hoisNonReactStatics from "hoist-non-react-statics"

const withStyle = (Component, styles) => {
  let NewComponent = props => {
    if (props.staticContext) {
      props.staticContext.css.push(styles._getCss())
    }
    return <Component {...props} />
  }
  hoisNonReactStatics(NewComponent, Component)

  return NewComponent
}

export default withStyle
