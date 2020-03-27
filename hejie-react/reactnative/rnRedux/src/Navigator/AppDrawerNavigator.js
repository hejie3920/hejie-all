import React from "react";

import { createAppContainer, createDrawerNavigator } from "react-navigation";

import HomePage from "../Pages/HomePage";
import MyPage from "../Pages/MyPage";
import Ionicons from "react-native-vector-icons/Ionicons";
const AppNavigator = createDrawerNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      drawerLabel: "首页",
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons name={"ios-home"} size={20} style={{ color: tintColor }} />
      )
    }
  },
  MyPage: {
    screen: MyPage
  }
});

export default createAppContainer(AppNavigator);
