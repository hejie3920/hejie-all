import React, { Component } from "react"

export default class hello extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "hejie"
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "787878" })
    }, 2000)
  }
  render() {
    return <div>{this.state.name}</div>
  }
}
