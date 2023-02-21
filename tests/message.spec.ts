import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import mmessage from '../packages/message/index.vue';
describe('mmessage组件',()=>{
test('mmessage组件应该存在',()=>{
    expect(mmessage).toBeTruthy()
})
test('mmessage组件应该可以被渲染', () => {
    const wrapper = mount(mmessage)
    expect(wrapper.findComponent(mmessage).exists()).toBe(true)
  })
})