const request = require("request");
const userAgents = require("./agents.js");

const target = "https://www.cy988.net/msjz/shangxueyuan/34250.html";
main();
const flag = 0;

async function main() {
  let proxyIPs = await getProxyIPs();

  // for (let proxyIP of proxyIPs) {
  //   let IPCanUse = await testProxyIP(proxyIP)
  //   console.log(proxyIp, IPCanUse)
  // }

  let proxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
  let IPCanUse = await testProxyIP(proxyIP);
  console.log(proxyIp, IPCanUse);
}

// 获取一批代理 IP
async function getProxyIPs() {
  let url =
    "http://www.66ip.cn/mo.php?sxb=&tqsl=100&port=&export=&ktip=&sxa=&submit=%CC%E1++%C8%A1&textarea=http%3A%2F%2Fwww.66ip.cn%2F%3Fsxb%3D%26tqsl%3D100%26ports%255B%255D2%3D%26ktip%3D%26sxa%3D%26radio%3Dradio%26submit%3D%25CC%25E1%2B%2B%25C8%25A1";
  let options = {
    method: "GET",
    url,
    gzip: true,
    encoding: null,
    headers: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
      referer: "http://www.66ip.cn/",
    },
  };
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(
          body.toString().match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,4}/g)
        );
      } else {
        console.log("getProxyIPs error", error);
        reject(error);
      }
    });
  }).catch(console.log);
}

// 测试代理 IP 是否可用
async function testProxyIP(proxyIp) {
  let userAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
  return new Promise((resolve, reject) => {
    //这里修改成你要访问的目标网站
    console.log(`开始测试这个IP ${proxyIp}`);
    let options = {
      method: "GET",
      url: target,
      proxy: `http://${proxyIp}`,
      headers: { "User-Agent": userAgent },
      timeout: 5000,
    };

    request(options, (error, response, body) => {
      console.log(flag);
      if (!error && response.statusCode === 200) {
        falg++;
        resolve(true);
      } else {
        console.log("testProxyIP error", error);
        reject(false);
      }
    });
  }).catch(console.log);
}
