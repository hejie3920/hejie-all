const fetch = require("node-fetch");
let flag = 1;
const url = "https://www.cy988.net/msjz/guanglikecheng/4208.html";

function limitLoad(urls, handler, limit) {
  const sequence = [].concat(urls);
  let promises = [];
  promises = sequence.splice(0, limit).map((url, index) => {
    return handler(url).then(() => {
      return index;
    });
  });
  let p = Promise.race(promises);
  for (let i = 0; i < sequence.length; i++) {
    p = p.then((res) => {
      promises[res] = handler(sequence[i]).then(() => {
        return res;
      });
      return Promise.race(promises);
    });
  }
}

function RandomNum(...args) {
  let range = args.length - 1;
  return args[Math.round(Math.random() * range)];
}
function RandomHeader() {
  const ip = new Array(4)
    .fill(0)
    .map(() => parseInt(Math.random() * 255))
    .join(".");
  const index = RandomNum(0, 1);
  return {
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded",
      "Postman-Token": Date.now(),
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
      "X-Forwarded-For": ip,
    },
    rejectUnauthorized: false,
  };
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    fetch(url, RandomHeader()).then((res) => {
      console.log("TCL: flag", flag);
      flag++;
      resolve(true);
    });
  });
}
let tmp = new Array(15000).fill(url);
limitLoad(tmp, fetchUrl, 20);
// let tmp = new Array(19).fill(0).map((i, d) => d);
// limitLoad(tmp, loadImg, 3);

// setInterval(() => {
//   fetch(url).then((res) => {
//     console.log("TCL: flag", flag);
//   });
//   flag++;
// }, 100);
