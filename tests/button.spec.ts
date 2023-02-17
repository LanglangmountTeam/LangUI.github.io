import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import button from '../packages/lbutton/lbutton.vue';

describe('button组件初始化',()=>{
    test('button组件应该存在',()=>{
        expect(button).toBeTruthy()
    }),
    test('测试button插槽是否正常', () => {
        const wrapper = mount(button, {
          slots: {
            default: 'button按钮'
          }
        })
        expect(wrapper.html()).toContain('button按钮')
    }),
    test('测试type颜色属性是否正常', () => {
      const wrapper = mount(button, {
        props: {
          type: 'success'
        }
      })
      expect(wrapper.html()).toContain('lbutton lbutton-success')
    })
    test('测试tsy属性是否正常', () => {
      const wrapper = mount(button, {
        props: {
          tsy:true
        }
      })
      expect(wrapper.html()).toContain('lbutton-tsy')
    })
    test('测试round属性是否正常', () => {
      const wrapper = mount(button, {
        props: {
          round:true
        }
      })
      expect(wrapper.html()).toContain('lbutton-round')
    })
    test('测试icon属性是否正常', () => {
      const wrapper = mount(button, {
        props: {
          icon:true
        }
      })
      expect(wrapper.html()).toContain('lbutton-icon')
    })
    test('测试dis属性是否正常', () => {
      const wrapper = mount(button, {
        props: {
          dis:true
        }
      })
      expect(wrapper.html()).toContain('dis')
    })
})