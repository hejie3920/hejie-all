import { Component } from "react"
import "./client.scss"

export default class extends Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return <div className='client'>Hello World{this.props.userAgent}</div>
  }
}
