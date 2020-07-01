import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class DetailPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>DetailPage</Text>
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
