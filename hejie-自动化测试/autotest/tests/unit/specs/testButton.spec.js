import { expect, assert, should } from 'chai'
import { shallowMount } from '@vue/test-utils'
import test from '@/components/testButton.vue'
describe('测试test.vue组件', async () => {
  // 先describe一个测试组件，列出所有测试的点
  // 针对每个测试点写it，直接shallowMount挂载，然后expect，contain判定包含，equal判断相等即可

  // 常用语法：
  // expect(wrapper.html() 【或者.text() 】).contain('<span class="count">0</span>')
  // expect(vm.m1()).equal('123456')
  // 等同于assert( 平时js写法 ），只不过equal的语法可以直接输出结果比较友好

  it('和杰的测试', () => {
    let title = '测试标题'
    const wrapper = shallowMount(test, {
      propsData: { title }
    })
    let vm = wrapper.vm
    // 测试传值
    // expect(vm.title).equal(title)
    // expect(vm.title).contain(title)
    assert(vm.title === title)

    // 点击和测试点击事件
    let btn = wrapper.find('button')
    btn.trigger('click')
    expect(vm.data1).equal(title + '点击事件1')
  })
})
