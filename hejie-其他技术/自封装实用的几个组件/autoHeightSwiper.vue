<!--
自动适应banner高度的轮播图业务组件，很好用
用法：
1. banner轮播，点击可跳转，也有占位图样式,默认图片字段为pic属性，field='pic'
<banner :list='bannerList' swiperClass="noRadius"  @handleEmit='handleEmit'></banner>

2. 普通轮播，不要圆角
type='simple', 点击不会跳转，点击事件由外部自己决定，
field=''代表取的图片字段为空，代表传入的是一个纯数组，直接img:src=项
<banner
  :list="imgList"  // 纯数组：[地址1，地址2，地址3]
  siteStyle="height:184px;"
  type="simple"
  field=""
  swiperClass="noRadius"
  @handleEmit='handleEmit'
></banner>

* 重要参数：
* list：轮播图数组，传入的数组基本是请求回来的banner列表数组，可以是对象数组也可以是纯图片地址数组，配合下面field字段取特定的字段
* field: 图片的字段，默认是pic字段，传空则直接判定是数组直接取项
* type: String, 默认空，控制点击事件，传入simple代表传入的list是纯数组,simple下点击不会触发跳转，事件全权交给外部写

swiperOption： 轮播图配置项，和swiper的文档配置一样
@handleEmit 接收组件内部各种事件，比如'chooseBanner'
noBullet: boolean 关闭下一页指示器
swiperClass: ’noRadius‘  // 不要圆角 ，传入一个class字符串或对象，就和vue的类写法一样，直接作用在轮播容器上
swiperStyle: 传入一个内联样式，直接作用在容器上
siteStyle： 占位图样式，可以在这里重写占位图样式
-->

<template>
  <div class="oola-autoHeightBanner" v-if="list && list.length > 0">
    <div class="wrapper">
      <swiper :options="option" :class="swiperClass" :style="swiperStyle">
        <swiper-slide v-for="(item, index) in list" :key="index">
          <img
            class="banner-img"
            @click="clickBanner(item, index)"
            :src="field ? item[field] : item"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div class="banner-pagination" v-if="!noBullet && (list && list.length > 1)">
      <span :id="`swiper-${id}`" class="swiper-pagination" slot="pagination"></span>
    </div>
  </div>
  <div class="baseswiper-siteblock" v-else :style="siteStyle"></div>
</template>

<script>
import adBanner from "@/config/mixins/adBanner"
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
  mixins: [adBanner],
  data() {
    return {}
  },
  // 这个id属性，如果页面有两个swiper的话必须传，用来区分不同的swiper，不然会有问题
  props: {
    list: null,
    swiperOption: null,
    id: null,
    siteStyle: null,
    type: null,
    field: {
      type: String,
      default: "pic"
    },
    swiperClass: null,
    swiperStyle: null,
    noBullet: {
      type: Boolean,
      default: false
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    option() {
      let defaultOption = {
        pagination: `#swiper-${this.id}`,
        autoplay: 5000,
        centeredSlides: 1,
        paginationClickable: true,
        uniqueNavElements: false,
        paginationType: "bullets",
        autoplayDisableOnInteraction: false, // 设置用户操作swiper之后可继续autoplay
        autoHeight: true,
        onSlideChangeStart(swiper) {
          // 因为采用自适应高度的swiper，如果图片高度不一样，页面会自动撑开会触发滚动事件
          // 这时就会导致一些监听滚动事件的页面触发不必要的操作，所以在全局加入这个变量来控制，如果是这个
          // 组件导致的滚动则不触发
          window.swiperScroll = true
        },
        onSlideChangeEnd(swiper) {
          setTimeout(() => {
            window.swiperScroll = false
          }, 500)
        }
        // 关闭loop,因为loop模式下之后的节点会丢失事件，可以在这里onclick里面解决，但没必要，
        // 因为loop也会有其他一些性能问题
        // loop: (this.list && this.list.length > 1) ? true : false
      }
      return Object.assign({}, defaultOption, this.swiperOption)
    }
  },
  created() {
    window.swiperScroll = false
  },
  beforeDestroy() {
    window.swiperScroll = false
  },
  methods: {
    clickBanner(item, index) {
      this.$emit("handleEmit", "chooseBanner", { item, index })
      switch (this.type) {
        case "simple":
          break
        default:
          this.banner2page(item)
          break
      }
    }
  }
}
</script>

<style lang="scss">
.baseswiper-siteblock {
  height: 70px;
  background: #dcdcdc;
  border-radius: 0.1rem;
}
.oola-autoHeightBanner {
  position: relative;
  .swiper-container {
    // background-color: white;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 16px 0 rgba(18, 21, 58, 0.14);
    &.noRadius {
      border-radius: 0;
    }
  }
  .banner-img {
    width: 100%;
  }
  .banner-pagination {
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0.03rem;
  }
  .swiper-pagination-clickable .swiper-pagination-bullet {
    margin: 0 5px;
  }
  .swiper-pagination-clickable .swiper-pagination-bullet-active {
    width: 30px;
    border-radius: 4px;
    background: $theme-color-3;
    margin: 0 5px;
  }
}
</style>
