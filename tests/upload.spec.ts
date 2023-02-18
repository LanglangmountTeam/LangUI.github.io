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
})