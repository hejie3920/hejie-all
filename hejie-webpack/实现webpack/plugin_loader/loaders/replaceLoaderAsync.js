module.exports = function(source) {
  const options = this.query;
  //定义一个异步处理，告诉webpack,这个loader里有异步事件,在里面调用下这个异步
  const callback = this.async();
  setTimeout(() => {
    const result = source.replace("hejie", options.name);
    callback(null, result);
  }, 500);
};
