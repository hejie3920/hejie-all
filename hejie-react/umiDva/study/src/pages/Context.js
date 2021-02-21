/* eslint-disable */
import React, { Component, PureComponent, useContext, memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
const TestContext = React.createContext();
const TestProvider = TestContext.Provider;

// 第一种：类组件static contextType = TestContext;
class Son extends PureComponent {
  static contextType = TestContext;
  constructor(props) {
    super(props);
    console.warn('TCL: ', this);
    this.state = {
      num: 0,
    };
  }
  render() {
    console.warn('TCL: ', '不应该出来的');
    const { name } = this.context;
    return (
      <div>
        {name}
        <p>{this.props.age}</p>
        <p>{this.state.num}</p>
        <button
          onClick={e => {
            this.setState({ num: this.state.num + 1 });
          }}
        >
          点击
        </button>
      </div>
    );
  }
}

// 第二种

// const Son = memo(() => {
//   const ctx = useContext(TestContext);
//   return (
//     <div>
//       <p>{ctx.name}</p>
//     </div>
//   );
// });

// 注意，如果是在provider下面，组件一旦重新渲染，provider的值引用也会变，尽管两个值从来没变，这就会造成
// 子组件也会渲染，比如写明
Son.propTypes = {
  age: PropTypes.number,
};
class Context extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: {
        name: 'hejie',
      },
    };
  }
  click = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.warn('TCL: 🐖渲染');
    return (
      // 这种写法会造成一旦该组件重新渲染的话，value的对象引用也会变化会导致所有子组件也会重新渲染
      // <TestProvider value={{ name: 'hejie' }}>
      // 这时候把状态提升到外部来管理，value的值引用就由外部state来管理，只要对象不会变就不会变引用
      // 这种写法没问题
      <TestProvider value={this.state.value}>
        <h1>{this.state.count}</h1>
        <Son age={24}></Son>
        <Button type="primary" onClick={this.click}>
          渲染父组件
        </Button>
      </TestProvider>
    );
  }
}

Context.propTypes = {};

export default Context;
