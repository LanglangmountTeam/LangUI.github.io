import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import drawer from '../packages/drawer/index.vue';
describe('drawer组件',()=>{
test('drawer组件应该存在',()=>{
    expect(drawer).toBeTruthy()
})
test('drawer组件应该可以被渲染', () => {
    const wrapper = mount(drawer)
    expect(wrapper.findComponent(drawer).exists()).toBe(true)
  })
// test('测试',async()=>{
//     const wrapper=mount(drawer,{
//     })
    
// })

})