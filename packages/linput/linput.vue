<template>
  <div class="l-input" :class="inputClass">
    <input 
      :type="inputType" 
      :class="rulesClass ? `${lClass} ruler-input` : `${lClass}`" 
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
    <div v-if="showpwd && showPassword" class="clearInput" @click="showPasswordClick"><img src="./doc/inputImg/open_eyes.png" alt=""></div>
    <div v-if="showpwd && !showPassword" class="clearInput" @click="showPasswordClick"><img src="./doc/inputImg/close_eyes.png" alt=""></div>
    <span v-if="props.clearable && props.modelValue" class="clearInput" @click="clearInput"><img src="./doc/inputImg/clear_input.png" alt=""></span>
  
    <div class="l-input__prefix" v-if="isShowPrefixIcon">
      {{prefixIcon}}
    </div>
    <div class="l-input__suffix no-cursor" v-if="isShowSuffixIcon">
      {{suffixIcon}}
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
    ;(formItemContext as any)?.validate('change').catch((err) => {}) 
  }
)

const input = (e) => {
  emits('update:modelValue', e.target.value)
  emits('input',e)
  count.value = e.target.value.length
	if(props.maxLength) {
		if(e.target.value.length > props.maxLength) {
			count.value = 100
		}
	}
}



//input 获取焦点时
const handleFocus = (e: Event) => {
  emits('focus', e)
};



//input 失去焦点时
const handleBlur = (e: Event) => {
  emits('blur', e)
  formItemContext?.validate('blur').then((res) => {
    rulesClass.value = false
    
  }).catch((err) => {
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