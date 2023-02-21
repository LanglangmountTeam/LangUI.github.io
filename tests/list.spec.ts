import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import list from '../packages/llist/llist.vue';
describe('list组件',()=>{
test('list组件应该存在',()=>{
    expect(list).toBeTruthy()
})
test('list组件应该可以被渲染', () => {
    const wrapper = mount(list)
    expect(wrapper.findComponent(list).exists()).toBe(true)
  })
})