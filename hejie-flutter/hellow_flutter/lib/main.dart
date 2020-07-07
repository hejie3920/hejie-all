import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    // Future.delayed,catchError,whenComplete,wait
    // Future.delayed(new Duration(seconds: 2), () {
    //   return "hi worlddfs!";
    // }).then((data) {
    //   print(data);
    // });
    // // promise.all
    // Future.wait([
    //   // 2秒后返回结果
    //   Future.delayed(new Duration(seconds: 2), () {
    //     return "hello";
    //   }),
    //   // 4秒后返回结果
    //   Future.delayed(new Duration(seconds: 4), () {
    //     return " world";
    //   })
    // ]).then((results) {
    //   print(results[0] + results[1]);
    // }).catchError((e) {
    //   print(e);
    // });

    // Future<int> login(int val) {
    //   return Future.delayed(new Duration(seconds: 2), () {
    //     return val;
    //   });
    // }

    // // async,await
    // task() async {
    //   try {
    //     int id = await login(666);
    //     print(id);
    //     //执行接下来的操作
    //   } catch (e) {
    //     //错误处理
    //     print(e);
    //   }
    // }

    // task();

    // Stream
    // Stream.fromFutures([
    //   // 1秒后返回结果
    //   Future.delayed(new Duration(seconds: 1), () {
    //     return "hello 1";
    //   }),
    //   // 抛出一个异常
    //   Future.delayed(new Duration(seconds: 2), () {
    //     throw AssertionError("Error");
    //   }),
    //   // 3秒后返回结果
    //   Future.delayed(new Duration(seconds: 3), () {
    //     return "hello 3";
    //   })
    // ]).listen((data) {
    //   print(data);
    // }, onError: (e) {
    //   print(e.message);
    // }, onDone: () {});

    return MaterialApp(
      // 注册路由表
      routes: {
        // 'new_page': (context) =>
        //     TipRoute(text: ModalRoute.of(context).settings.arguments)
        'new_page': (context) => NewRoute()
      },
      // // 路由守卫
      // onGenerateRoute: (RouteSettings settings) {
      //   return MaterialPageRoute(builder: (context) {
      //     var routeName = settings;
      //     print(routeName);
      //     // 如果访问的路由页需要登录，但当前未登录，则直接返回登录页路由，
      //     // 引导用户登录；其它情况则正常打开路由。
      //   });
      // },
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.cyan,
        // This makes the visual density adapt to the platform that you run
        // the app on. For desktop platforms, the controls will be smaller and
        // closer together (more dense) than on mobile platforms.
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: '这是第一个flutteredse'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    final testStr = new WordPair.random();
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(testStr.toString()),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
            FlatButton(
              child: Text("打开新路由"),
              textColor: Colors.blue,
              onPressed: () {
                //导航到新路由
                // Navigator.push(context, MaterialPageRoute(builder: (context) {
                //   return RouterTestRoute();
                // }));
                // 打开命名路由
                Navigator.of(context)
                    .pushNamed('new_page', arguments: '命名路由带过来的参数');
                // Navigator.pushNamed(context, 'new_page');
              },
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}

class NewRoute extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var args = ModalRoute.of(context).settings.arguments;
    return Scaffold(
      appBar: AppBar(
        title: Text("New route"),
      ),
      body: Center(
        child: Text(args),
      ),
    );
  }
}

class RouterTestRoute extends StatelessWidget {
  @override
  Widget build(BuildContext context) => Scaffold(
      appBar: AppBar(title: Text('asdfsdf')),
      body: Center(
        child: RaisedButton(
          onPressed: () async {
            // 打开`TipRoute`，并等待返回结果
            var result = await Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) {
                  return TipRoute(
                    // 路由参数
                    text: "我是提示xxxx",
                  );
                },
              ),
            );
            //输出`TipRoute`路由返回结果
            print("路由返回值: $result");
          },
          child: Text("打开提示页"),
        ),
      ));
}

class TipRoute extends StatelessWidget {
  TipRoute({
    Key key,
    @required this.text, // 接收一个text参数
  }) : super(key: key);
  final String text;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("提示"),
      ),
      body: Padding(
        padding: EdgeInsets.all(18),
        child: Center(
          child: Column(
            children: <Widget>[
              Text(text),
              RaisedButton(
                onPressed: () => Navigator.pop(context, "我是返回值"),
                child: Text("返���"),
              )
            ],
          ),
        ),
      ),
    );
  }
}
