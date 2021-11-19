<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script lang='ts'>
let num: number = 20
type Exclude<T, U> = T extends U ? never : T
// 相当于: type A = 'a'
type A = Exclude<'x' | 'a', 'x' | 'y' | 'z'>
interface User {
  id: number
  age: number
  name: string
}

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    console.log('TCL: num')
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
