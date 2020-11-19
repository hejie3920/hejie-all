<!--
  描述：很实用的遮罩层组件，可以只作为一个纯遮罩内置自己定义主体内容，也内置了一些
  对话框确认框选项，可以直接调用

  被包围的组件背景都会有一个遮罩层
  <base-modal 
    必要：
    v-model='showBase'  // 双向绑定加载与否

    可选：
    diy: false   // 默认主体不需要白背景之类的样式，可以理解为纯透明背景
    modalClass: String, // 默认主体的最外层类，和diy属性类似，这个属性是可以更自由的完全摒弃默认样式，直接由外部自己写类外部自己写样式
    position: 'center'   // 默认主体垂直居中，如果要贴底为bottom，顶部则为top
    contentTransitionName: String  // 默认主体的动画,请在transition.scss里面查找有的动画，要添加也要添加在里面
    title: String // 默认框的标题
    mask: true   // 是否开启遮罩层
    maskCanClose: true  // 遮罩层点击是否可关闭
    btns: Number,默认0  // 按钮组个数，默认0底部没有按钮，1的话就会有一个确认按钮，2的话确认和取消按钮都会有
    btnsOptions: {   // 开启按钮组的时候可以自定义文本样式
      confirm: {
        txt: '复制'
      },
      cancel: {
        txt: 
      }
    }
    @confirm 确认按钮事件
  >
    你的代码。。。将作为插槽插在这里

  </base-modal>

-->
<template>
  <div
    :class="`oola-base-modal  ${position} ${show ? 'stopEvent' : ''}`"
    ref="baseModalOuter"
  >
    <transition name="fade">
      <div
        v-show="show && mask"
        class="lamodal-mask"
        @click="clickModal"
        ref="mask"
      ></div>
    </transition>
    <transition :name="finalContentTransitionName">
      <div v-if="show" class="oola-base-wrapper" ref="container">
        <div
          :class="`${modalClass ? modalClass : 'lamodal-container'} flex-col ${
            diy ? 'diy' : ''
          }`"
        >
          <div v-if="title" v-html="title" class="lamodal-title"></div>
          <slot></slot>
          <div
            class="lamodal-operation bd-1px flex-row"
            :class="{ justComfirm: btns === 1 }"
            v-if="btns"
          >
            <div
              v-if="btns == 2"
              @click="btnClick('cancel')"
              class="cancel btn"
              v-html="finalBtnsOption.cancel.txt"
            ></div>
            <div
              class="confirm btn"
              @click="btnClick('confirm')"
              v-html="finalBtnsOption.confirm.txt"
            ></div>
          </div>
        </div>
        <img class='basemodal-iconclose' @click="btnClick('cancel')" v-if="showIconClose" :src='iconCloseUrl'>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "baseModal",
  data() {
    return {
      show: this.value
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: String,
    modalClass: String,
    // 是否开启遮罩层
    mask: {
      type: Boolean,
      default: true
    },
    showIconClose: {
      type: Boolean,
      default: false
    },
    iconCloseUrl: {
      type: String,
      default: '//images-w.oola.cn/oolaimgs/oolam/common/icon-close.png'
    },
    contentTransitionName: {
      type: String,
      default: "slidedown"
    },
    position: {
      type: String,
      default: "center"
    },
    // 遮罩层是否点击可关闭
    maskCanClose: {
      type: Boolean,
      default: true
    },
    // 如果弹窗不要纯白的要自定义背景的话可以设置这个属性,默认还是会将主体垂直居中显示
    diy: {
      type: Boolean,
      default: false
    },
    // 开启对话框底部的取消和确认按钮,默认不开启
    // 1：只展示一个确认按钮，2：展示确认和取消按钮
    btns: {
      type: Number,
      default: 0
    },
    btnsOptions: null
  },
  computed: {
    finalContentTransitionName() {
      if (
        this.position === "bottom" &&
        this.contentTransitionName === "slidedown"
      ) {
        return "slideup"
      }
      return this.contentTransitionName
    },
    finalBtnsOption() {
      let res = {
        confirm: {
          txt: "确定"
        },
        cancel: {
          txt: "取消"
        }
      }
      let final = Object.assign({}, res, this.btnsOptions)
      return final
    },
    eleCanScroll() {
      let el = this.onlyEleCanScroll
      let node = ""
      if (el) {
        node = typeof el === "string" ? document.querySelector(el) : el
      }
      return node
    }
  },
  watch: {
    value: {
      handler(val) {
        this.show = val
        if (val) {
          document.getElementById("app").classList.add("stopScroll")
        } else {
          document.getElementById("app").classList.remove("stopScroll")
        }
      },
      immediate: true
    },
    show(val) {
      this.$emit("input", val)
    }
  },
  methods: {
    clickModal() {
      this.maskCanClose && this.btnClick("cancel")
    },
    btnClick(type = "cancel", options = {}) {
      this.$emit(type, options)
      this.show = false
    }
  }
}
</script>

<style lang="scss">
@import "transitions";
#app.stopScroll {
  height: 100vh;
  overflow: hidden !important;
}
.oola-base-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 200;
  font-size: 0.28rem;
  color: #333;
  text-align: center;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &.bottom {
    align-items: flex-end;
  }
  &.top {
    align-items: flex-start;
  }

  &.stopEvent {
    pointer-events: auto;
  }
  .lamodal-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background: rgba(0, 0, 0, 0.8);
  }
  .oola-base-wrapper {
    position: relative;
    z-index: 500;
    // left: 0;
    // bottom: 0;
    .basemodal-iconclose {
      position: absolute;
      right: .2rem;
      width: 0.5rem;
      top: .2rem;
      z-index: 10;
    }
  }
  .lamodal-container:not(.diy) {
    // 之所以这里这个主体不采用这种方式垂直居中而要在外边控制，是因为如果这里写transform的话会和动画重叠
    // 导致transition动画不能正确过渡，所以在最外层加个wrapper控制过渡，所以这里就不需要这种方式垂直居中了
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translateX(-50%),translateY(-50%);
    background: #fff;
    min-width: 3rem;
    border-radius: 0.2rem;
    overflow: hidden;
    box-sizing: border-box;
  }
  .lamodal-title {
    width: 100%;
    font-size: 0.36rem;
    font-weight: bold;
    padding: 0.4rem;
    padding-bottom: 0;
    box-sizing: border-box;
    text-align: left;
  }
  .lamodal-operation {
    width: 100%;
    &.justComfirm {
      .btn.confirm {
        min-width: 4rem;
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: 0.36rem;
        font-weight: bold;
        background: #ffdd50;
        border-radius: 0.45rem;
        margin: auto;
        color: #080808;
        margin-bottom: 0.4rem;
      }
    }
    &:not(.justComfirm) {
      justify-content: space-between;
      border-top: 1px solid #f1f1f1;
      .btn {
        text-align: center;
        flex: 1 1 auto;
        padding: 0.3rem 0;
        font-size: 0.34rem;
        font-weight: 700;
        &.confirm {
          color: #f7b500;
        }
        &.cancel {
          color: #666;
          font-weight: normal;
        }
        // &:first-child {
        //   border-right: 1px solid $border-color;
        // }
      }
    }
  }
}
</style>
