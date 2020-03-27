import React, { Component, PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  SectionList,
  RefreshControl
} from "react-native";
import { WebView } from "react-native-webview";

const CITY_NAMES = [
  { data: ["广州", "上海", "广州", "深圳"], title: "一线" },
  {
    data: ["杭州", "苏州", "成都", "武汉"],
    title: "二三线1"
  },
  { data: ["郑州", "洛阳", "厦门", "青岛", "拉萨"], title: "二三线2" }
];

export default class ListPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: CITY_NAMES,
      isLoading: false
    };
  }

  _renderItem(data) {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{data.item}</Text>
      </View>
    );
  }
  loadData(refresh) {
    if (refresh) {
      this.setState({
        isLoading: true
      });
    }
    setTimeout(() => {
      let dataArray = [];
      if (refresh) {
        for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
          dataArray.push(this.state.dataArray[i]);
        }
      } else {
        dataArray = this.state.dataArray.concat(CITY_NAMES);
      }
      this.setState({
        dataArray: dataArray,
        isLoading: false
      });
    }, 2000);
  }
  genIndicator() {
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          style={styles.indicator}
          size="large"
          animating={true}
        />
        <Text>正在加载更多</Text>
      </View>
    );
  }
  _renderSectionHeader({ section }) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.text}>{section.title}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.dataArray}
          renderItem={data => this._renderItem(data)}
          renderSectionHeader={data => this._renderSectionHeader(data)}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 2, backgroundColor: "gold" }} />;
          }}
          refreshControl={
            <RefreshControl
              title="Loading..."
              colors={["red"]}
              refreshing={this.state.isLoading}
              onRefresh={() => this.loadData(true)}
              tintColor={"orange"}
            />
          }
          ListEmptyComponent={() => {}}
          ListFooterComponent={() => this.genIndicator()}
          onEndReachedThreshold={0.4}
          onEndReached={() => {
            this.loadData();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  item: {
    height: 80,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  sectionHeader: {
    height: 50,
    backgroundColor: "#93ebbe",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20
  }
});
