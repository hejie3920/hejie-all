import commander from "commander";
import colors from "colors";
import axios, { AxiosResponse } from "axios";

commander
  .version("1.0.0")
  .option("-c --city [name]", "添加城市")
  .parse(process.argv);
if (commander.city) {
  console.log("TCL: ", commander.city);
}
if (process.argv.slice(2).length === 0) {
  commander.outputHelp(colors.red);
  process.exit();
}

interface IWeatherResponse {
  status: string;
  count: string;
  info: string;
  infocode: string;
  lives: ILive[];
}
interface ILive {
  province: string;
  city: string;
  adcode: string;
  weather: () => void;
  temperature: string;
  winddirection: string;
  windpower: number;
  humidity: string;
  reporttime: string;
  test: (str: string) => string;
}

const url = "http://restapi.amap.com/v3/weather/weatherInfo";
const upper = (str: string) => {
  return str.toLocaleUpperCase();
};
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
interface Action<T> {
  payload?: T;
  type: string;
}
//  假设有Modle这样一个interface
interface Hejie {
  count: number;
  message: string;
  asyncMethod<T, U>(action: Promise<T>): Promise<Action<U>>;
  syncMethod<T, U>(action: Action<T>): Action<U>;
}
//  实现type Connect
//  保留属性为函数类型，其余的摒弃掉
//  把函数类型转化为<T, U>(args: T) => Action<U>
// type Connect<T> = /*代码*/;
// type Result = Connect<Module>;
// type Result = {
//   asyncMethod<T, U>(input: T): Action<U>;
//   syncMethod<T, U>(action: T): Action<U>;
// };

type PickFuncProp<T> = {
  [P in keyof T]: T[P] extends Function ? P : never;
}[keyof T];

type MyPick<T, K> = {
  [k in K]: k extends keyof T ? T[k] : never;
};

type test = MyPick<Hejie, "count">;
type test2 = PickFuncProp<Hejie>;

// type TransitionFunc<F> = F extends (
//   action: Promise<infer T>
// ) => Promise<Action<infer U>>
//   ? <T, U>(action: T) => Action<U>
//   : F extends (action: Action<infer T>) => Action<infer U>
//   ? <T, U>(action: T) => Action<U>
//   : F;
// // // TransitionFunc<asyncMethod> <=> <T, U>(action: T) => Action<U>;
// type Connect<T> = {
//   [P in PickFuncProp<T>]: TransitionFunc<T[P]>;
// };
// type Result = Connect(Hejie)

const key = "kes";
axios
  .get(`${url}?city=${encodeURI(commander.city)}&key=${key}`)
  .then((res: AxiosResponse<IWeatherResponse>) => {
    // 重写res的返回值后可以实现res.data.之后自动补全返回值，类型判断
    console.log("接口返回", colors.green(JSON.stringify(res.data)));
  })
  .catch(() => {
    console.warn(colors.red("出错了"));
  });
