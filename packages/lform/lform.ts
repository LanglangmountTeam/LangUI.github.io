import { ExtractPropTypes, InjectionKey, PropType, computed } from "vue";
import { ArrayAble, FormItemContext, FormItemRule } from './lform-item'


export const formProps = {
  model: Object,
  rules: {
    type: Object as PropType<Record<string, ArrayAble<FormItemRule>>>
  },
  showMessage: {
    type: Boolean,
    default: false
  }
} as const

export type FormProps = Partial<ExtractPropTypes<typeof formProps>>

export interface FormContext extends FormProps{
  addField: (field: FormItemContext) => void
}

export const FormContextKey: InjectionKey<FormContext> = Symbol()

export const formEmit = [

];

export const useForm = (props:any, emits:any) => {
  const lClass = computed(() => {
    return [
      'l-from',
      {
        
      }
    ]
  })

  return {
    lClass
  }
}