import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import lswitch from '../packages/lswitch/lswitch.vue';
describe('lswitch组件',()=>{
test('lswitch组件应该存在',()=>{
    expect(lswitch).toBeTruthy()
})
test('lswitch组件应该可以被渲染', () => {
    const wrapper = mount(lswitch)
    expect(wrapper.findComponent(lswitch).exists()).toBe(true)
  })
test('事件测试',async()=>{
  const wrapper=mount(lswitch)
  const sf=wrapper.find('.l-switch-content')
  await sf.trigger('click')
})
})