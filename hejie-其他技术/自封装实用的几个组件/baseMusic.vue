<!--
  音乐组件
  <baseMusic v-model='play' v-bind="musicOptions"></baseMusic>
  v-model双向绑定音乐的播放状态
  musicOptions: {
    musicUrl: require("@media/wx/bgm.mp3"),
    iconPlay,
    iconStyle: 图标的行内样式,
    iconPause,
    audioOpions: 想作用在audio标签上的属性,
  }
-->
<template>
  <div class="oola-baseMusic">
    <div
      class="music-icon"
      ref="btn"
      :style="iconStyle"
      @click="playController(!playStatus)"
      :class="{play:playStatus}"
    >
      <img v-show="playStatus" :src="iconPlay" />
      <img v-show="!playStatus" :src="iconPause" />
    </div>
    <audio ref="baseAudio" v-bind="finalAudioOptions">
      <source :src="musicUrl" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
export default {
  name: "baseMusic",
  data() {
    return {
      musicDom: "",
      playStatus: false
    }
  },
  props: {
    musicUrl: null,
    iconPlay: {
      type: String,
      default: () => require("@img/wx/open.png")
    },
    iconStyle: null,
    iconPause: {
      type: String,
      default: () => require("@img/wx/close.png")
    },
    audioOpions: Object,
    autoplay: true,
    value: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value(val) {
      this.playStatus = val
    },
    playStatus(newVal) {
      this.$emit("input", newVal)
    }
  },
  computed: {
    finalAudioOptions() {
      let defaultOptions = {
        preload: "preload",
        loop: "loop",
        autoplay: "autoplay"
      }
      return { ...defaultOptions, ...this.audioOpions }
    }
  },
  mounted() {
    if (this.value) {
      this.musicDom = this.$refs.baseAudio
      this.initPlayer(this.musicDom)
    }
  },
  methods: {
    initPlayer(dom) {
      let audio = typeof dom === "string" ? document.querySelector(dom) : dom
      if (!audio) {
        console.warn("TCL: 找不到音乐节点")
        return
      }
      function isWeixin() {
        let ua = window.navigator.userAgent.toLowerCase()
        return /micromessenger/.test(ua)
      }
      if (isWeixin()) {
        document.addEventListener(
          "WeixinJSBridgeReady",
          () => {
            this.playController(true)
          },
          false
        )
        // 添加 getNetworkType 的判断原因, 请看问题分析2
        if (typeof window.WeixinJSBridge == "object" && typeof window.WeixinJSBridge.invoke == "function") {
          window.WeixinJSBridge.invoke("getNetworkType", {}, () => {
            this.playController(true)
          })
        }
      } else {
        this.playController(true)
        let touchPlay = () => {
          setTimeout(() => {
            this.playController(true)
          }, 10)
          document.removeEventListener("click", touchPlay, true)
        }
        if (audio.paused) {
          document.addEventListener("click", touchPlay, true)
        }
      }
    },
    playController(status = true) {
      try {
        if (status) {
          this.musicDom.play()
        } else {
          this.musicDom.pause()
        }
        this.playStatus = !this.musicDom.paused
      } catch (error) {
        console.log("playController -> error", error)
      }
    }
  }
}
</script>

<style lang="scss">
.oola-baseMusic {
  .music-icon {
    width: 0.8rem;
    position: fixed;
    z-index: 4000;
    top: 0.2rem;
    right: 0.2rem;
    border-radius: 50%;
    overflow: hidden;
    // 这种方式控制播放暂停的话在ios上有问题，所以这里先暂时不做旋转角度暂停了
    // animation-play-state: paused;
    &.play {
      animation: rotate 5s linear infinite forwards;
      // animation-play-state: running;
    }
    img {
      pointer-events: none;
      width: 100%;
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
