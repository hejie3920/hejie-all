<!--
各种悬浮的按钮都写在这里，比如客服按钮，回到首页按钮，底部的按钮
用法：
直接引入使用即可
<baseFixBtn></baseFixBtn>

可选
btnType：按钮类型 bottom(底部按钮)， home(回到主页)，custom（客服图标),diy（自定义节点内容，需要slot=‘diy’插里面）
btnText: 为bottom类型时按钮的文字
freeze：是否固定位置不隐藏，布尔值，默认false
@clickBtn接收点击触发事件，第二个参数为事件id，handleClick触发的事件名都可以被组件监听

iconUrl: icon地址,默认为空 // btnType为diy自定义时，一般使用都是采用外部自定义内容插槽，如果只想要纯替换图片，则只要直接设置img图片即可

注意：有的情况下，回到首页是监听文档的滚动事件，但在一些特定场景，滚动加载列表的滚动是触发不了的，所以
这种情况下应该手动去选中按钮节点触发事件
详细参考 src/pages/newrecycle/pages/myorder.vue
-->
<template>
  <div class="oola-fixBtn">
    <!--home图标-->
    <img
      v-if="btnType === 'home'"
      @click="handleClick('toHome')"
      :style="Object.assign({},btnStyle,{ transform: hideBtn ? 'translate(150%,-50%)' : 'translate(0,-50%)' })"
      src="//images-w.oola.cn/oolaimgs/oolam/common/icon-home.png"
      class="type-home"
    />
    <!--自定义-->
    <div
      v-else-if="btnType === 'diy'"
      class="type-diy"
      :class="{ pureIcon: iconUrl }"
      @click="handleClick('clickDiyBtn')"
      :style="Object.assign({},btnStyle,{ transform: hideBtn ? 'translate(150%,-50%)' : 'translate(0,-50%)' })"
    >
      <img :src="iconUrl" v-if="iconUrl" />
      <slot name="diy" v-else></slot>
    </div>

    <!--客服图标-->
    <img
      v-else-if="btnType === 'custom'"
      @click="handleClick('toCustom')"
      :style="Object.assign({},btnStyle,{ transform: hideBtn ? 'translate(150%,-50%)' : 'translate(0,-50%)' })"
      src="//images-w.oola.cn/oolaimgs/oolam/recycle3/icon-customer.png"
      class="type-custom"
    />

    <!-- 固定在底部的按钮 -->
    <div v-else-if="btnType === 'bottom'">
      <transition name="slideup">
        <div class="type-fixBottom" v-show="showBtn">
          <div
            class="btn"
            :style="btnStyle"
            @click="handleClick('clickBottomBtn')"
            :class="{ btnClass, disabled }"
          >{{ btnText }}</div>
        </div>
      </transition>
      <div class="type-fixBottom-block"></div>
    </div>
  </div>
</template>

<script>
import { qiyukf } from "@/config/utils"

export default {
  name: "baseFixBtn",
  props: {
    btnType: {
      type: String,
      default: "home"
    },
    btnText: {
      type: String,
      default: "确定"
    },
    btnClass: null,
    disabled: Boolean,
    freeze: {
      type: Boolean,
      default: false
    },
    btnStyle: {
      type: Object,
      default: () => {
        top: "59%"
      }
    },

    // btnType为自定义时，默认采用纯图标的样式，这时外部插槽只要直接img图片url即可
    iconUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      hideBtn: false,
      showBtn: false,
      stopListenScroll: false,
      scrollFunc: "",
      timer: ""
    }
  },
  created() {
    window.swiperScroll = false
    this.addEvent()
  },
  mounted() {
    setTimeout(() => {
      if (this.btnType == "bottom") {
        if (
          document.body.clientHeight < window.screen.height + 30 ||
          this.freeze
        ) {
          this.showBtn = true
          this.stopListenScroll = true
        }
      }
    }, 500)
  },
  destroyed() {
    this.removeEvent()
  },
  methods: {
    addEvent() {
      this.getScrollFunc()
      this.scrollFunc && window.addEventListener("scroll", this.scrollFunc)
    },
    removeEvent() {
      this.scrollFunc && window.removeEventListener("scroll", this.scrollFunc)
    },
    getScrollFunc() {
      if (this.freeze) return
      if (["home", "custom", "diy"].includes(this.btnType)) {
        this.scrollFunc = e => {
          if (window.swiperScroll) {
            return
          }
          this.hideBtn = true
          this.timer && clearTimeout(this.timer)
          this.timer = setTimeout(() => {
            this.hideBtn = false
          }, 200)
        }
      } else if (["bottom"].includes(this.btnType)) {
        this.scrollFunc = this.$global.debounce(() => {
          if (window.swiperScroll || this.stopListenScroll) {
            return
          }
          let scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop
          this.showBtn = scrollTop > 20 ? true : false
        })
      }
    },
    handleClick(type = "", obj = "") {
      if (type) this.$emit("clickBtn", type, obj)
      switch (type) {
        case "toHome":
          this.$router.push("/")
          break
        case "toCustom":
          qiyukf()
          break
        case "clickBottomBtn":
          break
        case "clickDiyBtn":
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss">
.oola-fixBtn {
  $percentage: unquote("%");

  @mixin common($top: 0) {
    position: fixed;
    right: 15px;
    transform: translateY(-50%);
    width: 40px;
    z-index: 100;
    height: 40px;
    box-shadow: 0 2px 8px 0 rgba(255, 111, 0, 0.4);
    border-radius: 50%;
    transition: transform 0.5s linear;
    @if $top > 0 {
      top: $top + $percentage;
    }
  }
  /*绝对定位的内容*/
  .type-home {
    @include common(50);
  }
  .type-custom {
    @include common();
    bottom: 69px;
  }
  .type-diy {
    position: fixed;
    right: 15px;
    top: 59%;
    transform: translateY(-50%);
    min-width: 40px;
    z-index: 100;
    transition: transform 0.5s linear;
    &.pureIcon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-shadow: 0 2px 8px 0 rgba(255, 111, 0, 0.4);
    }
  }
  .type-fixBottom {
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    box-sizing: border-box;
    padding: 0.2rem;
    background: rgba($color: white, $alpha: 0.8);
    .btn {
      width: 4rem;
      height: 0.9rem;
      margin: 0 auto;
      line-height: 0.9rem;
      border-radius: 0.45rem;
      background: #ffdd50;
      font-size: 0.36rem;
      font-weight: bold;
      white-space: nowrap;
      text-align: center;
      &.disabled {
        background: #f1f1f1;
        color: #999;
      }
    }
  }
  .type-fixBottom-block {
    width: 100%;
    height: 1.4rem;
  }
}
</style>