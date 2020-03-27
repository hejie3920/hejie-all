import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { getIndexList } from "../store/index"
import styles from "./Index.css"
import withStyle from "../withStyle.js"
// 服务端特有的
// console.log(styles._getCss())

function Index(props) {
  // 服务端渲染的时候直接涂上css，这里封装成hoc高阶组件了，在withStyle里
  // if (props.staticContext) {
  //   props.staticContext.css.push(styles._getCss())
  // }

  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!props.list.length) {
      props.getIndexList()
    }
  }, [])

  return (
    <div className={styles.bg}>
      <h1 className={styles.title}>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click on me</button>
      <hr />
      <ul>
        {props.list.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}
Index.loadData = store => {
  return store.dispatch(getIndexList())
}

export default connect(
  state => ({
    list: state.index.list
  }),
  { getIndexList }
)(withStyle(Index, styles))
