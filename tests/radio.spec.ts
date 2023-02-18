import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import radio from '../packages/lradio/lradio.vue';
describe('radio组件',()=>{
test('radio组件应该存在',()=>{
    expect(radio).toBeTruthy()
})
test('radio组件应该可以被渲染', () => {
    const wrapper = mount(radio)
    expect(wrapper.findComponent(radio).exists()).toBe(true)
  })
  test('测试事件是否正常',async () => {
    const wrapper = mount(radio)
    const text=wrapper.find('div')
    await text.trigger('click')
  })
})