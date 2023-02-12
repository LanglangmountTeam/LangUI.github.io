import type { RuleItem } from 'async-validator'
import { computed, InjectionKey } from "vue";
import { ExtractPropTypes, PropType } from 'vue'

export type ArrayAble<T> = T | T[]

export interface FormItemRule extends RuleItem {
  trigger?: ArrayAble<string>
}

export const formItemValidateState = ['success', 'error', ''] as const
export type FormItemValidateState = typeof formItemValidateState[number]

export const formItemProps = {
  prop: {
    type: String,
  },
  label: {
    type: String
  },
  rules: {
    type: [Object, Array] as PropType<ArrayAble<FormItemRule>>
  },
  showMessage: {
    type: Boolean,
    default: true
  },
  labelWidth: {
    type: String,
    default: '50px'
  },
  labelPosition: {
    type: String,
    default: 'end'
  },
  hideRequiredAsterisk: {
    type: Boolean,
    default: false
  }
} as const
export type FormItemProps = Partial<ExtractPropTypes<typeof formItemProps>>

export interface FormItemContext extends FormItemProps {
  validate: (trigger: string, callback?: (isValid: boolean) => void) => Promise<any>
}
export const FormItemContextKey: InjectionKey<FormItemProps> = Symbol()

export const formItemEmit = [
  "update:modelValue",
  "focus",
  "blur",
  "clear",
  "input",
  'change',
];


export const useFormItem = (props, emits) => {
const lClass = computed(() => {
  return [
    'l-from-item',
  ]
})

const labelStyle = computed(() => {
  return [
    {
      width: props.labelWidth
    },
    {
      ['text-align']: props.labelPosition
    }
  ]
})

  return {
    lClass,
    labelStyle
  }
}

