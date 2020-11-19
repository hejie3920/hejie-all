<template>
  <div class="oola-numinput flex-row">
    <div class="flex-row input-line">
      <img
        src="//images-w.oola.cn/oolaimgs/oolam/common/icon-minus.png"
        class="minus"
        @click="handleClick('minus')"
      />
      <input
        @blur="inputBlur(num)"
        type="text"
        :maxlength="maxLength"
        class="amount"
        v-model.number="num"
      />
      <img
        class="plus"
        src="//images-w.oola.cn/oolaimgs/oolam/common/icon-plus.png"
        @click="handleClick('plus')"
      />
    </div>
    <span class="input-unit" v-if="unit">{{unit}}</span>
  </div>
</template>

<script>
import { Toast } from "mint-ui"
export default {
  props: {
    unit: {
      type: String,
      default: ""
    },
    value: null,
    max: {
      type: Number,
      default: 999
    },
    min: {
      type: Number,
      default: 1
    },
    // 应是整数
    shouldBeInt: {
      type: Boolean,
      default: true
    },
    // 允许不填
    canBlank: {
      type: Boolean,
      default: false
    },
    checkFunc: null
  },
  data() {
    return {
      num: this.value,
      prevNum: this.value
    }
  },
  watch: {
    value(newValue, oldValue) {
      this.num = newValue
    },
    num(newValue, oldValue) {
      this.$emit("input", newValue)
    }
  },
  computed: {
    maxLength() {
      return String(this.max).length
    }
  },
  methods: {
    handleClick(type, obj) {
      switch (type) {
        case "minus":
          let tmpMinus = this.num - 1
          this.check(tmpMinus)
            .then((res) => {
              this.num = res
              this.$emit("minus", this.num)
            })
            .catch((err) => {})
          break
        case "plus":
          let tmpPlus = this.num + 1
          this.check(tmpPlus)
            .then((res) => {
              this.num = res
              this.$emit("plus", this.num)
            })
            .catch((err) => {})
          break
        default:
          break
      }
    },
    check(val) {
      return new Promise((resolve, reject) => {
        let res = ""
        if (!this.canBlank && val === "") {
          Toast("必须填数值~")
        } else if (
          this.shouldBeInt &&
          !this.$global.commonReg(val, "isNumber")
        ) {
          Toast("数量必须为整数~")
        } else if (val > this.max) {
          Toast(`数量不能大于${this.max}~`)
        } else if (val < this.min) {
          Toast(`数量不能小于${this.min}~`)
        } else if (this.checkFunc) {
          res = this.checkFunc(val)
        } else {
          res = val
        }
        if (parseFloat(res).toString() != "NaN") {
          this.prevNum = res
          resolve(res)
        } else {
          reject(res)
        }
      })
    },
    inputBlur(val) {
      this.$global.inputBlur()
      setTimeout(() => {
        this.check(val)
          .then((res) => (this.num = res))
          .catch((err) => (this.num = this.prevNum))
      }, 20)
    }
  }
}
</script>

<style lang="scss">
.oola-numinput {
  background: #fafafb;
  border-radius: 0.32rem;
  padding: 0.07rem 0.1rem;
  .input-line {
    img.plus,
    img.minus {
      width: 0.5rem;
    }
    input {
      background: transparent;
    }
    .amount {
      width: 1rem;
      font-size: 0.34rem;
      font-weight: bold;
      color: #333;
      text-align: center;
      padding: 0 0.1rem;
    }
  }
  .input-unit {
    margin-left: 0.2rem;
  }
}
</style>