import React, { Component } from "react";
import { Platform, StyleSheet, Button, Text, View } from "react-native";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NavigationUtil from "../Navigator/NavigationUtil";
import IndexPage from "./IndexPage";
import MyPage from "./MyPage";
const TABS = {
  IndexPage: {
    screen: IndexPage,
    navigationOptions: {
      tabBarLabel: "首页",
      tabBarIcon: ({ tintColor, focused }) => {
        return (
          <FontAwesome name={"home"} size={26} style={{ color: tintColor }} />
        );
      }
    }
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: "我的",
      tabBarIcon: ({ tintColor, focused }) => {
        return (
          <FontAwesome name={"cog"} size={26} style={{ color: tintColor }} />
        );
      }
    }
  }
};

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }
  TabNavigator() {
    return createAppContainer(createBottomTabNavigator(TABS));
  }
  render() {
    NavigationUtil.props = this.props;
    const Tabs = this.TabNavigator();
    return <Tabs />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
