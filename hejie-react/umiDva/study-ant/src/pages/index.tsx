import React from 'react'
import { Link } from 'umi'
import { Button } from './lib'
import styles from './index.less'

console.warn('TCL: ', 'nihao')
interface MyRes {
  name: string
  age?: number
}
interface MyError {
  msg: string
}

const errObj: MyError = {
  msg: '错误'
}

const hellow: (args: string) => Promise<MyRes> = (args: string) => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      setTimeout(() => {
        const resObj: MyRes = {
          name: args
        }
        resolve(resObj)
      }, 1000)
    } else {
      reject(errObj)
    }
  })
}

hellow('jlaj')
  .then(res => {
    console.warn('TCL: ', res.name)
  })
  .catch(err => {
    console.warn('TCL: ', err.msg)
  })

export default () => {
  return (
    <div>
      <Link to="/user">
        <Button type="default">你好</Button>
      </Link>
      <h1 className={styles.title}>哈哈</h1>
    </div>
  )
}
