<!--
跑马灯展示列表组件

属性：
* list传入对象数组，
type: 类型，现在有normal和diy，
  normal则是普通排版，头像+姓名+描述
  diy则是最自由的自定义布局，这时要注意外部调用者自己写内容插到里面，所以外部要引入swiper-slide组件
* 注意，type是默认的时候，请确保list数组里面有_img,_name,_desc字段，这时候会取这些字段展示

lineHeight:每行的行高，默认是0.8也就是80px,
swiperOption swiper的选项,
  默认： {
    autoplay: 3000, 轮播时间3秒
    slidesPerView: 5, 每个容器放五条，这里会自动结合lineHeight计算容器高度
    autoplayDisableOnInteraction: false,
    loop: true,  循环
    allowTouchMove: false,  允许触摸滑动与否
    direction: "vertical"   垂直方向
  }


第一种使用： 默认使用：
<baseLamp :list="testArr">
  // 没数据时的内容，可选
  <div slot="no-data">
    <img
      src="https://oola-web-mp.oss-cn-shenzhen.aliyuncs.com/oola-recycle-mp/recycleOss/recycle/pic-OOLAKid.png"
    />
    <p>抢沙发咯！</p>
    <p>活动火热进行ing，马上点击参与</p>
  </div>
</baseLamp>

第二种使用：自定义轮播排版，type=diy：

<baseLamp :list="testArr2" type="diy">
  // 每个轮播项的样式
  <swiper-slide slot="swiperItem" v-for="(item,index) in testArr2" :key="index">
    <p>{{index}}</p>
  </swiper-slide>

  // 没数据时的展示
  <div class="no-lampData flex-col" slot="no-data">
    <img
      src="https://oola-web-mp.oss-cn-shenzhen.aliyuncs.com/oola-recycle-mp/recycleOss/recycle/pic-OOLAKid.png"
    />
    <p>抢沙发咯！</p>
    <p>活动火热进行ing，马上点击参与</p>
  </div>
</baseLamp>
import { swiperSlide } from "vue-awesome-swiper"
components: {
  swiperSlide
}
-->
<template>
  <div class="oola-baseLamp">
    <div
      class="no-data"
      v-if="$global.isEmpty(list)"
      :style="`height:${Math.round(lineHeight * finalSwiperOption.slidesPerView)}rem; `"
    >
      <slot name="no-data"></slot>
    </div>
    <div v-else>
      <swiper
        :options="finalSwiperOption"
        v-if="type=='normal'"
        class="baseLamp-swiper swiper-no-swiping"
        :style="`height:${Math.round(lineHeight * finalSwiperOption.slidesPerView)}rem; `"
      >
        <swiper-slide v-for="(item,index) in list" :key="index">
          <div class="lamp-item flex-line">
            <img
              :src="item._img || '//images-w.oola.cn/oolaimgs/oolam/common/def-thumb.png'"
              class="thumb"
            />
            <div class="flex1-l name" v-html="item._name"></div>
            <div class="desc" v-html="item._desc"></div>
          </div>
        </swiper-slide>
      </swiper>
      <swiper
        :options="finalSwiperOption"
        v-else-if="type === 'diy'"
        class="baseLamp-swiper swiper-no-swiping"
        :style="`height:${Math.round(lineHeight * finalSwiperOption.slidesPerView)}rem; `"
      >
        <slot name="swiperItem"></slot>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"

export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    // 回收者跑马灯数据
    swiperOption: {
      type: Object,
      default: () => {}
    },
    lineHeight: {
      type: Number,
      default: 0.8
    },
    type: {
      type: String,
      default: "normal"
    }
  },
  computed: {
    finalSwiperOption() {
      let defaultOption = {
        autoplay: 3000,
        slidesPerView: 5,
        autoplayDisableOnInteraction: false,
        allowTouchMove: false,
        direction: "vertical"
      }
      let res = Object.assign({}, defaultOption, this.swiperOption)
      res.loop = this.list.length > res.slidesPerView ? true : false
      // 回收者跑马灯数据
      return res
    }
  },
  created() {
    console.log("TCL: ", this.list)
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss">
.oola-baseLamp {
  .baseLamp-swiper {
    width: 100%;
    overflow: hidden;
    .lamp-item {
      .thumb {
        width: 0.5rem;
        margin-right: 0.1rem;
        border-radius: 50%;
      }
      .name {
        @include ellipsis(1);
      }
      .desc {
        margin-left: 0.5rem;
      }
    }
  }
}
</style>