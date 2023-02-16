import { computed, ref } from "vue";

export const textareaProps = {
  modelValue: {
    type: String
  },
  rows: {
    type: Number,
    default: 10
  },
  cols: {
    type: Number,
    default: 30
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: 'Please input'
  },
  maxLength: {
    type: Number
  },
  resize: {
    type: Boolean,
    default: true
  }
}


export const textareaEmit = [
  "update:modelValue",
  "focus",
  "blur",
  "input",
  "change"
];


export const useTextarea = (props:any, emits:any) => {

  const lClass = computed(() => {
    return [
      {
        'l-textarea' : true
      },
      {
        'l-textarea-disabled' : props.disabled
      }
    ]
  })

  const lStyle: any = computed(() => {
    return [
      {
        resize : props.resize ? 'auto' : 'none'
      }
    ]

  })

  return {
    lClass,
    lStyle
  }
}