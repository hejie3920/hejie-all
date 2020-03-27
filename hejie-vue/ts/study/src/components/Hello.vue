<template>
  <div>
    {{msg}}
    <div>
      <input type="text" placeholder="输入新特性" @keyup.enter="addFeature">
    </div>
    <ul>
      <li v-for="feature in features" :key="feature.id">{{feature.name}}</li>

      <li>{{count}}</li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";

// 接口中只需定义结构，不需要初始化
interface Feature {
  id: number;
  name: string;
  version: string;
}

// 使用泛型
interface Result<T> {
  ok: 0 | 1;
  data: T[];
}

function getData<T>(): Result<T> {
  const data: any[] = [
    { id: 1, name: "类型注解", version: "2.0" },
    { id: 2, name: "编译型语言", version: "1.0" }
  ];
  return { ok: 1, data };
}

@Component({
  props: {
    // 属性也可以在这里配置
    name: {
      type: String,
      default: "匿名"
    }
  }
})
export default class Hello extends Vue {
  @Prop({ required: true, type: String }) private msg!: string;

  // data中的值
  private features!: Feature[];

  @Watch("features", {deep: true})
  onRouteChange(val: string, oldVal: any) {
    console.log(val, oldVal);
  }

  @Emit()
  private addFeature(event: any) {
    const feature = {
      name: event.target.value,
      id: this.features.length + 1,
      version: "1.0"
    };
    this.features.push(feature);
    event.target.value = feature;

    return event.target.value;
  }
  // 如果要让继承的类访问 protected
  // 如果都能访问public

  // 生命周期
  private created() {
    // setTimeout(() => {
    //   this.features.push({ id: 2, name: "类型注解333", version: "2.0" });
    // }, 1000);

    this.features = getData<Feature>().data;
    // this.features = getData<Result<Feature>>().data; // 错误的
  }

  // 相当于计算属性
  get count() {
    return this.features.length;
  }
}
</script>

<style scoped>
</style>