import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import datepicker from '../packages/ldatePicker/ldatePicker.vue';
describe('datepicker组件',()=>{
test('datepicker组件应该存在',()=>{
    expect(datepicker).toBeTruthy()
})
test('datepicker组件应该可以被渲染', () => {
    const wrapper = mount(datepicker)
    expect(wrapper.findComponent(datepicker).exists()).toBe(true)
  })
})