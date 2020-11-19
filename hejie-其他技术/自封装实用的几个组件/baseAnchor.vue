<!--
头部滑动就会出现的锚点工具，可以定位到页面内任何一个标记的位置，
而且加了分流函数，性能会好很多，使用也简单

<baseAnchor :list="anchorList"></baseAnchor>
可选：v-model='值'用来控制显示

<div id="anchor-detail"> .... </div>
<div id="anchor-notice"> .... </div>
<div id="anchor-coment"> .... </div>
<div id="anchor-recommend"> .... </div>

import baseAnchor from "@/components/common/baseAnchor"
data: 
anchorList: [
  {
    name: "详情",
    anchor: "anchor-detail"
  },
  {
    name: "须知",
    anchor: "anchor-notice"
  },
  {
    name: "留言",
    anchor: "anchor-comment"
  },
  {
    name: "推荐",
    anchor: "anchor-recommend"
  }
],

-->

<template>
  <transition name="slidedown">
    <div class="oola-baseAnchor flex-row" v-show="show">
      <div
        class="item"
        v-for="(item, index) in anchorList"
        :key="index"
        @click="goto(item, index)"
        :class="{ [activeClass || 'active']: currentIndex == index }"
      >{{ item.name }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: this.value,
      anchorPosition: [],
      currentIndex: 0,
      scrollFlag: false,
      scrollFunc: "",
      anchorList: []
    }
  },
  props: {
    list: Array,
    value: {
      type: Boolean,
      default: false
    },
    activeClass: {
      type: String,
      default: "active"
    }
  },
  mounted() {
    setTimeout(() => {
      this.getAnchorPosition()
      this.getScrollFunc()
      window.addEventListener("scroll", this.scrollFunc)
    }, 200)
  },
  watch: {
    value(val) {
      this.show = val
    },
    show(val) {
      this.$emit("input", val)
    }
  },
  beforeDestroy() {
    if (this.scrollFunc) {
      window.removeEventListener("scroll", this.scrollFunc)
    }
  },
  methods: {
    getAnchorPosition() {
      let cache = ""
      let flag = 0
      let timer = setInterval(() => {
        if (!this.list) return
        this.anchorList = []
        this.anchorPosition = []
        this.list.forEach((item, index) => {
          let dom = document.getElementById(item.anchor)
          if (dom && dom.offsetTop) {
            this.anchorList.push(item)
            this.anchorPosition.push(dom.offsetTop || 0)
          }
        })
        flag++
        if (
          (!this.$global.isEmpty(this.anchorPosition) &&
            cache == JSON.stringify(this.anchorPosition)) ||
          flag > 10
        ) {
          clearInterval(timer)
          return
        } else {
          cache = JSON.stringify(this.anchorPosition)
        }
      }, 800)
    },
    getScrollFunc(e) {
      this.scrollFunc = this.$global.throttle(() => {
        if (window.swiperScroll) return
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop
        this.show = scrollTop > 100 ? true : false
        let height =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight
        if (!this.scrollFlag && !this.$global.isEmpty(this.anchorPosition)) {
          this.anchorPosition.forEach((item, index) => {
            this.currentIndex =
              scrollTop + height / 4 > item ? index : this.currentIndex
          })
        }
      }, 100)
    },
    goto(item, index) {
      this.$emit("clickItem", { index })
      this.currentIndex = index
      this.scrollFlag = true
      document.documentElement.scrollTop = document.body.scrollTop =
        this.anchorPosition[this.currentIndex] - 30
      setTimeout(() => {
        this.scrollFlag = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.oola-baseAnchor {
  height: 0.88rem;
  font-size: 0.28rem;
  font-weight: bold;
  color: #999;
  flex-wrap: nowrap;
  position: fixed;
  z-index: 50;
  background: white;
  white-space: nowrap;
  min-width: 100%;
  overflow-x: scroll;
  justify-content: flex-start;
  top: 0;

  .item {
    padding: 0 0.35rem;
    position: relative;
    &.active {
      color: #ffc21a;
      &::after {
        content: "";
        width: 0.24rem;
        height: 0.04rem;
        border-radius: 0.02rem;
        background: #ffc21a;
        position: absolute;
        left: 50%;
        bottom: -0.1rem;
        transform: translateX(-50%);
      }
    }
  }
}
</style>