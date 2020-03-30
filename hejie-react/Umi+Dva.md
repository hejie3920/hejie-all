# Umi+Dva

## 所有配置

[基本包含 webpack 的所有配置](https://umijs.org/zh/config/#routes)

- treeShaking，ssr，copy, proxy, ignoreMomentLocale, autoPrefixer....

## 运行时配置

- src/app.js
- patchRoutes 用于在运行时修改路由。
- onRouteChange
- rootContainer
- modifyRouteProps

## start

- yarn create umi yarn start
  umi g page index
  [官网各种例子](https://umijs.org/guide/examples.html#official)

## 结构

```
.
├── dist/            // 默认build的目录
├── mock/            // mock目录
├── config/
  ├── config.js    // umi配置文件, 也可以根目录.umirc.js，选一个
└── src/
  ├──layouts/index.js
  ├── pages/
      ├── .umi/       //temp directory, need to be added to .gitignore
      ├── .umi-production/
      ├── document.ejs            // HTML template
      ├── 404.js                  // 404 page
      ├── page1.js
      ├── page1.test.js
      └── page2.js
  ├── global.css
  ├── global.js            // can add polyfill here
├── .umirc.js   // umi configuration, choose one
├── .env          // environment variable
└── package.json

```

## mock

```
export default {
'POST /api/forms': (req, res) => {
  setTimeout(() => {
    res.send('Ok');
  }, 1000);
},
};

```

## 路由

1. 在 umi 中，如果具有\$后缀，则动态路由是可选的动态路由。

```
+ pages/
+ users/
  - $id$.js
- index.js
路由配置将生成如下：

[
{ path: '/': component: './pages/index.js' },
{ path: '/users/:id?': component: './pages/users/$id$.js' },
]

```

2. 如果你喜欢使用配置的路线，你可以配置 routes 在配置文件中任一.umirc.(ts|js)或 config/config.(ts|js)，此配置项目不会被解析为 src/pages 目录
3. 路由过渡 import { TransitionGroup, CSSTransition } from "react-transition-group";
4. 面包屑 react-router-breadcrumbs-hoc
5. 确定是否滚动到 componentDidUpdate 布局组件的顶部
6. 跳转，<Link to="/list">Go to list page</Link> 或者 router.push('/list');
   }

## umi-env 配置文件区分环境

```
// .umirc.js
export default { a: 1, b: 2 };

// .umirc.cloud.js
export default { b: 'cloud', c: 'cloud' };

// .umirc.local.js
export default { c: 'local' };

```

## 配合 dva 使用

1. 在 umi 的 plugin 里面加入 dva，使用 immer 模式，写得会很舒服
2. /src/models/写 model
3. 写法

```
import * as api from '../until/getpro';
export default{
	//命名空间
	namespace:'info',
	state:{
		name:'和杰',
		age:24,
		des:"真帅呀！！！",
		list:[]
	},
	//处理state－－同步
	reducers:{
		change(state,{payload}){
			return {...state,...payload}
		}
	},
	// 异步
	// yield表示后面的方法执行完以后 call表示调用一个api接口
	// put表示一个派发
	effects:{
		*getData(payload,{call,put}){
			console.log(payload)
			const result=yield call(api.getProList,payload.payload)
			console.log(result)
			yield put({
				type:'change',
				payload:{
					list:result.data.data
				}
			})
		}
}

use:
import {connect} from 'dva';
 function Index(props) {
  return (
    <div>
      <h1>Page index</h1>
	  <Button type="primary"
		onClick={()=>props.dispatch({
			type:'info/change',
			payload:{
				age:props.age-1
			}
		})}
	  >设置年龄</Button>
	  <h2>{props.name}</h2>
	  <Button type="primary"
		onClick={()=>props.dispatch({
			type:'info/getData',
			payload:{
				uid:19802,
				pagesize:50
			}
		})}
	  >获取数据</Button>
	  {
		  props.list.map((item)=>{
			  return(<div key={item.pid}>{item.pname}</div>)
		  })
	  }
    </div>
  );
}
```

## 按需加载

- 配置文件 plugin 里面配置 umi-plugin-react 实现路由懒加载
- 按需加载组件，通过该 umi/dynamic 接口实现
- 按需加载模块由 import().then 实现
