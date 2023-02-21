import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import breadcrumb from '../packages/breadcrumb/breadcrumb.vue';
describe('breadcrumb组件',()=>{
test('breadcrumb组件应该存在',()=>{
    expect(breadcrumb).toBeTruthy()
})
test('breadcrumb组件应该可以被渲染', () => {
    const wrapper = mount(breadcrumb)
    expect(wrapper.findComponent(breadcrumb).exists()).toBe(true)
  })
})