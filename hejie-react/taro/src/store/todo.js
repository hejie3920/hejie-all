import {observable} from 'mobx'

let todoStore = observable({
  todos:['吃饭','睡觉'],
  addTodo(item){
    this.todos.push(item)
  }
})

export default todoStore