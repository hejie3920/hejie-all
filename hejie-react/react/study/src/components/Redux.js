import React, { Component } from "react"
import { addUser, asyncFetch } from "../store/user"
import { connect } from "react-redux"

const mapStateToProps = state => ({
  list: state.goods.list
})
const mapDispatchToProps = {
  addUser,
  asyncFetch
}

@connect(mapStateToProps, mapDispatchToProps)
class Redux extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.asyncFetch({ name: "778787" })
    }, 2000)
  }
  render() {
    return (
      <div>
        <h2>redux</h2>
        <p>{this.props.list.name}</p>
      </div>
    )
  }
}

export default Redux
