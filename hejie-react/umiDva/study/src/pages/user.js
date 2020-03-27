import styles from './user.css';
import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.user,
});
@connect(mapStateToProps)
class user extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch({ type: 'user/asyncFetch', payload: 'nihao' });
  }

  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={e => {
            this.props.dispatch({
              type: 'user/asyncFetch',
              payload: '爸爸',
            });
          }}
        >
          点击
        </Button>

        {this.props.user.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    );
  }
}

export default user;
