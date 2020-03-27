import React, { Component, PureComponent } from "react"
import { View, Text, StyleSheet } from "react-native"
import { WebView } from "../../../reactnative/reactnativebaseUI/src/Pages/node_modules/react-native-webview"

export default class DetailPage extends Component {
  render() {
    return <WebView source={{ uri: "https://www.baidu.com" }} style={{ marginTop: 20 }} />
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
})
