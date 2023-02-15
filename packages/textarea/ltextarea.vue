<template>
  <div :class="lClass" >
		<textarea 
			:cols="cols" 
			:rows="rows" 
			:value="modelValue" 
			:disabled="disabled"
			:readonly="readonly"
			:placeholder="placeholder"
			:maxLength="maxLength"
			:style="lStyle"
			@input:any="handleInput"
			@focus="handleFocus"
			@blur="handleBlur"
			@change="handleChange"
		>
		</textarea>
		<div v-if="maxLength" class="max-length">{{count}} / {{maxLength}}</div>
  </div>
</template>

<script lang="ts">
	export default{
		name:"l-textarea"
	}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { textareaEmit, textareaProps, useTextarea } from './ltextarea'

const count = ref(0)
const emits = defineEmits(textareaEmit);
const props = defineProps(textareaProps);
const {
	lClass,
	lStyle
} = useTextarea(props, emits);

const handleInput = (e: { target: { value: string | any[]; }; }) => {
	// console.log(e.target.value)
	count.value = e.target.value.length
	if(props.maxLength) {
		if(e.target.value.length > props.maxLength) {
			count.value = 100
		}
	}
	emits('update:modelValue', e.target.value)
	emits('input', e)
}

const handleFocus = (e:any) => {
	emits('focus', e)
}

const handleBlur = (e:any) => {
	emits('blur', e)
}

const handleChange = (e:any) => {
	emits('change', e)
}

</script>

<style lang="scss" scoped>
@import './ltextarea.scss';

</style>