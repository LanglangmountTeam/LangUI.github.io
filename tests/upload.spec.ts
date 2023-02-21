import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import upload from '../packages/lupload/lupload.vue';
describe('upload组件',()=>{
test('upload组件应该存在',()=>{
    expect(upload).toBeTruthy()
})
test('upload组件应该可以被渲染', () => {
    const wrapper = mount(upload)
    expect(wrapper.findComponent(upload).exists()).toBe(true)
  })
  test('事件测试',async () => {
    const wrapper = mount(upload)
    const sf=wrapper.find('input')
    await sf.trigger('change')
  })
  test('事件测试',async () => {
    const wrapper = mount(upload)
    const sf=wrapper.find('l-button')
    await sf.trigger('click')
  })
  test('测试dis属性是否正常', () => {
    const wrapper = mount(upload, {
      props: {
        targetType:''
      }
    })
    expect(wrapper.html()).toContain('')
  })
  test('属性测试',()=>{
    const wrapper=mount(upload,{
      props:{
        drop:true,
        targetType:'box'
      }
    })
    expect(wrapper.html()).contain('')
  })
})