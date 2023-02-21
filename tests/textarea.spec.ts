import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import textarea from '../packages/textarea/ltextarea.vue';
describe('textarea组件',()=>{
test('textarea组件应该存在',()=>{
    expect(textarea).toBeTruthy()
})
test('textarea组件应该可以被渲染', () => {
    const wrapper = mount(textarea)
    expect(wrapper.findComponent(textarea).exists()).toBe(true)
  })
  test('测试属性是否正常', () => {
    const wrapper = mount(textarea, {
      props: {
        maxLength:10
      }
    })
    expect(wrapper.html()).contain('')
  })
  test('测试事件是否正常',async () => {
    const wrapper = mount(textarea)
    const text=wrapper.find('textarea')
    await text.trigger('input')
  })
  test('测试事件是否正常',async () => {
    const wrapper = mount(textarea)
    const text=wrapper.find('textarea')
    await text.trigger('focus')
  })
  test('测试事件是否正常',async () => {
    const wrapper = mount(textarea)
    const text=wrapper.find('textarea')
    await text.trigger('blur')
  })
  test('测试事件是否正常',async () => {
    const wrapper = mount(textarea)
    const text=wrapper.find('textarea')
    await text.trigger('change')
  })
})