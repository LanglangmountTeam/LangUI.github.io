import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import lform from '../packages/lform/lform.vue';
describe('lform组件',()=>{
test('lform组件应该存在',()=>{
    expect(lform).toBeTruthy()
})
test('lform组件应该可以被渲染', () => {
    const wrapper = mount(lform)
    expect(wrapper.findComponent(lform).exists()).toBe(true)
  })
})