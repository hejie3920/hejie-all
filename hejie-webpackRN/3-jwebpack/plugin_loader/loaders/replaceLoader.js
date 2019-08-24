module.exports = function(source) {
  return source.replace("和杰", "word");
};

// module.exports = function(source) {
//   //   console.log(this.query);
//   //   this.callback(null, code);
//   const callback = this.async();
//   setTimeout(() => {
//     const code = source.replace("world", this.query.name);

//     callback(null, code);
//   }, 3000);
// };
