import React, { Component, PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          ref={el => {
            this.webviewRef = el;
          }}
          source={require("./index.html")}
          // injectedJavaScript={"test()"}
          // onLoadEnd={() => {
          //   this.webviewRef.postMessage("来自RN的信息");
          // }}
          onMessage={e => {
            console.log(e.nativeEvent.data);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden"
  },
  text: {
    fontSize: 26
  }
});
