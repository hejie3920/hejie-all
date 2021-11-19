<template>
  <div class="yunyun">
    <div>名字：<input type="text" v-model="name" placeholder="请输入名字" /></div>
    <div>颁发人：<input type="text" v-model="applier" placeholder="请输入颁发人" /></div>
    <div>颁发奖项：<input type="text" v-model="reward" placeholder="请输入奖项" /></div>
    <p class="hint">把图片放在img文件夹里面，然后这里填入你想要的证书图片名字就好了</p>
    <div>证书图片：<input type="text" @blur="inputBlur" :value="bg" placeholder="请输入证书图片名字" /></div>
    <p class="hint">用“||”将特殊文案分割开来</p>
    <div>奖项文案：<textarea name="" v-model="content" id=""></textarea></div>
    <hr />
    <h2>右边是预览，你怎么调整都可以，可以实时变化的，预览图就是最后截图</h2>
    <p class="hint">
      右边是预览，你可以F12打开控制台-右键想调整的节点-检查，然后再内联style里面调整样式或者替换文本什么都可以，样式的话必须是改在内联里面才有效，然后点生成也可以生成你调整的样子
    </p>
    <p class="hint">上面填的信息会自动存储记忆下来</p>
    <mt-button type="danger" @click="capture">输入信息后点击我生成</mt-button>
    <hr />
    <h2>结果图在下面,如果是本地打开的话只能右键保存不能自动自动下载</h2>
    <div id="resBox"></div>
    <!-- <img class="targetImg" crossOrigin="Anonymous" :src="resImg" /> -->
    <div id="box">
      <img class="" :src="require(`../assets/${bg}`)" />
      <div class="desc">
        {{ contentArr[0] }}
        <span class="spec"> “{{ name }}” </span>
        {{ contentArr[1] }}
        <span class="spec"> “{{ reward }}” </span>
        <span v-for="(item, index) in contentArr.slice(2)" :key="index">{{ item }}</span>
      </div>
      <p class="name">{{ applier }}</p>
      <p class="date">{{ dateFormat("YYYY年mm月dd日", date) }}</p>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas"
import { Indicator } from "mint-ui"
import { dateFormat, $, downloadIamge } from "../utils"

export default {
  name: "HelloWorld",
  data() {
    return {
      name: "傻逼芸芸",
      applier: "芸芸才华实在有限公司",
      reward: "傻逼芸芸颁发的傻逼奖项",
      date: new Date(),
      bg: "yunyun.png",
      content: `恭喜||这个傻逼获得||奖项，为了鼓励她在这条傻逼路上越走越远`,
      resImg: ""
    }
  },
  props: {
    msg: String
  },
  computed: {
    contentArr() {
      if (!this.content) return []
      return this.content.split("||") || []
    }
  },
  created() {
    let memo = localStorage.getItem("yunyunCanvas")
    if (memo && typeof memo === "string") {
      memo = JSON.parse(memo)
      for (let i in memo) {
        this[i] = memo[i]
      }
    }
  },
  methods: {
    inputBlur(e) {
      this.bg = e.target.value
    },
    capture() {
      if (!this.name) {
        alert("没有名字啊叼")
        return
      }

      document.body.scrollTop = document.documentElement.scrollTop = 0
      Indicator.open("加载中...")
      setTimeout(() => {
        let img = $("#box img")
        let box = $("#box")
        let resBox = $("#resBox")
        if (img && img.getBoundingClientRect) {
          box.style.height = img.getBoundingClientRect().height + "px"
        }
        html2canvas(document.querySelector("#box"), {
          logging: false, //日志开关，便于查看html2canvas的内部执行流程
          width: box.clientWidth, //dom 原始宽度
          height: box.clientHeight,
          scrollY: 0,
          scrollX: 0,
          useCORS: true // 【重要】开启跨域配置
        }).then(canvas => {
          resBox.innerHTML = ""
          resBox.appendChild(canvas)
          // document.body.appendChild(canvas)
          try {
            downloadIamge(canvas.toDataURL("image/jpeg"), `${this.name}的证书`)
          } catch (error) {
            console.log("TCL: 在服务器上运行才不会出错，本地运行没法自动下载")
            // this.resImg = canvas.toDataURL("image/jpeg")
          }
          Indicator.close()
          const { name, applier, reward, content } = this
          let info = { name, applier, reward, content }
          localStorage.setItem("yunyunCanvas", JSON.stringify(info))
        })
      }, 200)
    },
    dateFormat
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.yunyun {
  font-size: 14px;
  text-align: left;
  position: relative;
}

#box {
  position: absolute;
  top: 0;
  right: 20px;
  width: 375px;
  font-size: 14px;
}
input {
  margin-bottom: 10px;
}
button {
  margin: 10px 0;
}
textarea {
  width: 60%;
  height: 80px;
}
.spec {
  color: #cd302b;
  font-weight: bold;
}
#box img {
  width: 100%;
  height: auto;
  font-size: 14px;
}
.hint {
  font-size: 12px;
  max-width: 50%;
  color: #cd302b;
}
.hint::before {
  content: "*";
  display: "inline-block";
  margin: 0 10px;
  vertical-align: middle;
  font-size: 12px;
  color: #cd302b;
}
#box .desc {
  position: absolute;
  top: 303px;
  left: 50%;
  font-size: 14px;
  line-height: 1.9;
  width: 280px;
  transform: translateX(-50%);
}
input {
  margin-right: 20px;
  padding: 10px;
}
#box .name {
  position: absolute;
  bottom: 90px;
  left: 114px;
  font-size: 12px;
}
#box .date {
  position: absolute;
  bottom: 62px;
  left: 114px;
  font-size: 12px;
}
</style>
