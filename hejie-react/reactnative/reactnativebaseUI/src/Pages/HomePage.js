import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Switch,
  ImageBackground,
  Modal,
  TouchableHighlight,
  SafeAreaView,
  TextInput,
  WebView
} from "react-native";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      one: "",
      two: true,
      three: "",
      modalVisible: false,
      text: ""
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
        <View style={styles.container}>
          <Button
            title="webview"
            onPress={() => {
              this.props.navigation.navigate("WebViewPage");
            }}
          />
          <Button
            title="FlatList"
            onPress={() => {
              this.props.navigation.navigate("ListPage");
            }}
          />
          <Switch
            value={this.state.one}
            trackColor={{
              true: "red",
              false: "#000"
            }}
            disabled={true}
            onValueChange={value => {
              this.setState({
                one: value
              });
            }}
          />
          <Switch
            value={this.state.two}
            trackColor={{
              true: "red",
              false: "#000"
            }}
            onValueChange={value => {
              this.setState({
                two: value
              });
            }}
          />
          <Switch
            value={this.state.three}
            trackColor={{
              true: "red",
              false: "#000"
            }}
            onValueChange={value => {
              this.setState({
                three: value
              });
            }}
          />
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert("Modal has been closed.");
            }}
          >
            <View style={{ marginTop: 22 }}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Text>Show Modal</Text>
          </TouchableHighlight>
          <Text ellipsizeMode={"head"} numberOfLines={1} selectable={true}>
            {this.state.text}
          </Text>
          <TextInput
            style={{
              width: 100,
              height: 40,
              borderWidth: 3,
              borderColor: "blue",
              margin: 0,
              padding: 0
            }}
            onChangeText={value => {
              this.setState({
                text: value
              });
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingBottom: 100
  },
  text: {
    fontSize: 26
  }
});
