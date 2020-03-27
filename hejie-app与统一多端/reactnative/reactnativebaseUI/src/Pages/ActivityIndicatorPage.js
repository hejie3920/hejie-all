import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default class ActivityIndicatorPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>小菊花</Text>
        <ActivityIndicator size="large" animating={true} color="red" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  },
  text: {
    fontSize: 26
  }
});
