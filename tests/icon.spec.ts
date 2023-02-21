import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import icon from '../packages/licon/licon.vue';
describe('icon组件',()=>{
test('icon组件应该存在',()=>{
    expect(icon).toBeTruthy()
})
test('icon组件应该可以被渲染', () => {
    const wrapper = mount(icon)
    expect(wrapper.findComponent(icon).exists()).toBe(true)
  })
test('属性测试',()=>{
    const wrapper=mount(icon,{
        props:{
           del:10
        }
    })
    expect(wrapper.props('del')).toBe(10)
})
test('属性测试',()=>{
    const wrapper=mount(icon,{
        props:{
           size:30
        }
    })
   expect(wrapper.html()).contain('30')
})
test('del属性测试',()=>{
    const wrapper=mount(icon,{
        props:{
          del:0
        }
    })
   expect(wrapper.html()).contain('opacity: 1;')
})
})