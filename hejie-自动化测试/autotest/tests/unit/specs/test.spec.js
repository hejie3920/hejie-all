import { expect, assert, should } from 'chai'
import { shallowMount } from '@vue/test-utils'
import test from '@/components/test.vue'

const wrapper = shallowMount(test)
const vm = wrapper.vm
describe('测试test.vue组件', () => {
  it('消息是否正确', () => {
    const msg = '我是测试语句'
    expect(wrapper.text()).to.include(msg)
  })
  it('测试m1方法', () => {
    // expect(vm.m1()).to.equal('123456')
    // vm.m1().should.eql('123456')
    assert(vm.m1() == '123456')
  })
  it('测试点击事件', () => {
    const button = wrapper.find('button')
    button.trigger('click')
    assert.equal(vm.data1, '我已经被点击了')
  })
})
