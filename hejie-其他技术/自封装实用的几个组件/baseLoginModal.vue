<!--
  desc: 手机登录或者绑定弹框
  <login-modal 
    必要：
    v-model='showLogin' 
    redirectUrl='登录后要跳转刷新的链接，不填的话则登录成功后不刷新不跳转，交给loginSuccess回调去操作'

    可选：
    type='login' 默认是登录，也有bindPhone绑定手机的，一些需要要求绑定手机号的场景的话
    具体是登录还是绑定可以通过mixin文件 autoLogin.js文件里面的sureLogin来获取方式
    @loginSuccess='loginSuccess'
    @submit='submit'
    :agreement='agreement' 
    :extraObj="{partner: 'hejing_futurehome'}"
  />
  v-model双向控制加载与否
  type: login/bindPhone   绑定还是登陆手机
  @loginSuccess 成功登录触发事件，只有redirectUrl传空白字符串的时候才会触发

  redirectUrl: 有三种，默认，空，和自写链接
  默认是当前路径，登录后会刷新当前路由，不会触发loginSuccess
  填空白字符串的话，只会触发loginSuccess回调，其他情况下登录成功后会跳到指定页面

  extraObj 调请求登录接口的时候要额外给data传入的数据，可以复写最终请求的data =>  finalObj = Object.assign({},defaultObj,this.extraObj)
  extraObj:  
  {
    noRedirect: Boolean, 
    // 默认是true，登录后不重定向，这样就能出发@loginSuccess回调，如果设置成false，则登录后会自动刷新当前页，不会触发@loginSuccess回调
  }
  @submit: 点击登录按钮时触发的事件，可以用于外部打点
  agreement: 可选  展示用户协议列表，是否同意
  例子: agreement: {
    list: [
      {
        text: `《 合景用户协议 》`,
        // 点击回调
        cb: () => {}
      },
      {
        text: `《 噢啦用户协议 》`,
        // 点击回调
        cb: () => {}
      }
    ]
  }
-->
<template>
  <base-modal v-model="show" class="oola-login-pop">
    <div class="oLogin">
      <div class="oLogin-title">手机登录</div>
      <div class="oLogin-wrap">
        <input
          class="oLogin-content"
          type="tel"
          placeholder="手机号码"
          v-model="phoneNum"
          maxlength="11"
          @blur="inputLoseFocus"
          ref="num"
        />
      </div>
      <div class="oLogin-wrap codeWrap flex-row">
        <input
          class="oLogin-content code"
          type="number"
          placeholder="验证码"
          v-model="qrCodeContent"
          @blur="inputLoseFocus"
          ref="psg"
          @input="limitNum"
        />
        <span @click="getQrCode" class="get-code">{{ getCodeBtnTitle }}</span>
      </div>
      <checkbox v-model="checkAgreement" class="oLogin-wrap checkReg" v-if="agreement">
        已阅读并同意
        <span
          class="agreement-link"
          v-for="(item,index) in agreement.list"
          :key="index"
          @click.stop="item.cb"
        >{{item.text}}</span>
      </checkbox>

      <div class="oLogin-btns">
        <div class="btn" @click="closePhone">取消</div>
        <div class="btn submitBtn" :class="{disabled: !checkAgreement}" @click="submit">马上登录</div>
      </div>
    </div>
  </base-modal>
</template>

<script>
import { Toast } from "mint-ui"
import { checkPhone } from "@/config/utils"
import { MessageSendCode } from "@/service/getDate"
import phoneAuth from "@/config/mixins/phoneAuth"
import Checkbox from "@/components/base/checkbox"
import baseModal from "@/components/common/baseModal"

export default {
  name: "baseLoginModal",
  mixins: [phoneAuth],
  data() {
    return {
      show: this.value,
      timer: "",
      countDown: 60,
      phoneNum: "",
      qrCodeContent: "",
      getCodeBtnTitle: "获取验证码",
      hasGetCode: false,
      errorInfo: "",
      checkAgreement: true
    }
  },
  components: {
    Checkbox,
    baseModal
  },
  props: {
    // 加载与否
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "login"
    },
    extraObj: Object,
    redirectUrl: {
      type: String,
      default: "null"
    },
    agreement: Object
  },
  methods: {
    inputLoseFocus() {
      setTimeout(() => {
        // 获取clientHeight直接触发重绘，用来解决键盘收起时底部空白的问题
        document.body.clientHeight
        // 下面这个scrollTo也是用来解决键盘回收问题，不过亲测没用，并且会导致直接滑到顶部，所以注释掉
        // window.scrollTo(0, 0)
        // document.documentElement.scrollTop = document.body.scrollTop = 0
      }, 100)
    },
    limitNum() {
      if (this.qrCodeContent.length > 6) {
        this.qrCodeContent = this.qrCodeContent.slice(0, 6)
      }
    },
    /**
     * 获取验证码
     */
    getQrCode() {
      if (this.hasGetCode) {
        return
      }
      if (!this.phoneNum) {
        this.errorInfo = "请输入手机号码"
        Toast(this.errorInfo)
        return
      }
      if (!checkPhone(this.phoneNum)) {
        this.errorInfo = "请输入正确的手机号码"
        Toast(this.errorInfo)
        return
      }
      let loginVerifyCode = {
        telephone: this.phoneNum,
        scenario: this.type
      }
      this.hasGetCode = true
      MessageSendCode(loginVerifyCode).then(
        res => {
          this.hasGetCode = false
          if (res.status === "true") {
            this.hasGetCode = true
            Toast("短信验证码已发送至您的手机，请注意查收")
            this.getCodeTimer(60)
          } else {
            // 如果绑定手机号的时候发现手机号已经被绑定，询问是否用该手机号登录
            if (this.type === "bindPhone" && Number(res.code) === 5013) {
              let loginVerifyCodeLogin = {
                telephone: this.phoneNum,
                scenario: "login",
                source: "oola"
              }
              this.sendCaptcha(loginVerifyCodeLogin).then(res => {
                this.hasGetCode = false
                if (res === 1) {
                  this.hasGetCode = true
                  Toast("短信验证码已发送至您的手机，请注意查收")
                  this.getCodeTimer(60)
                } else {
                  const msg = res.msg || res.responseMsg
                  if (msg) {
                    Toast(msg)
                  }
                }
              })
            } else {
              Toast(res.msg)
            }
          }
        },
        res => {
          this.hasGetCode = false
        }
      )
    },
    /**
     * @description 获取验证码倒计时
     * @param time {number} 倒计时长， 单位 S(秒)
     */
    getCodeTimer(time) {
      let self = this
      self.timer = setInterval(() => {
        time--
        if (time !== 0) {
          self.getCodeBtnTitle = `${time}s`
        } else {
          self.hasGetCode = false
          self.getCodeBtnTitle = "获取验证码"
          self.qrCodeContent = ""
          clearInterval(self.timer)
        }
      }, 1000)
    },
    submit() {
      if (this.agreement && !this.checkAgreement) {
        Toast("请先阅读并勾选协议")
        return
      }
      if (!this.phoneNum) {
        this.errorInfo = "请输入手机号码"
        Toast(this.errorInfo)
        return
      }
      if (!checkPhone(this.phoneNum)) {
        this.errorInfo = "请输入正确的手机号码"
        Toast(this.errorInfo)
        return
      }
      if (!this.hasGetCode) {
        this.errorInfo = "验证码错误"
        Toast(this.errorInfo)
        return
      }
      if (!this.qrCodeContent) {
        this.errorInfo = "请输入验证码"
        Toast(this.errorInfo)
        return
      }
      let defaultObj, finalObj
      this.$emit("submit")
      this.$store.state.trackFunc && this.$store.state.trackFunc(true)
      switch (this.type) {
        case "login":
          defaultObj = {
            telephone: this.phoneNum,
            verifyCode: this.qrCodeContent,
            // partner: 'hejing_futurehome',
            checked: this.checkAgreement ? 1 : 0,
            redirectUrl: this.finalRedirectUrl,
            noRedirect: !this.finalRedirectUrl
          }
          finalObj = Object.assign({}, defaultObj, this.extraObj)
          this.$store.dispatch("any2token", finalObj).then(res => {
            if (res.code == "200") {
              this.$emit("loginSuccess", res)
              this.show = false
            }
          })
          break
        case "bindPhone":
          defaultObj = {
            telephone: this.phoneNum,
            bindCode: this.qrCodeContent,
            // source: 'dialog',
            checked: this.checkAgreement ? 1 : 0,
            redirectUrl: this.finalRedirectUrl,
            noRedirect: !this.finalRedirectUrl
          }
          finalObj = Object.assign({}, defaultObj, this.extraObj)
          this.$store.dispatch("changeUserInfo", finalObj).then(res => {
            this.$emit("loginSuccess", res)
            this.show = false
          })
          break
      }
    },
    closePhone() {
      this.show = false
      this.$store.state.trackFunc && this.$store.state.trackFunc(false)
    }
  },
  computed: {
    finalRedirectUrl() {
      return this.redirectUrl === "null"
        ? this.$route.fullPath
        : this.redirectUrl
    }
  },
  watch: {
    value(val) {
      if (this.show !== val) {
        this.show = val
      }
    },
    show(val) {
      this.$emit("input", val)
    }
  }
}
</script>

<style lang="scss">
.oola-login-pop {
  .oLogin {
    width: 6.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
    z-index: 30;
    .oLogin-title {
      font-size: 0.36rem;
      color: #666666;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.4rem 0;
    }
    .oLogin-wrap {
      padding: 0 0.41rem;
      .oLogin-content {
        width: 5.4rem;
        border-bottom: 0.01rem solid #dedede;
        padding: 0 !important;
        padding-bottom: 0.2rem !important;
        font-size: 0.34rem;
        color: #000;
        text-align: left;
      }
      .code {
        width: 3rem;
      }
      &.codeWrap {
        margin-top: 0.74rem;
        position: relative;
        align-items: flex-end;
        .get-code {
          width: 2.1rem;
          height: 0.9rem;
          line-height: 0.9rem;
          text-align: center;
          font-size: 0.34rem;
          // color: $theme-color;
          // border: 1px solid $theme-color;
          background: #fff9e2;
          color: #ffc21a;
          font-weight: normal;
          border-radius: 0.1rem;
        }
      }
      &.checkReg {
        margin-top: 0.44rem;
      }
    }
    .oLogin-btns {
      border-top: 1px solid #e9ecf5;
      margin-top: 0.45rem;
      display: flex;
      justify-content: space-between;
      .btn {
        width: 3.1rem;
        height: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.36rem;
        font-weight: bold;
        color: #666;
      }
      .submitBtn {
        color: #ffc21a;
        border-left: 1px solid #e9ecf5;
        &.disabled {
          color: #999999;
        }
      }
    }
    .agreement-link {
      color: #29b3e6;
    }
  }
}
</style>
