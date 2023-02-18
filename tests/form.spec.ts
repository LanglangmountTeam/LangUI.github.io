import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import form from '../packages/lform/lform.vue';
describe('form组件',()=>{
test('form组件应该存在',()=>{
    expect(form).toBeTruthy()
})
test('form组件应该可以被渲染', () => {
    const wrapper = mount(form)
    expect(wrapper.findComponent(form).exists()).toBe(true)
  })
})