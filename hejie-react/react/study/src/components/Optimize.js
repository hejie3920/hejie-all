import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()

function ChildNonTheme() {
  console.log('不关心皮肤的子组件渲染了')
  return <div>我不关心皮肤，皮肤改变的时候别让我重新渲染！</div>
}

function ChildWithTheme() {
  const theme = useContext(ThemeContext)
  return <div>我是有皮肤的哦~ {theme}</div>
}

/**
 没错，唯一的区别就是我把控制状态的组件和负责展示的子组件给抽离开了，通过 children 传入后直接渲染，
 由于 children 从外部传入的，也就是说 ThemeApp 这个组件内部不会再有 React.createElement 这样的代码，
 那么在 setTheme 触发重新渲染后，children 完全没有改变，所以可以直接复用。
 让我们再看一下被 ThemeApp 包裹下的 <ChildNonTheme />，它会作为 children 传递给 ThemeApp，
 ThemeApp 内部的更新完全不会触发外部的 React.createElement，所以会直接复用之前的 element 结果

 这个优化也可以用memo包裹子组件来做
 
 */
function ThemeApp({ children }) {
  const [theme, setTheme] = useState('light')
  const onChangeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={onChangeTheme}>改变皮肤</button>
      {children}
    </ThemeContext.Provider>
  )
}

export default function App() {
  return (
    <ThemeApp>
      <ChildWithTheme />
      <ChildNonTheme />
      <ChildNonTheme />
      <ChildNonTheme />
      <ChildNonTheme />
      <ChildNonTheme />
      <ChildNonTheme />
      <ChildNonTheme />
    </ThemeApp>
  )
}

// old
// const ThemeContext = React.createContext()

// export function ChildNonTheme() {
//   console.log('不关心皮肤的子组件渲染了')
//   return <div>我不关心皮肤，皮肤改变的时候别让我重新渲染！</div>
// }

// export function ChildWithTheme() {
//   const theme = useContext(ThemeContext)
//   return <div>我是有皮肤的哦~ {theme}</div>
// }

// 这本质上是由于 React 是自上而下递归更新，<ChildNonTheme /> 这样的代码会被 babel 翻译成 React.createElement(ChildNonTheme)
// 这样的函数调用，React官方经常强调 props 是immutable 的，所以在每次调用函数式组件的时候，都会生成一份新的 props 引用
// export default function App() {
//   const [theme, setTheme] = useState('light')
//   const onChangeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
//   return (
//     <ThemeContext.Provider value={theme}>
//       <button onClick={onChangeTheme}>改变皮肤</button>
//       <ChildWithTheme />
//       <ChildNonTheme />
//       <ChildNonTheme />
//       <ChildNonTheme />
//       <ChildNonTheme />
//       <ChildNonTheme />
//       <ChildNonTheme />
//       <ChildNonTheme />
//     </ThemeContext.Provider>
//   )
// }
