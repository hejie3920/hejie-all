<!--
表单组件：
可直接很方便实现普通输入框，字体输入框，下拉框，时间范围选择器，防重验证码
除了基本的几个规则外，还支持以及各种自定义必填之类的规则，自定义错误显示集合长度限制等等
基本所有表单有的功能使用这个都可以一键实现

使用：可参考partner/pages/data.vue

<baseInput
  v-for="(item, index) in form"
  :key="index"
  v-model="fillData[index]"   // 双向绑定数据
  :placeholder="item.placeholder || `请填写${item.label}`"
  :ref="index"    // 用来最提交时，手动触发检查获取错误
  v-bind="item"   // 直接把表单对象的属性扩展出来
></baseInput>

this.form = {
  // 普通输入框
  schoolName: {
    label: "高校名称"
  },
  communityNum: {
    type: "dropdown",
    label: "社团人数",
    dropdownList: ["0~10人", "11~20人", "21~30人", "30人以上"]
  },
  email: {
    rule: {
      isEmail: true
    },
    label: "联系邮箱",
    inputType: "email"
  },
  bankCard: {
    inputType: "number",
    label: "收款银行卡卡号",
    maxLength: 19,
    placeholder: "收款银行卡号，用于活动经费奖励"
  },
  payeeIdcard: {
    rule: {
      isId: true
    },
    label: "收款人身份证号码",
    placeholder: "收款人身份证号码，用于合同签署"
  },
  principalPhone: {
    label: "社团负责人联系电话",
    inputType: "number",
    maxLength: 11,
    rule: {
      isPhone: true
    }
  },
  verifyCode: {
    type: "verify",
    label: "手机验证码",
    cb: () => this.sendCode()
  }
}

为了扩展性和自由度，这里最终提交的事件还是交由外部来处理，表单组件只会emit发送错误，接收到错误后怎么处理这个操作分离出来
由调用者我们自己处理，所有上面的ref属性便是为了标志组件名，然后手动this.$refs.组件名.check进行提交前的检查

比如data.vue里面 submit按钮事件前的检查
let errStack = []  定义一个错误数组
this.$nextTick(() => {
  for (let key in this.form) {
    let target = this.$refs[key][0]
    if (target) {
      let error = target.check()
      if (error) {
        errStack.push(error)
      }
    }
  }
  if (errStack.length > 0) {
    Toast("请补充完整资料")
    return
  }
  this.submitForm()  // 没错误才真正提交
})

属性：
props: {
  label: String,  // 表单标签
  placeholder: String, // 提示文字
  type: 'normal'         // 框类型，有normal（普通输入框），verify(验证码框), daterange（日期选择框）, dropdown（下拉框）
  inputType: String,  // 原生输入框类型，直接作用在input标签上
  maxLength: 100,  // 最大输入长度
  // 下拉框专用属性
  dropdownList: Array,
  // 下拉框类型时的下拉数组列表，
  是一个 对象数组：【{
    text:文本，value:值
  }】

  // 时间范围选择器专用
  startDate: {        // 开始日期
    type: Date,
    default: () => new Date()
  },
  timeFormat: {      // 返回的时间格式
    type: String,
    default: "YYYY年MM月DD日"
  },
  range: {   // 两个日期的范围，默认一个月
    type: Number,
    default: 30
  },


  // 错误提示，传入一个对象，根据相应的检查规则展示相应的错误提示，检查规则定义在src/config/global.js的commonReg里面
  errorHint: {
    type: Object,
    default: () => {
      required: `必填项`
    }
  },

  // 传入检查规则，现有规则同上，定义在src/config/global.js的commonReg里面，
  isPhone: /^1\d{10}$/,
  isEmail: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
  isId: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  required() {
    return val === 0 || !!val;
  }
  传入对象，默认所有项都isRequire为true
  rule: {
    type: Object,
    default: () => {}
  },

  // 自定义规则，传入一个函数，默认接收值为参数，检查后直接return错误提示，外部可以接收错误提示做相应处理
  customRule: Function,

  // 验证码输入框用

  countDownTime: 60  // 计时时间，默认点击后要60秒才能重新发送
  cb: Function
  // 验证码事件，返回一个promise对象，resole(true)则代表外部发送验证码成功，会进入计时，resolve(fasle)代表发送失败，则不会计时
  },

更多功能敬请扩展
-->

<template>
  <div class="oola-baseInput">
    <div class="form-label" :class="{ required: finalRule.required }" v-if="label" v-html="label"></div>
    <div class="form-item flex-row">
      <slot name="prefix"></slot>
      <input
        v-if="(type == 'normal' && inputType === 'number') || type === 'money'"
        :value="inputValue"
        @input="maxInput"
        type="number"
        :placeholder="placeholder"
        @blur="onBlur"
        class="input-line bd-1px"
        :class="{ error }"
      />
      <input
        v-else-if="type == 'normal'"
        :type="inputType || 'text'"
        :placeholder="placeholder"
        v-model.trim="inputValue"
        @blur="onBlur"
        :maxLength="maxLength"
        class="input-line bd-1px"
        :class="{ error }"
      />

      <!-- 日期选择 -->
      <div v-else-if="type == 'daterange'" class="w100">
        <div
          :class="{ hint: !inputValue, error }"
          class="input-line bd-1px"
          @click="handleClick('openDateRangePicker')"
        >{{ timeStr || "开始时间 - 结束时间" }}</div>
        <mt-datetime-picker
          ref="dateResStartPicker"
          type="date"
          :startDate="startDate"
          @confirm="confirmRangeStart"
          confirmText="确定开始时间"
        ></mt-datetime-picker>
        <mt-datetime-picker
          v-if="dateResStart"
          ref="dateEndPicker"
          type="date"
          :startDate="dateResStart"
          :endDate="picker2EndDate"
          @confirm="confirmRangeEnd"
          confirmText="确定结束时间"
        ></mt-datetime-picker>
      </div>

      <!-- 下拉框 -->
      <div
        class="dropdown w100"
        @click="showDropdown = !showDropdown"
        v-else-if="type === 'dropdown'"
      >
        <div :class="{ hint: inputValue === '', error }" class="input-line bd-1px">
          {{ (multiple && inputValue ? tmpItem : tmpItem.text) || placeholder }}
          <img
            class="icon-arrow"
            :class="{ select: showDropdown }"
            src="//images-w.oola.cn/oolaimgs/oolam/common/icon-arrow-down.png"
          />
        </div>
        <ul class="dropdown-list bd-1px" v-show="showDropdown">
          <li
            :class="{
              actived: multiple ? item.selected : item.value === inputValue,
            }"
            class="flex-row"
            v-for="(item, index) in dropdownListData"
            :key="index"
            @click.stop="selectFun(item)"
          >
            <span>{{ item.text }}</span>
            <i v-if="multiple && item.selected" class="el-icon-check iconCheck"></i>
          </li>
        </ul>
      </div>

      <!-- 验证码 -->
      <div class="w100 verify flex-row" v-else-if="type === 'verify'">
        <input
          :value="inputValue"
          @input="maxInput"
          :maxLength="maxLength"
          class="input-line bd-1px"
          type="number"
          @blur="onBlur"
          :class="{ error }"
          :placeholder="placeholder"
        />
        <div
          class="verify-btn"
          :class="{ disable: antiRepeat }"
          @click="handleClick('getCode')"
        >{{ verifyTimer ? `${leftTime}s` : "获取验证码" }}</div>
      </div>

      <!-- 投票组件 -->
      <div class="w100 vote" v-else-if="type === 'vote' && !$global.isEmpty(finalVoteList)">
        <p class="vote-title">{{ voteTitle }}</p>
        <div class="vote-style1" v-if="finalVoteList.length > 2">
          <div
            class="item-vote"
            v-for="(item, index) in finalVoteList"
            :key="index"
            :class="{ checked: item.id == inputValue }"
            @click="handleClick('vote', item.id)"
          >
            <p class="line-text flex-row">
              <span class="text">
                <img
                  src="//images-w.oola.cn/oolaimgs/oolam/common/icon-check-done.png"
                  class="label"
                  v-if="item.id == inputValue"
                />
                <!-- <span v-else>{{item.label + '.'}}</span> -->
                {{ item.text }}
              </span>
              <span class="percent" v-show="inputValue">{{ item.percent }}%</span>
            </p>
            <div
              class="line-vote"
              :style="
                inputValue
                  ? `transform: translateX(-${100 - item.percent}%);`
                  : ''
              "
            ></div>
          </div>
        </div>
        <div class="vote-style2" v-else>
          <div class="item-list flex-row">
            <div
              class="item-vote"
              @click="handleClick('vote', item.id)"
              v-for="(item, index) in finalVoteList"
              :class="{ checked: item.id == inputValue }"
              :key="index"
            >{{ item.text }}</div>
          </div>
          <div class="result-line flex-row" :class="{ hide: !inputValue }">
            <div
              v-for="(item, index) in finalVoteList"
              :key="index"
              :class="`res-item
              ${item.percent == 100 ? 'isFull' : ''}
              ${item.percent == 0 ? 'isZero' : ''}
              ${index == 0 ? 'left' : 'right'}
              ${inputValue == item.id ? 'checked' : ''}`"
              :style="`width:${item.percent}%;`"
            >
              <p class="num">{{ item.percent }}%</p>
            </div>
          </div>
        </div>
      </div>

      <slot name="after"></slot>
    </div>
    <div class="form-error" v-if="error">* {{ error }}</div>
  </div>
</template>

<script>
import { DatetimePicker } from "mint-ui"
import moment from "moment"
import autoLogin from "@/config/mixins/autoLogin"

export default {
  name: "baseInput",
  data() {
    return {
      inputValue: this.value,
      showDropdown: false,
      pickerValue: "",
      dateResStart: "",
      verifyTimer: "", // 验证码组件计时器
      leftTime: this.countDownTime,
      antiRepeat: false, // 验证码防重
      error: "", // 错误对象集
      tempSelectArr: [], // 选择框数组
      initVoteId: "" // 投票组件记录初始投票id，用来辨别是不是之前投过票了
    }
  },
  mixins: [autoLogin],
  components: {
    [DatetimePicker.name]: DatetimePicker
  },
  props: {
    value: null,
    label: String,
    placeholder: String,
    type: {
      type: String,
      default: "normal"
    },
    // 原生输入框类型，直接作用在input标签上
    inputType: String,
    maxLength: {
      type: Number,
      default: 100
    },
    // 下拉框专用属性
    dropdownList: Array,
    // 下拉是否多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 对象数组：{
    //   text:文本，value:值
    // }
    // 时间范围选择器专用
    startDate: {
      type: Date,
      default: () => new Date()
    },
    timeFormat: {
      type: String,
      default: "YYYY年MM月DD日"
    },

    // 金额输入框专用
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Infinity
    },

    // 输入框失焦后处理键盘框弹起问题
    handleBlur: {
      type: Boolean,
      default: false
    },
    // 错误提示
    errorHint: {
      type: Object,
      default: () => {
        required: `必填项`
      }
    },
    rule: {
      type: Object,
      default: () => {}
    },
    customRule: Function,
    range: {
      type: Number,
      default: 30
    },
    // 验证码用
    // 计时时间
    countDownTime: {
      type: Number,
      default: 60
    },
    // 验证码事件，返回一个promise可以等待请求验证码后再计时
    cb: Function,

    // 投票组件专用
    voteList: Array,
    voteTitle: String
  },
  computed: {
    finalErrorHint() {
      let defaultObj = {
        required: "必填项",
        isPhone: "请输入有效手机号",
        isEmail: "请输入有效邮箱",
        isId: "请输入有效身份证号码"
      }
      return Object.assign({}, defaultObj, this.errorHint)
    },
    tmpItem() {
      let res = {}
      if (
        this.type === "dropdown" &&
        this.inputValue !== "" &&
        this.dropdownList[0]
      ) {
        // if (typeof this.dropdownList[0] === "string") {
        //   let tmp = this.dropdownList.find(item => item === this.inputValue)
        //   res = { text: tmp, value: tmp }
        // } else {
        //   res = this.dropdownList.find(item => this.inputValue === item.value)
        // }
        if (this.multiple) {
          if (this.tempSelectArr.length) {
            res = this.tempSelectArr.join(",")
            this.inputValue = res
          } else {
            res = this.inputValue
            this.tempSelectArr = this.inputValue.split(",")
            this.dropdownListData.map((v, i) => {
              if (this.inputValue.includes(v.value)) {
                v.selected = true
              } else {
                v.selected = false
              }
            })
          }
        } else {
          res = this.dropdownListData.find(
            item => this.inputValue === item.value
          )
        }
      }
      return res
    },
    timeStr() {
      let res = ""
      if (
        this.type === "daterange" &&
        this.inputValue &&
        this.inputValue[0] &&
        this.inputValue[1]
      ) {
        let start = moment(this.inputValue[0]).format(this.timeFormat)
        let end = moment(this.inputValue[1]).format(this.timeFormat)
        res = `${start} - ${end}`
      }
      return res
    },
    finalRule() {
      let defaultRule = {
        required: true
      }
      switch (this.type) {
        case "vote":
          defaultRule.required = false
          break
        default:
          break
      }

      let res = Object.assign({}, defaultRule, this.rule)
      for (let i in res) {
        if (!res[i]) delete res[i]
      }
      return res
    },
    dropdownListData() {
      let tempArr = []
      this.dropdownList.map(v => {
        if (typeof v === "string") {
          tempArr.push({
            text: v,
            value: v
          })
        }
      })
      return tempArr
    },
    finalVoteList() {
      let res = this.$global.deepCopy(this.voteList) || []
      if (!this.$global.isEmpty(res)) {
        // let map = {
        //   0: "A",
        //   1: "B",
        //   2: "C",
        //   3: "D",
        //   4: "E",
        //   5: "F"
        // }
        // res.forEach((item, index) => (item.label = map[index]))
        let targetItem = res.find(item => item.id == this.inputValue)
        let initItem = res.find(item => item.id == this.initVoteId)
        if (targetItem) {
          if (this.initVoteId) {
            if (this.initVoteId != this.inputType) {
              initItem.number -= 1
              targetItem.number += 1
            }
          } else {
            targetItem.number += 1
          }
        }

        let total = res.reduce((pre, next) => {
          return pre + Number(next.number)
        }, 0)
        if (total > 0) {
          res.forEach(item => {
            item.percent = Math.round((item.number / total) * 10000) / 100.0
          })
        }
      }
      return res
    }
  },
  watch: {
    value(val) {
      this.inputValue = val
    },
    inputValue(val, oldVal) {
      this.$emit("input", val)
      if (
        (!oldVal || this.multiple) &&
        ["dropdown", "daterange"].includes(this.type)
      ) {
        this.check()
      }
    },
    error(val) {
      if (val) {
        this.$emit("error", val)
      }
    }
  },
  created() {
    this.$nextTick(() => {
      // 如果是投票组件，要记录初始投票ID
      if (this.type == "vote") this.initVoteId = this.inputValue
    })
  },
  methods: {
    maxInput(e) {
      this.inputValue = e.target.value = e.target.value.slice(0, this.maxLength)
    },
    handler(e) {
      e.preventDefault()
    },
    closeTouch() {
      document
        .getElementsByTagName("body")[0]
        .addEventListener("touchmove", this.handler, { passive: false }) //阻止默认事件
    },
    openTouch() {
      document
        .getElementsByTagName("body")[0]
        .removeEventListener("touchmove", this.handler, { passive: false }) //打开默认事件
    },
    check() {
      this.error = ""
      // 检验规则时的一些特殊类型检查项
      if (this.type == "money") {
        if (this.inputValue <= this.min) {
          return (this.error = `输入数值必须大于${this.min}`)
        }
        if (this.inputValue >= this.max) {
          return (this.error = `输入数值不能大于${this.max}`)
        }
      }
      // 检查内置规则列表
      for (let item in this.finalRule) {
        let res = this.$global.commonReg(this.inputValue, item)
        if (!res) {
          return (this.error = this.finalErrorHint[item])
        }
      }
      // 检查自定义规则
      if (this.customRule) {
        this.error = this.customRule(this.inputValue) || ""
      } else {
        this.error = ""
      }
      return this.error
    },
    onBlur(e) {
      if (this.handleBlur) {
        this.$global.inputBlur()
      }
      if (this.type === "money" && this.inputValue) {
        this.inputValue = Number(this.inputValue).toFixed(2)
      }
      this.$emit("blur", this.inputValue)
      this.check()
    },
    async handleClick(type, obj) {
      switch (type) {
        case "openDateRangePicker":
          this.dateResStart = ""
          this.$refs.dateResStartPicker.open()
          this.closeTouch() //关闭默认事件
          let timer = setInterval(() => {
            let dom1 = this.$refs.dateResStartPicker || {}
            let dom2 = this.$refs.dateEndPicker
            if (!dom1.visible) {
              if (!this.dateResStart || (dom2 && !dom2.visible)) {
                clearInterval(timer)
                this.openTouch()
              }
            }
          }, 1000)

          break
        case "chooseItem":
          this.tmpItem = obj
          this.inputValue = obj && obj.value
          break
        case "vote":
          this.sureLogin().then(res => {
            if (res == "success") {
              if (this.inputValue) {
                if (this.inputValue != obj) {
                  this.$laConfirm({
                    text: "确定更改投票吗？",
                    title: "温馨提示",
                    cancelable: true,
                    onConfirm: () => {
                      this.inputValue = obj
                      this.$emit("vote", this.inputValue)
                    }
                  })
                }
              } else {
                this.inputValue = obj
                this.$emit("vote", this.inputValue)
              }
            }
          })
          break
        case "getCode":
          if (this.antiRepeat) {
            return
          }
          this.antiRepeat = true
          let reset = () => {
            clearInterval(this.verifyTimer)
            this.verifyTimer = null
            this.antiRepeat = false
            this.leftTime = this.countDownTime
          }
          this.verifyTimer = setInterval(() => {
            this.leftTime--
            if (this.leftTime < 1) {
              reset()
            }
          }, 1000)
          if (typeof this.cb === "function") {
            let res = await this.cb()
            if (!res) {
              reset()
            }
          }
          break
        default:
          break
      }
    },
    confirmRangeStart(e) {
      this.dateResStart = e
      let tmp = new Date(e)
      this.picker2EndDate = new Date(tmp.setDate(tmp.getDate() + this.range))
      setTimeout(() => {
        this.$refs.dateEndPicker.open()
      }, 200)
    },
    confirmRangeEnd(e) {
      this.inputValue = [
        moment(this.dateResStart).format("YYYY-MM-DD HH:mm:ss"),
        moment(e).format("YYYY-MM-DD HH:mm:ss")
      ]
    },
    selectFun(item) {
      this.inputValue = item.text ? item.value : item
      if (this.multiple) {
        if (this.tempSelectArr.includes(this.inputValue)) {
          this.tempSelectArr.splice(
            this.tempSelectArr.findIndex(item => item === this.inputValue),
            1
          )
        } else {
          this.tempSelectArr.push(this.inputValue)
        }
        this.dropdownListData.map((v, i) => {
          if (this.tempSelectArr.includes(v.value)) {
            v.selected = true
          } else {
            v.selected = false
          }
        })
        if (!this.tempSelectArr.length) {
          this.inputValue = ""
        }
      } else {
        this.showDropdown = !this.showDropdown
      }
    }
  }
}
</script>

<style lang="scss">
.oola-baseInput {
  width: 100%;
  margin-bottom: 0.3rem;
  .w100 {
    width: 100%;
  }

  .form-label {
    margin-bottom: 0.2rem;
    &.required::before {
      content: "*";
      color: #f7892f;
      margin-right: 0.1rem;
      vertical-align: middle;
    }
  }
  .form-item {
    width: 100%;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    .fade {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      height: 0.9rem;
    }
    .input-line {
      width: 100%;
      box-sizing: border-box;
      padding: 0 0.3rem;
      height: 0.9rem;
      color: #080808;
      line-height: 0.9rem;
      border-radius: 0.1rem;
      border: 1px solid rgba(218, 218, 218, 1);
      &:hover {
        border-color: #ffc21a;
      }
      &.error {
        border-color: #ff6f6f;
      }
    }
    input::placeholder,
    .hint {
      color: #666;
    }
    .daterange {
      .divide {
        margin: 0 0.3rem;
      }
    }
    .dropdown {
      position: relative;
      width: 100%;
      .left {
        max-width: 92%;
        @include ellipsis(1);
      }
      .input-line {
        position: relative;
        padding-right: 0.7rem;
      }
      .icon-arrow {
        width: 0.2rem;
        position: absolute;
        right: 0.2rem;
        margin-top: 0.3rem;
        transition: transform 0.2s;
        &.select {
          transform: rotate(-180deg);
        }
      }
      .dropdown-list {
        position: absolute;
        border-radius: 0 0 0.1rem 0.1rem;
        // top: 0.8rem;
        // left: 0;
        width: 100%;
        z-index: 10;
        background: white;
        line-height: 1;
        max-height: 5.7rem;
        overflow: scroll;
        border: 0.01rem solid #dadada;
        li {
          padding: 0.3rem;
          box-sizing: border-box;
          &.actived {
            background: #f9f9f9;
          }
        }
      }
    }
    .verify {
      .verify-btn {
        padding: 0;
        text-align: center;
        width: 4.7rem;
        height: 0.9rem;
        line-height: 0.9rem;
        background: #fff9e2;
        color: #ffc21a;
        margin-left: 0.2rem;
        &.disable {
          filter: grayscale(1);
        }
      }
    }
    .vote {
      background: #f3f3f4;
      padding: 0.3rem 0.2rem;
      box-sizing: border-box;
      border-radius: 0.05rem;
      .vote-title {
        font-size: 0.28rem;
        white-space: initial;
        line-height: 0.44rem;
        margin-bottom: 0.3rem;
      }
      .vote-style1 {
        .item-vote {
          padding: 0 0.24rem;
          height: 0.7rem;
          line-height: 0.7rem;
          background: white;
          overflow: hidden;
          border-radius: 0.35rem;
          position: relative;
          font-size: 0.28rem;
          color: #666;
          margin-bottom: 0.2rem;
          &:last-child {
            margin-bottom: 0;
          }
          &.checked {
            color: #000;
            .line-vote {
              background: #ffefab;
            }
            .line-text .percent {
              color: #ffc21a;
            }
          }
          .line-text {
            position: relative;
            z-index: 5;
            .text {
              max-width: 85%;
              @include ellipsis(1);
              img {
                width: 0.28rem;
                vertical-align: middle;
                margin-right: 0.07rem;
              }
            }
            .percent {
              font-weight: bold;
              transition: 0.2s;
            }
          }
          .line-vote {
            position: absolute;
            width: 100%;
            height: 0.7rem;
            background: #e0e0e0;
            top: 0;
            left: 0;
            z-index: 2;
            transition: 0.4s;
            transform: translateX(-100%);
          }
        }
      }
      .vote-style2 {
        @mixin percentLine($left: 1) {
          content: "";
          width: 0;
          height: 0;
          border-width: 0.28rem 0.1rem;
          display: block;
          line-height: 1;
          border-style: solid;
          border-color: #e0e0e0 #e0e0e0 transparent transparent;
          position: absolute;
          top: 0;
          @if $left == 1 {
            right: 0;
            transform: scaleX(-1) translateX(-99%);
          } @else {
            transform: translateX(-99%) rotate(180deg) scaleX(-1);
            left: 0;
          }
        }
        .item-list {
          margin-bottom: 0.2rem;
          .item-vote {
            margin-right: 0.15rem;
            flex: 1;
            height: 1.5rem;
            line-height: 1.5;
            padding: 0.15rem 0.2rem;
            box-sizing: border-box;
            color: #666;
            font-size: 0.28rem;
            border-radius: 0.1rem;
            background: white;
            white-space: initial;
            @include ellipsis(3);
            &:last-child {
              margin-right: 0;
            }
            &.checked {
              color: #000;
              font-weight: bold;
              background: #ffdd50;
            }
          }
        }
        .hide {
          opacity: 0;
          position: absolute;
          z-index: -20;
        }
        .res-item {
          background: #e0e0e0;
          height: 0.56rem;
          line-height: 0.56rem;
          min-width: 3%;
          border-radius: 0.1rem;
          transition: width 0.3s;
          width: 50%;
          position: relative;
          .num {
            position: absolute;
            z-index: 9;
          }
          &.checked {
            $lineColorChecked: #ffdd50;
            background: $lineColorChecked;
            &.left::after,
            &.right::before {
              border-color: $lineColorChecked $lineColorChecked transparent
                transparent;
            }
            .num {
              font-weight: bold;
            }
          }
          &.left {
            text-align: left;
            border-radius: 0.1rem 0 0 0.1rem;
            &::after {
              @include percentLine(1);
            }
            .num {
              left: 0.15rem;
            }
          }
          &.right {
            text-align: right;
            border-radius: 0 0.1rem 0.1rem 0;
            margin-left: 0.3rem;
            &::before {
              @include percentLine(2);
            }
            .num {
              right: 0.15rem;
            }
          }
          &.isFull::before,
          &.isFull::after {
            display: none !important;
          }
          &.isFull {
            border-radius: 0.1rem;
          }
          &.isZero {
            opacity: 0;
            margin-left: -1000px;
          }
        }
      }
    }
  }
  .form-error {
    font-size: 0.24rem;
    margin-top: 0.14rem;
    color: #ff6f6f;
  }
  .iconCheck {
    font-weight: bold;
  }
}
</style>
