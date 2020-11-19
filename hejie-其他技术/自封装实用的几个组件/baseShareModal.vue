<!--
  分享弹框
    <share-modal ref="shareModal" :shareInfo='shareInfo'></share-modal>

  * 号代表必须有的属性
  * ref='节点名字' 最重要是获取节点然后直接this.$refs.shareModal.share()调用分享
  * shareInfo: 分享信息，和设置的分享信息是同一个来着

  baseOptions: Object,可传的东西与baseModal一样，因为这组件其实就是baseModal，就是直接拓展出来作为baseModal的属性而已
  imgUrl: String, 分享图片的地址，传空字符串就不显示图片
-->
<template>
  <div class="oola-shareModal">
    <base-modal v-model="showGuide" modalClass="oola-h5share-pop" v-bind="finalOptions">
      <div class="guide-modal">
        <img :src='imgUrl' class="img-share" v-if="imgUrl">
        <slot></slot>
      </div>
    </base-modal>
    <base-modal v-model="showDialog" v-bind="finalDialogOptions" @confirm='copyLink'>
      <div class="oola-h5share-dialog">
        <div class="dialog-title">复制分享链接</div>
        <input type="text" :value="shareLink" class="dialog-input" ref='inputLink' >
      </div>
    </base-modal>
  </div>
</template>

<script>
import baseModal from '@/components/common/baseModal'
import NativeShare from '@/config/mixins/nativeShare'
import { Toast } from 'mint-ui'

export default {
    name: "baseShareModal",
    mixins: [NativeShare],
    data () {
      return {
        showGuide: false,
        showDialog: false,
        finalOptions: '',
        finalDialogOptions: '',
      }
    },
    components: {
      baseModal
    },
    props: {
      imgUrl: {
        type: String,
        default: '//images-w.oola.cn/oolaimgs/oolam/common/img-share.png'
      },
      baseOptions: Object,
      shareInfo: null,
    },
    computed: {
      shareLink() {
        return (this.shareInfo && this.shareInfo.shareLink) || location.href
      }
    },
    created () {
      let defaultOptions = {
        position: 'top'
      }
      this.finalOptions = Object.assign({},defaultOptions,this.baseOptions)
      let defaultDialogOptions = {
        btns:2,
        btnsOptions: {
          confirm: {
            txt: '复制'
          }
        }
      }
      this.finalDialogOptions = Object.assign({},defaultDialogOptions,this.baseOptions)
    },
    methods: {
      share () {
        if (!this.nativeShareConfig('default', this.shareInfo)) {
          if (this.$platform.name === 'wx') {
            // 如果分享失败，就显示引导分享弹框
            this.showGuide = true
          } else {
            this.showDialog = true
            setTimeout(() => {
              if(this.$refs.inputLink) {
                this.$refs.inputLink.focus()
                this.$refs.inputLink.select()
              }
            }, 0);
          }
        }
      },
      copyLink() {
        this.$copyText(this.shareLink).then(e => {
          Toast('复制成功，赶紧去粘贴分享吧！')
        }, err => {
          Toast('复制失败，尝试手动复制吧~')
        })
      },
    }
    
  }
</script>

<style lang="scss">
.oola-shareModal {
  .oola-h5share-pop {
    width: 100vw;
    align-items: flex-end;
    padding: 0.2rem 0.5rem;
    box-sizing: border-box;
    .img-share {
      width: 4rem;
    }
  }
  .oola-h5share-dialog {
    padding: .4rem;
    .dialog-title {
      font-size: .3rem;
      margin-bottom: .3rem;
    }
    .dialog-input {
      border: 1px solid #adadad;
      min-width: 4.4rem;
      padding: .1rem 0.2rem;
    }

  }

}
</style>
