import { computed, PropType } from "vue";

interface optionsProps {
  label: String,
  value: String,
  disabled: Boolean
}



export const radioProps = {
  options: {
    type: Array as PropType<optionsProps[]>,
    default: () => []
  },
  modelValue: {
    type: [String,Number],
  },
  size:{
    type:String,
    default:'default'
  },
  labelFiled:{
    type:String,
    default:"label"
  },
  valueFiled:{
    type:String,
    default:"value"
  },
  customColor:String,
  customClass:String,
  inline:{
    type:Boolean,
    default:true
  },
}


export const radioEmit = [
  'update:modelValue',
  'change'
];


export const useRadio= (props:any, emits:any) => {
  return {
  }
}