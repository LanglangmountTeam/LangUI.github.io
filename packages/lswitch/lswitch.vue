<template>
  <div :class="['l-switch-default', customClass]">
    <span 
      class="l-switch-left-text"  
      v-if="textAlign=='left' && closeText!='' && activeText!=''" 
      :style="{'color': modelValue ? activeColor : closeColor}"
    >
      {{switchText}}
    </span>
    <div 
      class="l-switch-content"  
      :class="{'l-switch-disabled' : disabled}"
      @click="handleSwitch" 
      :style="[switchStyle, {'width': width+'px'}]"
    >
      <span class="l-switch-round" :style="[roundStyle]"></span>
      <span class="l-switch-flagtext" :style="flagTextStyle" v-if="showTipsText">{{flagText}}</span>
    </div>
    <span 
      class="l-switch-right-text" 
      v-if="textAlign == 'right' && closeText != '' && activeText != ''" 
      :style="{'color': modelValue ? activeColor : closeColor}"
      >
      {{switchText}}
    </span>
  </div>
</template>

<script lang="ts">
import { reactive, ref, watchEffect } from 'vue'
export default{
  name:"l-switch"
}
</script>

<script setup lang="ts">
import { switchProps, switchEmit } from './lswitch';


const emits = defineEmits(switchEmit)
const props = defineProps(switchProps)
const roundStyle = reactive({"left":'2px'})
const flagTextStyle = reactive({"left":props.width-20+'px'})
const switchStyle = reactive({"background":props.closeColor})
const flagText = ref('关')
const switchText = ref(props.modelValue?props.activeText:props.closeText)
const flag = ref(props.modelValue)

const handleSwitch = () =>{
  if(!props.disabled){
    flag.value = !flag.value
    emits('update:modelValue',flag.value)
    emits('change',flag.value)
    
  }
}

watchEffect(()=>{
  roundStyle.left = props.modelValue?props.width-20+'px':'2px'
  flagTextStyle.left = props.modelValue?'6px':props.width-20+'px'
  switchStyle.background = props.modelValue?props.activeColor:props.closeColor
  if(props.modelValue){
    flagText.value = "开"
    switchText.value = props.activeText
  }else{
    flagText.value = "关"
    switchText.value = props.closeText
  }
})

</script>

<style lang="scss" scoped>
@import './lswitch.scss';

</style>