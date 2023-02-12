<template>
  <div :class="lClass">
    <form>
      <slot></slot>
    </form>
  </div>
</template>

<script lang="ts">
	export default{
		name:"l-form"
	}
</script>

<script lang="ts" setup>
import {  Values } from 'async-validator';
import { provide } from 'vue';
import { 
  formProps,
  formEmit,
  useForm,
  FormContextKey,
  FormContext
} from './lform'
import { FormItemContext } from './lform-item';

const emits = defineEmits(formEmit);
const props = defineProps(formProps);

const {
  lClass
} = useForm(props, emits)

const fields: FormItemContext[] = [] //父亲收集儿子

//form的校验,在父级中调用儿子的方法
const validate = async (callback?: (valid: boolean, fields?: Values) => void) => {
  let errors: Values = {}
  for(const field of fields) {
    try {
      await field.validate('')
    }catch(error) {
      errors = {
        ...errors,
        ...(error as Values).fields
      }
    }
  }
  //有错误就成功
  if(Object.keys(errors).length === 0) {
    return callback?.(true)
  }else {
    //没错误就失败
    if(callback) {
      callback?.(false, errors)
    }else {
      return Promise.reject(errors)
    }
  }
}


const addField: FormContext['addField'] = context => {
  fields.push(context)
  // console.log(fields)
}

const context = {
  ...props,
  addField
}
provide(FormContextKey, context)


//将form表单的校验方法,暴露给用户,用户可以通过ref来进行检测
defineExpose({
  validate
})
</script>

<style lang="scss" scoped>

</style>