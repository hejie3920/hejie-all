import React, { Component } from "react"
import "./App.scss"
import Life from "./components/lifeCpm"
import Hoc from "./components/hocCpm"
import Redux from "./components/Redux"
import Composition from "./components/Composition"
import Hook from "./components/Hook"
import Test from "./components/Test"
import Learn from "./components/Learn"
import store from "./store/index"
import { Button } from "antd"
import { Provider } from "react-redux"
import StateCop from "./components/setState"
import Mobx from "./components/Mobx"
import PropType from "./components/proptype"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"

function Path(props) {
  console.log("TCL: Test -> match", props)
  return (
    <div>
      <h1>{props.location.query && props.location.query.log}</h1>
    </div>
  )
}

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date(), counter: 1, a1: "nihao", arr: [] }
    this.name = "haha"
  }

  // componentDidMount() {
  //   this.timer = setInterval(() => {
  //     //   setState修改状态
  //     this.setState({
  //       date: new Date()
  //       // arr: [...this.state.arr, 1]
  //     })
  //   }, 1000)
  // }

  changeCounter = () => {
    this.setState({
      counter: this.state.counter + 2
    })
  }
  test = p => {
    console.log("TCL: ", this.name, p)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    console.log("TCL: ", "app渲染")
    return (
      <div className='App'>
        <BrowserRouter>
          <div className='tab'>
            <Link to='/'>首页 /</Link>
            <Link to='/test'>测试 /</Link>
            <Link to='/state'>state原理 /</Link>
            <Link to='/learn'>learn /</Link>
            <Link to='/hoc'>hoc /</Link>
            <Link to='/mobx'>mobx /</Link>
            <Link to='/redux'>redux /</Link>
            <Link to='/PropType'>PropType /</Link>
            <Link to='/hook'>hook /</Link>
            <Link to='/composition'>复合组件 /</Link>
            <Link to='/life'>生命周期 /</Link>
            <Link to='/antDesign'>antDesign /</Link>
            <Link to={{ pathname: `/nihao/${this.state.counter}`, query: { log: "666" } }}>
              传参
            </Link>
          </div>
          <Provider store={store}>
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <div className='test'>
                    <Button
                      type='primary'
                      onClick={e => {
                        this.test("wwii")
                      }}>
                      首页按钮
                    </Button>
                  </div>
                )}></Route>
              <Route path='/learn' render={() => <Learn name='hejie'></Learn>}></Route>
              <Route path='/state' component={StateCop}></Route>
              <Route path='/PropType' component={PropType}></Route>
              <Route path='/mobx' component={Mobx}></Route>
              <Route path='/test' component={Test}></Route>
              <Route path='/redux' render={() => <Redux></Redux>}></Route>
              <Route path='/hook' component={Hook}></Route>
              <Route path='/composition' component={Composition}></Route>
              <Route
                path='/life'
                render={() => (
                  <Life title={this.state.counter} arr={this.state.arr}></Life>
                )}></Route>
              <Route
                path='/hoc'
                render={() => (
                  <Hoc arr={this.state.arr} name={this.state.date.getDate()}></Hoc>
                )}></Route>
              <Route
                path='/antDesign'
                render={() => (
                  <Button type='primary' onClick={this.changeCounter}>
                    和杰按钮
                  </Button>
                )}></Route>
              <Route path='/nihao/:counter' component={Path}></Route>
            </Switch>
          </Provider>
        </BrowserRouter>
      </div>
    )
  }
}

export default Clock
