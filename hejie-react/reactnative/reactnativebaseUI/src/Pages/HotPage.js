import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class HotPage extends Component {
  //   static navigationOptions = {
  //     headerTitle: "xxx"
  //   };
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam("title")
    };
  };
  render() {
    console.log(this.props.navigation.getParam("title"));
    return (
      <View style={styles.container}>
        <Text style={styles.text}>HotPage</Text>
        <Button
          title="更新title参数"
          onPress={() => {
            this.props.navigation.setParams({
              title: "更新之后的"
            });
          }}
        />
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
