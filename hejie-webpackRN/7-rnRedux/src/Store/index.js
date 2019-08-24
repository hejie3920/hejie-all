import { applyMiddleware, createStore } from "redux";
import reducers from "../Reducer";
import { middleware } from "../Navigator/AppNavigator";

const middlewares = [middleware];
/**
 * 创建store
 */
export default createStore(reducers, applyMiddleware(...middlewares));
