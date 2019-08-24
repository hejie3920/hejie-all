import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  SafeAreaView,
  View
} from "react-native";
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import NavigationUtil from "../Navigator/NavigationUtil";

// {
//   js:{
//     screen:js
//   },
//   ios: {
//     screen: ios
//   },
//   html: {
//     screen: html
//   }
// }

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.tabsName = ["Html", "Css", "js", "vue", "react", "nodeJs"];
  }
  genTabs() {
    const obj = {};
    this.tabsName.forEach((item, index) => {
      obj[`${item}`] = {
        screen: props => {
          return <IndexTab {...props} tabName={item} />;
        }
      };
    });
    return obj;
  }
  render() {
    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator(this.genTabs(), {
        lazy: true,
        tabBarOptions: {
          upperCaseLabel: false,
          scrollEnabled: true
        }
      })
    );
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TabNavigator />
      </SafeAreaView>
    );
  }
}

class IndexTab extends Component {
  render() {
    const { tabName } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{tabName}</Text>
        <Button
          title="进入详情"
          onPress={() => {
            NavigationUtil.props.navigation.navigate("DetailPage");
          }}
        />
        <Button
          title="进入离线缓存框架测试"
          onPress={() => {
            NavigationUtil.props.navigation.navigate("AsDemoPage");
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
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
