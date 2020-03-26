import React, { useState, useEffect, Component } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { getUserInfo } from "../store/user"

function User(props) {
  return <Redirect to='/about' />

  return (
    <div>
      {props.userinfo.name ? (
        <h1>
          用户name: {props.userinfo.name},用户best:{props.userinfo.best}!
        </h1>
      ) : (
        <div>这接口被我故意搞坏了，没数据嘻嘻嘻</div>
      )}
    </div>
  )
}

User.loadData = store => {
  return store.dispatch(getUserInfo())
}
export default connect(state => ({ userinfo: state.user.userinfo }))(User)
