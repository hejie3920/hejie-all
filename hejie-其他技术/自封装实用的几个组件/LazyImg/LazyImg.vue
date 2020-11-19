<template>
  <div v-lazy:background-image="imgObj" class="lazy" :style="style">
  </div>
</template>

<script>
export default {
  name: 'lazy-img',
  props: {
    imgUrl: String,
    width: {
      default: '100%'
    },
    height: {
      default: '100%'
    },
    roundedCorners: {
      default: false
    }
  },
  data () {
    return {
      inner_width: 0,
      inner_height: 0
    }
  },
  computed: {
    style () {
      return {
        width: this.inner_width + 'px',
        'padding-top': (this.inner_height / this.inner_width) * 100 + '%',
        'border-radius': this.roundedCorners
          ? typeof this.roundedCorners === 'boolean' ? '5px' : this.roundedCorners
          : 0
      }
    },
    imgObj () {
      return {
        src: this.imgUrl || require('@/images/logo.png'),
        error: require('@/images/logo.png')
      }
    }
  },
  methods: {
    /**
     * convertSizeToPixels - 将任何类型的长度单位转成像素单位
     *
     * @param  {type} size                prop 传进来的宽高
     * @param  {type} dim                 要设置的维度
     * @param  {type} parentDim = 'width' 想要对比的父（祖先）元素的维度
     * @return {undefined}                因为只能在 Vue.nextTick 中执行函数，所以此
     *                                    方法不能为纯函数
     */
    convertSizeToPixels (size, dim, parentDim = 'width') {
      if (typeof size === 'number') {
        this[`inner_${dim}`] = size
      }

      const unit = size.split('').reduce((unit = '', c) => {
        if (isNaN(c) && c !== '' && c !== '.') { return unit + c }
      })

      // 转换策略
      const unitsConvertStragtegy = {
        px: (size) => {
          this[`inner_${dim}`] = Number(size.substring(0, size.length - 2))
        },
        '%': (size, dom) => {
          const percentage = Number(size.substring(0, size.length - 1)) / 100
          const parentSize = dom.parentNode.getBoundingClientRect()[parentDim]
          // console.log(dom.parentNode.style)
          this[`inner_${dim}`] = percentage * parentSize
        }
      }

      this.$nextTick(() => unitsConvertStragtegy[unit](size, this.$el, dim))
    }
  },
  mounted () {
    this.convertSizeToPixels(this.width, 'width')

    if (this.height) {
      this.convertSizeToPixels(this.height, 'height')
    } else {
      this.convertSizeToPixels(this.width, 'height')
    }
  }
}
</script>

<style lang="scss" scoped>
div.lazy {
  background: #eee;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity .3s linear;
  &[lazy=loading] {
    opacity: .4
  }
  &[lazy=loaded] {
    opacity: 1
  }
  &[lazy=error] {
    background-size: 50%;
    background-position: center;
  }
}
</style>
