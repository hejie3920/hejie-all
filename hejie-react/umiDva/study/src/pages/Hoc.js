/* eslint-disable */
// React 的 diff 算法（称为协调）使用组件标识来确定它是应该更新现有子树还是将其丢弃并挂载新
// 子树。 如果从 render 返回的组件与前一个渲染中的组件相同（ === ），则 React 通过将子树与
// 新子树进行区分来递归更新子树。 如果它们不相等，则完全卸载前一个子树。
import React, { Component, useState, useEffect } from 'react';
import { Input } from 'antd';

export const fhoc = Comp => props => {
  console.warn('TCL: ', '加边界');
  return (
    <div className="border">
      <Comp {...props}></Comp>
    </div>
  );
};
export const fhocWithP = p => Comp => props => {
  console.warn('TCL: ', '有参数的高阶');
  return (
    <div>
      <h1>{p}</h1>
      <Comp {...props}></Comp>
    </div>
  );
};

export const classHoc = Comp =>
  class NewComponent extends Component {
    componentDidMount() {
      console.log('高阶返回一个类组件');
    }
    render() {
      return <Comp />;
    }
  };

@fhoc
@fhoc
@fhocWithP('带参')
@classHoc
class Hoc extends React.PureComponent {
  componentDidMount() {
    console.warn('TCL: ', '组件挂载');
  }
  render() {
    console.warn('TCL: ', '渲染');
    return (
      <div>
        <a href="/">我是func组件</a>
        <h1>{this.props.name}</h1>
        {/* <div>
          {this.props.arr.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div> */}
        <Composition color="red">{params => <b>{params}</b>}</Composition>
      </div>
    );
  }
}
function Composition(props) {
  return <div style={{ background: props.color }}>{props.children('测试')}</div>;
}

export default Hoc;

// // 状态提升高阶组件封装input框
// export const withState = Comp => props => {
//   const [value, setValue] = useState('');
//   let handleChange = e => {
//     setValue(e.target.value);
//   };
//   useEffect(() => {
//     console.warn('TCL: ', 'haha');
//     setValue('123123');
//   }, []);
//   let newProps = {
//     hocState: {
//       value,
//       onChange: handleChange,
//     },
//   };
//   return <Comp {...props} {...newProps}></Comp>;
// };
// class NewComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//     };
//   }
//   render() {
//     const newProps = {
//       hocState: {
//         value: this.state.value,
//         onChange: this.handleChange,
//       },
//     };
//     return <Comp {...newProps} {...this.props} />;
//   }
// }

// @withState
// class SimpleControlledComponent extends React.Component {
//   render() {
//     //此时的SimpleControlledComponent为无状态组件，状态由高阶组件 维护
//     return (
//       <div>
//         <h3>状态管理提升到高阶组件里面</h3>
//         <Input placeholder="请输入" name="simple" {...this.props.hocState} />
//         <p>{this.props.hocState.value}</p>
//       </div>
//     );
//   }
// }
// export default SimpleControlledComponent;

// 懒加载高阶
// import React, { Component } from "react"
// /**
//  * 异步加载模块
//  * @param {*} importComponent
//  */
// export default function asyncComponent(importComponent) {
//   class AsyncComponent extends Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//         component: null
//       }
//     }

//     async componentDidMount() {
//       const { default: component } = await importComponent()

//       this.setState({ component })
//     }

//     render() {
//       const C = this.state.component

//       return C ? <C {...this.props} /> : null
//     }
//   }
//   return AsyncComponent
// }
// use: const info = asyncComponent(() => import("@/pages/info/info"))
// const setUser = asyncComponent(() => import("@/pages/set_user/set_user"))
// const msite = asyncComponent(() => import("@/pages/msite/msite"))
// const shop = asyncComponent(() => import("@/pages/shop/shop"))
// const food = asyncComponent(() => import("@/pages/food/food"))
// const technology = asyncComponent(() => import("@/pages/technology/technology"))

// 高阶组件时把静态方法也给包进来
// 但要这样做，你需要知道哪些方法应该被拷贝。你可以使用 hoist-non-react-statics 自动拷贝所有非 React 静态方法:

// import hoistNonReactStatic from 'hoist-non-react-statics';
// function enhance(WrappedComponent) {
//   class Enhance extends React.Component {/*...*/}
//   hoistNonReactStatic(Enhance, WrappedComponent);
//   return Enhance;
// }
