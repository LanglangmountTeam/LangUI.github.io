import { computed } from "vue";

export const inputProps = {
  modelValue: {
    type: [Number, String],
  },
  placeholder: {
    type: String,
    default: 'Basic usage'
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'text'
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'medium'
  },
  maxLength: {
    type: Number
  },
  showpwd: {
    type: Boolean,
    default: false
  },
  prefixIcon: {
    type: Object,
  },
  suffixIcon:{
    type: Object,
  },
  context: {
    type: Object,
  }
}


export const inputEmit = [
  "update:modelValue",
  "focus",
  "blur",
  "clear",
  "input",
  'change'
];


export const useInput = (props:any, emits:any) => {
  const lClass = computed(() => {
    return [
      `${props.disabled ? 'input l-input-disabled' : 'input'}`
    ]
  })

  

  const inputClass = computed(() =>{
    return [
      {
        [`l-input-${props.size}`]: props.size
      }
    ]
  })

  const isShowSuffixIcon = computed(() => {
    return (
      props.suffixIcon && !props.clearable && !props.showpwd
    );
  });
  const isShowPrefixIcon = computed(() => {
    return props.prefixIcon;
  });

  return {
    lClass,
    inputClass,
    isShowSuffixIcon,
    isShowPrefixIcon
  }
}