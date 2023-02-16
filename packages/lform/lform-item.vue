<template>
  <div :class="lClass">
    <label class="label" :style="labelStyle">
      <span v-if="hideRequiredAsterisk" class="hide">*</span>
      <slot name="label">{{label}}</slot>
    </label>
    
    <div class="content">
      <slot ></slot>
      <div class="error">
        <slot name="error">
          {{validateMessage}}
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
	export default{
		name:"l-form-item"
	}
</script>

<script lang="ts" setup>
import { provide, ref, computed,reactive, inject, onMounted } from 'vue'
import { 
  formItemProps,
  formItemEmit,
  useFormItem,
  FormItemValidateState,
  FormItemContextKey,
  FormItemContext,
  FormItemRule,
  ArrayAble
} from './lform-item'
import { FormContextKey } from './lform'
import  AsyncValidator, { Values } from 'async-validator'
const emits = defineEmits(formItemEmit);
const props = defineProps(formItemProps);



const {
  lClass,
  labelStyle
} = useFormItem(props)

const formContext = inject(FormContextKey)

//判断是 success or error 外层的class
const validateState = ref<FormItemValidateState>('')

const validateMessage = ref('')

//转化合并
const conversionArray = (rules: ArrayAble<FormItemRule> | undefined): FormItemRule[] => {
  return rules ? (Array.isArray(rules)
    ? rules
    : [rules])
    : []
}

const _rules = computed(() => {
  const myRules = conversionArray(props.rules) //自己的规则
  const formRules = formContext?.rules
  if(formRules && props.prop) {
    const _temp = formRules[props.prop]

    if(_temp) {
      myRules.push(...conversionArray(_temp))
    }
  }
  return myRules
})

const getRuleFiltered = (trigger: string) => {
  const rules = _rules.value
  return rules.filter(rule => {
    //无论如何都要校验
    if(!rule.trigger || !trigger) return true
      if(Array.isArray(rule.trigger)) {
        return rule.trigger.includes(trigger)
      }else {
        return rule.trigger === trigger
      }
  })
}

const onValidationSuccess = () => {
  validateState.value = 'success'
  validateMessage.value = ''
}

const onValidationFailed = (err: Values) => {
  validateState.value = 'error'
  const { errors } = err
  validateMessage.value = errors ? errors[0].message : ''
}

const validate:FormItemContext['validate'] = async(trigger, callback?) => {
  //拿到触发的时机,校验是否通过可以调用callback 或者 promise.then方法
  const rules = getRuleFiltered(trigger)
  //rules就是触发的规则, trigger是触发的方式
  //需要找到对应数据的源头，上面找到对应的prop
  //触发事件了，找到对应的规则和数据源在哪里，校验那个属性

  const modelName = props.prop!
  //拿到校验器
  const validator = new AsyncValidator({
    [modelName]: rules
  })
  const model = formContext?.model!
  // console.log('trigger', trigger, rules, formContext?.model, props.prop) 
  return validator.validate({
    [modelName]: model[modelName]
  }).then(() => {
    // console.log('成功')
    onValidationSuccess()
  }).catch((err: Values) => {
    // console.log('失败', err)
    onValidationFailed(err)
    return Promise.reject(err)
  })
  
}

const context: FormItemContext = reactive({
  ...props,
  validate
})

provide(FormItemContextKey, context)

onMounted(() => {
  formContext?.addField(context) //将自己的上下文传递给父级
})

</script>

<style lang="scss" scoped>
@import './lform-item.scss';
</style>