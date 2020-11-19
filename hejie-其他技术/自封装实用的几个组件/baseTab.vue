<template>
  <div class="oola-baseTab" ref="baseTab">
    <div :class="`basetab-list flex-row ${justify} ${sticky ? 'sticky' : ''}`">
      <div v-for="(item, index) in finalList" :key="index" class="flex-line">
        <div
          class="item"
          :class="{ actived: currentValue === item.value }"
          @click="handleClick('tab', item.value)"
          :style="itemStyle + currentValue === item.value ? activedStyle : ''"
        >{{ item.name }}</div>
        <div class="basetab-line" v-if="divideLine && (index < finalList.length - 1)"></div>
      </div>
    </div>
    <div class="basetab-site" v-show="sticky"></div>
  </div>
</template>

<script>
export default {
  name: "baseTab",
  props: {
    value: null,
    list: Array,
    justify: {
      type: String,
      default: "start"
    },
    scrollDom: null,
    itemStyle: String,
    activedStyle: String,
    divideLine: {
      type: Boolean,
      default: true
    },
    freeze: {
      type: Boolean,
      default: false
    },
    autoScroll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value,
      sticky: false,
      finalScrollDom: "",
      scrollFunc: "",
      tabPosition: 0
    }
  },
  created() {
    if (!this.list.find(item => item.value === this.value)) {
      this.currentValue = this.list[0].value
    }
  },
  mounted() {
    let timer = setInterval(() => {
      this.finalScrollDom = this.scrollDom || window
      if (this.$refs.baseTab) {
        let tmp =
          this.$refs.baseTab.getBoundingClientRect().top ||
          this.$refs.baseTab.offsetTop
        if (this.tabPosition === tmp) {
          clearInterval(timer)
          this.tabPosition = tmp
          // 添加滑动监听事件
          if (!this.freeze) {
            this.getScrollFunc()
            this.finalScrollDom.addEventListener("scroll", this.scrollFunc)
            // 自动滑动到评论
            if (this.shouldAutoScroll) {
              this.scrollToTab()
            }
          }
        } else {
          this.tabPosition = tmp
        }
      } else {
        clearInterval(timer)
      }
    }, 400)
  },
  beforeDestroy() {
    if (this.scrollFunc && this.finalScrollDom) {
      this.finalScrollDom.removeEventListener("scroll", this.scrollFunc)
    }
  },
  methods: {
    getScrollFunc() {
      this.scrollFunc = this.$global.throttle(() => {
        if (window.swiperScroll) return
        let { pageYOffset, scrollY, scrollTop } = this.finalScrollDom
        let scroll = pageYOffset || scrollTop || scrollY
        if (scroll > this.tabPosition) {
          this.sticky = true
        } else {
          this.sticky = false
        }
      })
    },
    handleClick(type, obj) {
      switch (type) {
        case "tab":
          this.currentValue = obj
          if (this.sticky) {
            this.scrollToTab()
          }
          break
        default:
          break
      }
    },
    scrollToTab() {
      this.finalScrollDom.scrollTo({
        top: this.tabPosition,
        behavior: "smooth"
      })
    }
  },
  computed: {
    finalList() {
      return this.list
    },
    shouldAutoScroll() {
      return this.autoScroll || this.$route.query.autoScroll
    }
  },
  watch: {
    value(newValue, oldValue) {
      this.currentValue = newValue
    },
    currentValue(newValue, oldValue) {
      this.$emit("input", newValue)
    }
  }
}
</script>

<style lang="scss">
.oola-baseTab {
  .basetab-site {
    height: 1.14rem;
  }
  .basetab-list {
    background: white;
    overflow-x: scroll;
    z-index: 45;
    padding: 0.35rem 0;
    &.center {
      justify-content: center;
    }
    &.start {
      justify-content: flex-start;
    }
    .item {
      padding: 0 0.45rem;
      font-size: 0.34rem;
      white-space: nowrap;
      position: relative;
      color: #666;
      &.actived {
        font-weight: bold;
        color: #080808;
        &::after {
          content: "";
          width: 0.4rem;
          height: 0.06rem;
          background: #fece38;
          bottom: -0.1rem;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
        }
      }
    }
    .basetab-line {
      width: 0.02rem;
      height: 0.25rem;
      background: #d8d8d8;
    }
    &.sticky {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 50;
    }
  }
}
</style>