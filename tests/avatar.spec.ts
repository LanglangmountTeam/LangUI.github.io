import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import avater from '../packages/lavatar/lavatar.vue';
describe('avater组件',()=>{
test('avater组件应该存在',()=>{
    expect(avater).toBeTruthy()
})
test('avater组件应该可以被渲染', () => {
    const wrapper = mount(avater)
    expect(wrapper.findComponent(avater).exists()).toBe(true)
  })
  test('事件测试',async()=>{
    const wrapper=mount(avater,{
      props:{
        src:'imgUrl',
        hasLoadError:false
      }
    })
    let sf=wrapper.find('img')
    await sf.trigger('error')
  })
})