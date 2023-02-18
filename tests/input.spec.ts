import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import input from '../packages/linput/linput.vue';
describe('input组件',()=>{
test('input组件应该存在',()=>{
    expect(input).toBeTruthy()
})
test('input组件应该可以被渲染', () => {
    const wrapper = mount(input)
    expect(wrapper.findComponent(input).exists()).toBe(true)
  })
})