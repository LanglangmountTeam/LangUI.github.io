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

})