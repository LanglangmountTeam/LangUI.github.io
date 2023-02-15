<template>
  <div :class="[`l-radio-${size}`,customClass]">
    <label 
      v-for="(item,index) in options" 
      :key="index" 
      :class="[
        {
          'l-radio-active':modelVal == item[valueFiled]
        },
        item.disabled ? modelVal == item[valueFiled] ? 'l-radio-active-disabled' : 'l-radio-disabled':''
      ]" 
      @click="change(item,index)" 
      :style="{
        'display':inline ? 'inline-block' : 'table',
        'margin-bottom':inline ? '0' : size=='small'?'8px' : size=='mini'?'6px':'10px'
      }"
    >
      <span class="l-radio-round" 
        :style="{
          'border-color':customColor=='' ? '':item.disabled?'':modelVal != item[valueFiled]?'':customColor,
          'background':customColor=='' ? '':item.disabled?'':modelVal != item[valueFiled]?'':customColor
        }"
      ></span>
      <span 
        :style="{'color':customColor=='' ? '':item.disabled?'':modelVal != item[valueFiled]?'':customColor}"
      >{{item[labelFiled]}}</span>
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: 'l-radio'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import { radioProps, radioEmit, useRadio } from './lradio'
const emits = defineEmits(radioEmit);
const props = defineProps(radioProps);
const {

} = useRadio(props, emits);

// console.log(props.options)

const modelVal = ref(props.modelValue || '')
const change = (item,index)=>{
  if(!item.disabled){
    modelVal.value = item[props.valueFiled]
    emits('update:modelValue',item[props.valueFiled])
    emits('change',{"value":item[props.valueFiled],"index":index})
  }
  
}

</script>

<style lang="scss" scoped>
@import './lradio.scss';

</style>

