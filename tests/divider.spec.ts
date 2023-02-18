import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import divider from '../packages/ldivider/ldivider.vue';
describe('divider组件',()=>{
test('divider组件应该存在',()=>{
    expect(divider).toBeTruthy()
})
test('divider组件应该可以被渲染', () => {
    const wrapper = mount(divider)
    expect(wrapper.findComponent(divider).exists()).toBe(true)
  })
// test('测试',()=>{
//     const wrapper=mount(divider,{
//         props:{
//             size:"big"
//         }
//     })
//     expect(wrapper.html()).toContain('lang-table-big')
// })
})