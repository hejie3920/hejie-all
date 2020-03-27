import React, { useState, useEffect, useReducer, useContext } from "react"
import { Button } from "antd"

const HejieCtx = React.createContext()

function listReducer(state, action) {
  switch (action.type) {
    case "init":
      return action.payload
    case "add":
      return [...state, action.payload]
    default:
      return state
  }
}
function Person(props) {
  const { dispatch, list } = useContext(HejieCtx)
  return list.map((item, index) => (
    <div
      key={index}
      onClick={e => {
        dispatch({
          type: "add",
          payload: Math.random()
        })
      }}>
      {item}
    </div>
  ))
}

const Hook = () => {
  const [name, setName] = useState("hejie")
  const [list, dispatch] = useReducer(listReducer, [])
  const [count, setCount] = useState(0)

  useEffect(() => {
    let timer = setInterval(() => {
      dispatch({ type: "add", payload: ["西瓜", "菠萝"] })
      // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）
      // 作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，
      // 所以它永远都不需要重复执行。这并不属于特殊情况 —— 它依然遵循依赖数组的工作方式。

      // 如果这里useEffect第二个参数是空的话，代表会实时刷新数据，这里就能正常自增
      // 但如果设置了空数组，代表只初始化一次，这里的count就永远是初始值0
      setCount(count + 1)
    }, 100000)
    return () => {
      clearInterval(timer)
    }
  })

  return (
    <HejieCtx.Provider value={{ list, dispatch }}>
      <div>
        <b>{name ? name : "没名字"}</b>
        <p>{count}</p>
        <Button
          type='primary'
          onClick={e => {
            setName("")
          }}>
          测试
        </Button>
        <Person></Person>
      </div>
    </HejieCtx.Provider>
  )
}

export default Hook
