export default function({route, redirect}) {
    // 中间件可以获得上下文，里面有各种有用信息
    // 常用的有app, route, redirect, store
    if (route.path === '/') {
        redirect('/main')
    }
}