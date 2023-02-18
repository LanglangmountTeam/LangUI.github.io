import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import grid from '../packages/lgrid/lgrid.vue';
describe('grid组件',()=>{
test('grid组件应该存在',()=>{
    expect(grid).toBeTruthy()
})
test('grid组件应该可以被渲染', () => {
    const wrapper = mount(grid)
    expect(wrapper.findComponent(grid).exists()).toBe(true)
  })
test('测试',()=>{
    const wrapper=mount(grid,{
        props:{
            span:23.66
        }
    })
    expect(wrapper.html()).contain('')
})
test('测试',()=>{
    const wrapper=mount(grid,{
        props:{
            offset:23.66
        }
    })
    expect(wrapper.html()).contain('')
})
})