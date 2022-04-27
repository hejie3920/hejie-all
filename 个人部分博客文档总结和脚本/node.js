const _ = require("lodash");


let test = () => {
  console.log("TCL: nihao");
};
test = _.throttle(test, 2000);
test();
setInterval(() => {
  test();
}, 1000);
