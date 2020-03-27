import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import HomePage from "../Pages/HomePage";
import HotPage from "../Pages/HotPage";
import MyPage from "../Pages/MyPage";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SwipeableFlatListDemo from "../Pages/SwipeableFlatListDemo";

import SectionListDemo from "../Pages/SectionListDemo";

import TabBarItem from "../Pages/TabBarItem";

const AppBottomNavigator = createBottomTabNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        tabBarLabel: "首页",
        tabBarIcon: ({ tintColor, focused }) => {
          return (
            <FontAwesome name={"home"} size={26} style={{ color: tintColor }} />
          );
        }
      }
    },
    HotPage: {
      screen: HotPage,
      navigationOptions: {
        tabBarLabel: "热门",
        // tabBarIcon: ({ focused, tintColor }) => (
        //   <TabBarItem
        //     tintColor={tintColor}
        //     focused={focused}
        //     normalnormalImage={"../pics/logo.png"}
        //     selectedImage={"../pics/timg.jpeg"}
        //   />
        // )
        tabBarIcon: ({ tintColor, focused }) => {
          return (
            <FontAwesome name={"fire"} size={26} style={{ color: tintColor }} />
          );
        }
      }
    },
    MyPage: {
      screen: MyPage,
      navigationOptions: {
        tabBarLabel: "我的",
        tabBarIcon: ({ intColor, focused }) => {
          return (
            <Image
              style={{ width: 26, height: 26 }}
              source={
                focused
                  ? require("../pics/logo.png")
                  : require("../pics/timg.jpeg")
              }
            />
          );
        }
        // tabBarIcon: ({ tintColor, focused }) => {
        //   return (
        //     <Ionicons
        //       name={"ios-person"}
        //       size={26}
        //       style={{ color: tintColor }}
        //     />
        //   );
        // }
      }
    },
    SwipeableFlatListDemo: {
      screen: SwipeableFlatListDemo,
      navigationOptions: {
        tabBarLabel: "侧滑"
      }
    },
    SectionListDemo: {
      screen: SectionListDemo,
      navigationOptions: {
        tabBarLabel: "分组"
      }
    }
  },
  {
    // initialRouteName: HotPage
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "#000000",
      style: { borderTopWidth: 1, borderTopColor: "red" }
    }
  }
);

export default createAppContainer(AppBottomNavigator);
