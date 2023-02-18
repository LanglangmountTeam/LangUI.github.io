import {describe,test,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import select from '../packages/lselect/lselect.vue';
describe('select组件',()=>{
test('select组件应该存在',()=>{
    expect(select).toBeTruthy()
})

})