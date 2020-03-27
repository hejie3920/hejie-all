// PostList.js
import React, { Component } from "react"
import PropTypes from "prop-types"
import { Button, Input } from "antd"

function PostItem(props) {
  const handleClick = () => {
    props.onVote(props.post.id)
  }
  const { post } = props
  return (
    <li className='item'>
      <div className='title'> {post.title} </div>
      <div>
        {" "}
        创建人：<span>{post.author}</span>{" "}
      </div>{" "}
      <div>
        {" "}
        创建时间：<span>{post.date}</span>{" "}
      </div>{" "}
      <div className='like'>
        {" "}
        <button onClick={handleClick}>点赞</button> &nbsp; <span>{post.vote}</span>{" "}
      </div>{" "}
    </li>
  )
}
PostItem.defaultProps = {
  post: {
    id: "12",
    title: "测试"
  }
}
PostItem.propTypes = {
  // post: PropTypes.shape({
  //   id: PropTypes.number,
  //   title: PropTypes.string,
  //   author: PropTypes.string,
  //   date: PropTypes.string,
  //   vote: PropTypes.number
  // }).isRequired,
  // onVote: PropTypes.func.isRequired
  post: PropTypes.object,
  onVote: PropTypes.func
}

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = { posts: [], input: "" }
    this.timer = null
    this.handleVote = this.handleVote.bind(this)
    this.input = React.createRef()
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: "大家一起来讨论React吧",
            author: "张 三",
            date: "2017-09-01 10:00",
            vote: 0
          },
          {
            id: 2,
            title: "前端框架，你最爱哪一个",
            author: "李 四",
            date: "2017-09-01 12:00",
            vote: 0
          },
          {
            id: 3,
            title: "Web App的时代已经到来",
            author: "王 五",
            date: "2017-09-01 14:00",
            vote: 0
          }
        ]
      })
    }, 1000)
  }
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
  handleVote(id) {
    const posts = this.state.posts.map(item => {
      const newItem = item.id === id ? { ...item, vote: ++item.vote } : item
      return newItem
    })
    this.setState({ posts })
  }
  render() {
    return (
      <div>
        <h1>非受控组件</h1>
        <form>
          <label>
            非受控组件: {/* this.input 指向当前input元素 */}
            <input type='text' defaultValue='something' ref={this.input} />
            {/* <input type='text' defaultValue='something' ref={input => this.input = input} /> */}
          </label>
        </form>
        <p>{this.state.input}</p>
        <Button
          onClick={e => {
            let value = this.input.current.value
            this.setState({
              input: value
            })
            console.log("TCL: ", this.input)
          }}>
          提交
        </Button>
        <p>帖子列表：</p>
        <ul>
          {this.state.posts.map(item => (
            <PostItem post={item} onVote={this.handleVote} key={item.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default PostList
