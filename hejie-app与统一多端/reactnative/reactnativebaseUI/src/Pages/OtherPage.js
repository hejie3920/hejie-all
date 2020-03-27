<View style={styles.container}>
    <Text style={styles.text}>HomePage</Text>
    <Button
        title="跳转到我的页面"
        onPress={() => {
            this.props.navigation.navigate("My", {
                title: "我的"
            });
            // console.log(this.props);
        }}
    />
    <Button
        title="跳转到热门页面"
        onPress={() => {
            this.props.navigation.navigate("Hot", {
                title: "热门"
            });
            // console.log(this.props);
        }}
    />
</View> 
    <View style={styles.container}>
        <Button
            title="ActivityIndicator"
            onPress={() => {
                this.props.navigation.navigate("ActivityIndicatorPage");
            }}
        />
        <Image
            style={{ width: 50, height: 50 }}
            source={{
                uri:
                    "https://facebook.github.io/react-native/docs/assets/favicon.png"
            }}
        />
        <ImageBackground
            source={{
                uri:
                    "https://img.alicdn.com/tfs/TB1CkfGbhD1gK0jSZFyXXciOVXa-520-280.jpg"
            }}
            style={{
                width: "100%",
                height: "50%",
                justifyContent: "center",
                alignContent: "center"
            }}
        >
            <Text>Inside</Text>
        </ImageBackground>