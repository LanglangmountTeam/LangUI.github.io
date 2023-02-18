import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import dropDown from '../packages/dropDown/index.vue';
describe('dropDown组件',()=>{
test('dropDown组件应该存在',()=>{
    expect(dropDown).toBeTruthy()
})
test('dropDown组件应该可以被渲染', () => {
    const wrapper = mount(dropDown)
    expect(wrapper.findComponent(dropDown).exists()).toBe(true)
  })
})