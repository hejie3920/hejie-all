// 类型注解
let name1: string | object;
name1 = 'tom';
name1 = { name: 'tom' };
// name1 = 1; // wrong

// 类型推论
let name2 = 'jerry';

// 数组类型
let names: string[];
names = ['mike'];

// 任意类型
let foo: any = 'xx';
foo = 3;

// 任意类型也可用于数组
let list: any[] = [1, true, 'free'];
list[1] = 100;

// 函数中的类型
function greeting(person: string): string {
    return 'Hello' + person;
}
function greeting2(person: string): void {
    //dosomething
}
greeting('tom');
// 常见内置类型
// string，number，boolean，void，any


// 函数
// 此处name和age是必填参数
// 如果要变为可选参数，加上？
// 可选参数在必选参数后面
function sayHello(name: string, age: number = 20, addr?: string): string {
    return '你好：' + name + ' ' + age;
}

sayHello('jerry');
sayHello('jerry', 36);
// sayHello('jerry');  // wrong

// 重载
// 参数数量或者类型或者返回类型不同 函数名却相同
// 先声明，在实现
function info(a: { name: string }): string;
function info(a: string): object;
function info(a: { name: string } | string): any {
    if (typeof a === "object") {
        return a.name;
    } else {
        return { name: a };
    }
}
console.log(info({ name: "tom" }));
console.log(info("tom"));



// Class，面向对象
class Shape {
    // area: number
    constructor(protected color: string, private width: number, private height: number) {
        // this.area = width * height
        this.color = color
    }

    get area() {
        return this.width * this.height
    }

    shoutout() {
        return "I'm " + this.color + " with an area of " + this.area + " cm squared."
    }
}

class Square extends Shape {
    constructor(color: string, side: number) {
        super(color, side, side)
        console.log(this.color)
    }
    // 覆盖
    shoutout() {
        return "我是" + this.color + " 面积是" + this.area + "平方厘米"
    }
}
const square = new Square('blue', 2)
console.log(square.shoutout())


// 接口

interface Person {
    firstName: string;
    lastName: string;
}
function greeting3(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
const user = { firstName: 'Jane', lastName: 'User' };
console.log(user);
console.log(greeting3(user));