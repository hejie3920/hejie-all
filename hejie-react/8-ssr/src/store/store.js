import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
import userReducer from './user'

const reducer = combineReducers({
     index: indexReducer,
     user: userReducer
})

//创建store

// const store = createStore(reducer,applyMiddleware(thunk))
// export default store

// 客户端store
export const getClientStore = ()=>{
  // 存放在window全局上下文里面
  const defaultState = window.__context ? window.__context : {}
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}

// 服务端用store
export const getServerStore = () => {
  // 通过server的dispatch初始化
  return createStore(reducer, applyMiddleware(thunk))
}