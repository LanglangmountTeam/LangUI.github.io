import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import dialog from '../packages/ldialog/ldialog.vue';
describe('dialog组件',()=>{
test('dialog组件应该存在',()=>{
    expect(dialog).toBeTruthy()
})
test('dialog组件应该可以被渲染', () => {
    const wrapper = mount(dialog)
    expect(wrapper.findComponent(dialog).exists()).toBe(true)
  })
  
})