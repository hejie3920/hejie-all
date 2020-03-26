import React from "react"
import { Route } from "react-router-dom"

// 目的就是在staticContext上挂载状态码，因为你打印就知道了，Route组件下有match，staticContext等属性
function Status({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.statusCode = code
        }
        return children
      }}></Route>
  )
}

function NotFound(props) {
  return (
    <Status code={404}>
      <h1>页面不存在~</h1>
    </Status>
  )
}

export default NotFound
