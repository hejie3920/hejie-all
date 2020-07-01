import { combineReducers } from "redux";
import { rootCom, RootNavigator } from "../Navigator/AppNavigator";

//1.指定默认state
const navState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(rootCom)
);

/**上面的代码创建了一个导航action(表示我想打开rootCom)，那么我们就可以通过action创建导航state，通过方*法getStateForAction(action, oldNavigationState)
 *俩参数，一个是新的action，一个是当前的导航state，返回新的状态，当没有办法执行这个action的时候，就返回*null。
 **/

/**
 * 2.创建自己的 navigation reducer，
 */
const navReducer = (state = navState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  // 如果`nextState`为null或未定义，只需返回原始`state`
  return nextState || state;
};

/**
 * 3.合并reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const index = combineReducers({
  nav: navReducer
});

export default index;
