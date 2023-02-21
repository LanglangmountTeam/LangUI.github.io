import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import progress from '../packages/lprogress/lprogress.vue';
describe('progress组件',()=>{
test('progress组件应该存在',()=>{
    expect(progress).toBeTruthy()
})
test('progress组件应该可以被渲染', () => {
    const wrapper = mount(progress)
    expect(wrapper.findComponent(progress).exists()).toBe(true)
  })
test('测试',()=>{
    const wrapper=mount(progress,{
        props:{
            intext:true
        }
    })
    expect(wrapper.html()).toContain('progresstextcenter')
})
})