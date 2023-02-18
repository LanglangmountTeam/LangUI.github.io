import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import menu from '../packages/menu/index.vue';
describe('menu组件',()=>{
test('menu组件应该存在',()=>{
    expect(menu).toBeTruthy()
})
test('menu组件应该可以被渲染', () => {
    const wrapper = mount(menu)
    expect(wrapper.findComponent(menu).exists()).toBe(true)
  })

})