import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

import DataStore from "../Http/AsDemo";

export default class AsDemoPage extends Component {
  constructor(props) {
    super(props);
    this.dataStore = new DataStore();
  }
  componentDidMount() {
    let url = `https://api.github.com/search/repositories?q=NodeJS`;
    this.dataStore
      .fetchData(url)
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>测试缓存</Text>
      </View>
    );
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
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
