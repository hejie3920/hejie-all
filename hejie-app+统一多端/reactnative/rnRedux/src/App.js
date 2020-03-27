import React, { Component } from "react";
import { Provider } from "react-redux";
import AppNavigator from "./Navigator/AppNavigator";
import store from "./Store";

export default class App extends Component {
  render() {
    /**
     * 将store传递给App框架
     */
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
