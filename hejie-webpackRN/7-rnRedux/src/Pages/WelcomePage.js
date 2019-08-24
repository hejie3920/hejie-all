import React, { Component } from "react";
import { Platform, StyleSheet, Button, Text, View } from "react-native";

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      const { navigation } = this.props;
      navigation.navigate("Main");
    }, 500);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to WelcomePage!</Text>
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
  }
});
