/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor() {
    super();
    //忽略黄色警告
    console.disableYellowBox = true;
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.div1,
            { justifyContent: "center", fontSize: 20, color: "red" }
          ]}
        >
          <Text style={{ color: "#000000" }}>Welcome1 </Text>
        </View>
        <View style={styles.div2}>
          <Text style={styles.welcome}>Welcome2 </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  div1: {
    flex: 1,
    backgroundColor: "blue",
    marginTop: 10
  },
  div2: {
    flex: 1,
    backgroundColor: "gold",
    marginTop: 10
  },
  welcome: {
    fontSize: 20,
    color: "#ffffff"
  },
  instructions: {
    textAlign: "center",

    marginBottom: 5
  }
});
