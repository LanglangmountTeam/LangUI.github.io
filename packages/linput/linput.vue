<template>
  <div class="l-input" :class="inputClass">
    <input 
      :type="inputType" 
      :class="rulesClass  ? `ruler-input ${lClass}` : `${lClass}`" 
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      :clearable="clearable"
      :readonly="readonly"
      :maxLength="maxLength"
      autocomplete="on"
      @input="input"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    >
    <div v-if="maxLength" class="max-length">{{count}} / {{maxLength}}</div>
    <div v-if="showpwd && showPassword" class="clearInput" @click="showPasswordClick"><Icon><Eye/></Icon></div>
    <div v-if="showpwd && !showPassword" class="clearInput" @click="showPasswordClick"><Icon><EyeOff/></Icon></div>
    <span v-if="props.clearable && props.modelValue" class="clearInput" @click="clearInput"><Icon><Close/></Icon></span>
  
    <div class="l-input__prefix" v-if="isShowPrefixIcon">
      <l-icon><component :is="prefixIcon"></component></l-icon>
    </div>
    <div class="l-input__suffix no-cursor" v-if="isShowSuffixIcon">
      <l-icon><component :is="suffixIcon"></component></l-icon>
    </div>
  </div>
</template>
<script lang="ts">
	export default{
		name:"l-input"
	}
</script>

<script setup lang="ts">
import { inputEmit, inputProps, useInput } from './linput'
import { FormItemContextKey } from '../lform/lform-item'
import { ref, inject, watch } from 'vue'
import  Icon  from '../licon/licon.vue'
import {Close, EyeOff, Eye} from '@vicons/ionicons5';
//拿到from表单的上下文
const formItemContext: any = inject(FormItemContextKey)


const count = ref(0)
const rulesClass = ref(false)
const emits = defineEmits(inputEmit);
const props = defineProps(inputProps);
const {
  lClass,
  inputClass,
  isShowSuffixIcon,
  isShowPrefixIcon
} = useInput(props, emits);

watch(
  () => props.modelValue,
  () => {
    ;(formItemContext as any)?.validate('change').catch((err: any) => {}) 
  }
)

const input: any = (e: { target: { value: string | any[]; }; }) => {
  emits('update:modelValue', e.target.value)
  emits('input',e)
  count.value = e.target.value.length
	if(props.maxLength) {
		if(e.target.value.length > props.maxLength) {
			count.value = 100
		}
	}
  formItemContext?.validate('blur').then((res: any) => {
    rulesClass.value = false
    
  }).catch((err: { errors: string | any[]; }) => {
    // console.log(err.errors.length)
    if(err.errors.length === 1) {
      rulesClass.value = true
    }
  }) 
}



//input 获取焦点时
const handleFocus = (e: Event) => {
  emits('focus', e)
};



//input 失去焦点时
const handleBlur = (e: Event) => {
  emits('blur', e)
  formItemContext?.validate('blur').then((res: any) => {
    rulesClass.value = false
    
  }).catch((err: { errors: string | any[]; }) => {
    // console.log(err.errors.length)
    if(err.errors.length === 1) {
      rulesClass.value = true
    }
  }) 
};

const handleChange = (e: Event) => {
  emits('change', e)

}

const clearInput = (e: Event) => {
  emits('update:modelValue', '')
  emits("clear", e)
}


const showPassword = ref(true)
const inputType = ref()
inputType.value = props.type
const showPasswordClick = () => {
  showPassword.value = !showPassword.value
  if(showPassword.value) {
    inputType.value = 'text'
  }else {
    inputType.value = 'password'
  }
}

</script>

<style lang="scss" scoped>
@import './linput.scss';

</style>