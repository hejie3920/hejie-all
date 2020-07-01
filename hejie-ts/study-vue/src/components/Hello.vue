<template>
  <div>
    {{msg}}
    <div>
      <input type="text" v-model="inputVal" placeholder="输入新特性" @change="addFeature" />
    </div>
    <ul>
      <li v-for="(feature,index) in features" :key="index">{{feature.name}}</li>
      <li>{{count}}</li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";

// 声明模块 d.ts
declare namespace myInterface {
  interface obj {
    [key: string]: any;
  }
}

// 简单声明一个第三方模块以便可以直接使用
// declare module 'oola-mini-fbi'

// 接口中只需定义结构，不需要初始化
interface Feature {
  id: number;
  name: string;
  version: string;
  // 添加额外的可扩展的属性
  [extraPorp: string]: any;
}

// ts自带工具partial
// const testObj: Feature = {};// 报错
const testObj: Feature = { id: 23, name: "hejie", version: "123", desc: "23" };
const testPartial: Partial<Feature> = {}; // 不会报错
// -------------------------------------------------------------------

// 接口表示函数类型
type TestFunc = (s1: string, s2: string) => string;
const myFunc: TestFunc = (p1: string, p2: string) => {
  return p1 + p2;
};
// -------------------------------------------------------------------

// 接口类型,接口继承
interface FeatureB extends Feature {
  propB: (p1: string) => string;
}
const tmpB = <FeatureB>{};
tmpB.name = "aha";

// 定义接口
interface TestPerson {
  name: string;
  age: number;
}

interface TestList {
  name: string;
  parents: TestPerson[];
  children: TestPerson[];
}
const testper: TestList = {
  name: "hahah",
  parents: [
    {
      name: "hahah",
      age: 24,
    },
    {
      name: "hahah",
      age: 24,
    },
  ],
  children: [
    {
      name: "hahah",
      age: 24,
    },
    {
      name: "hahah",
      age: 24,
    },
  ],
};
// -------------------------------------------------------------------

// 使用泛型
interface Result<T> {
  ok: 0 | 1;
  data: T[];
}
const name: string = "abc";

function getData<T>(): Result<T> {
  const data: any[] = [
    { id: 1, name: "类型注解", version: "2.0" },
    { id: 2, name: "编译型语言", version: "1.0" },
  ];
  return { ok: 1, data };
}
// -------------------------------------------------------------------

// is判断类型
interface Teacher {
  teach(): void;
}
interface Student {
  learn(): void;
}

function getPerson(): Teacher | Student {
  const obj =
    Math.random() > 0.5
      ? {
          teach: () => {
            console.warn("TCL: ", "nihao");
          },
        }
      : {
          learn: () => {
            console.warn("TCL: ", "nihao");
          },
        };
  return obj;
}
const haha = getPerson();

function isTeacher(person: Teacher | Student): person is Teacher {
  return (person as Teacher).teach !== undefined;
}
console.warn("TCL: 是不是teacher", !!isTeacher(haha));
// -------------------------------------------------------------------

// 类型数组
function hellow<T>(arg: T[]): T[] {
  console.warn("TCL:", arg.length);
  return arg;
}
// -------------------------------------------------------------------
@Component({
  props: {
    // 属性也可以在这里配置
    name: {
      type: String,
      default: "匿名",
    },
  },
})
export default class Hello extends Vue {
  @Prop({ required: true, type: String }) private msg!: string;
  private inputVal: string = "";

  // data中的值
  private features!: Feature[];
  // 生命周期
  private created() {
    this.features = getData<Feature>().data;
    // this.features = getData<Result<Feature>>().data; // 错误的
  }

  // @Watch("inputVal", { deep: true })
  // public test(val: string, oldVal: any) {
  //   console.log(val, oldVal);
  // }

  @Emit()
  private addFeature(event: any) {
    const feature = {
      name: event.target.value,
      id: this.features.length + 1,
      version: "1.0",
    };
    this.features.push(feature);
    this.$forceUpdate();
    // return event.target.value;
  }
  // 相当于计算属性
  get count() {
    return this.features.length;
  }
}
</script>

<style scoped>
</style>