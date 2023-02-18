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
test('事件测试',async()=>{
  const wrapper=mount(drawer,{
    props:{
      modelValue:true
    }
  })
  let sf=wrapper.find('.mzl-drawer-pupop')
  await sf.trigger('click')
})
test('事件测试',async()=>{
  const wrapper=mount(drawer,{
    props:{
      modelValue:true,
      showHeader:true,
      showClose:true
    }
  })
  let sf=wrapper.find('.m-icon-close')
  await sf.trigger('click')
})
test('属性测试',()=>{
  const wrapper=mount(drawer,{
    props:{
      direction:'top',
    }
  })
  expect(wrapper.html()).toContain('')
})
test('属性测试',()=>{
  const wrapper=mount(drawer,{
    props:{
      direction:'right',
    }
  })
  expect(wrapper.html()).toContain('')
})
test('属性测试',()=>{
  const wrapper=mount(drawer,{
    props:{
      direction:'bottom',
    }
  })
  expect(wrapper.html()).toContain('')
})
test('属性测试',()=>{
  const wrapper=mount(drawer,{
    props:{
      direction:'',
    }
  })
  expect(wrapper.html()).toContain('')
})
})