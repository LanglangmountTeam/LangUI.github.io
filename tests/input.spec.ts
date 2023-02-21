import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import input from '../packages/linput/linput.vue';
describe('input组件',()=>{
test('input组件应该存在',()=>{
    expect(input).toBeTruthy()
})
test('input组件应该可以被渲染', () => {
    const wrapper = mount(input)
    expect(wrapper.findComponent(input).exists()).toBe(true)
  })
  test('事件测试',async()=>{
    const wrapper=mount(input)
    const sf=wrapper.find('input')
    await sf.trigger('input')
  })
  test('事件测试',async()=>{
    const wrapper=mount(input)
    const sf=wrapper.find('input')
    await sf.trigger('blur')
  })
  test('事件测试',async()=>{
    const wrapper=mount(input)
    const sf=wrapper.find('input')
    await sf.trigger('change')
  })
  test('事件测试',async()=>{
    const wrapper=mount(input)
    const sf=wrapper.find('input')
    await sf.trigger('focus')
  })
  test('事件测试',async()=>{
    const wrapper=mount(input,{
      props:{
        maxLength:10,
        showpwd:true,
        showPassword:true,

      }
    })
    const sf=wrapper.find('.clearInput')
    await sf.trigger('click')
  })
  test('事件测试',async()=>{
    const wrapper=mount(input,{
      props:{
        maxLength:10,
        clearable:true,
        modelValue:10

      }
    })
    const sf=wrapper.find('.clearInput')
    await sf.trigger('click')
  })
})