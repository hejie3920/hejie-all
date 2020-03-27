<template>
  <div>
    <input v-model="msg" />
    <p>msg: {{ msg }}</p>
    <p>computed msg: {{ computedMsg }}</p>
    <button @click="greet">Greet</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
type AnimalType = "cat" | "dog" | "frog" | "test"
interface AnimalDescription {
  name: string
  title: string
}
interface Animal {
  [x: string]: {
    name: string
    title: string
  }
}
interface test {
  a: string
  b: number
}
const enum learns {
  math,
  sports
}

@Component
export default class App extends Vue {
  // 初始化数据
  msg: number = 123
  AnimalMap: Record<AnimalType, AnimalDescription> = {
    cat: { name: "猫", title: "cat" },
    dog: { name: "狗", title: "dog" },
    frog: { name: "蛙", title: "wa" },
    test: { name: "蛙", title: "wa" }
  }
  haha: Partial<test> = {}
  testFunc(val: number) {
    console.log("TCL: ", val)
  }
  // 方法
  greet<T>(val?: T) {
    console.log("TCL: ", typeof val)
    // this.testFunc(23)
  }

  // 声明周期钩子
  mounted() {
    this.greet<number>(2323)
  }

  // 计算属性
  get computedMsg() {
    return "computed " + this.msg
  }
}
</script>
