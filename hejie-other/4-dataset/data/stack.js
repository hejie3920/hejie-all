class Stack {

    constructor() {
        this.items = []
    }

    // 入栈
    push(element) {
         this.items.push(element)
    }

    // 出栈
    pop() {
        return this.items.pop()
    }

    // 末位
    get peek() {
        return this.items[this.items.length - 1]
    }

    // 是否为空栈
    get isEmpty() {
        return !this.items.length
    }

    // 尺寸
    get size() {
        return this.items.length
    }
    // 打印栈数据
    print() {
        console.log(this.items.toString())
    }
}
// 实例化一个栈
const stack = new Stack()
console.log(stack.isEmpty) // true

// 添加元素
stack.push(5)
stack.push(8)

// 读取属性再添加
console.log(stack.peek) // 8
stack.push(11)
console.log(stack.size) // 3
console.log(stack.isEmpty) // false