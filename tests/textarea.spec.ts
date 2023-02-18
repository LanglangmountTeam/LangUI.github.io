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
})