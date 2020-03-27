module.exports = {
    db:{
        dialect:'mysql',
        host:'localhost',
        database:'hejieba',
        username:'root',
        password:'example'
    },
    middleware: ['logger'] // 以数组形式，保证执行顺序
}