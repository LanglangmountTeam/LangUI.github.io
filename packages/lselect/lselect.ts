import { computed, PropType } from "vue";

interface optionsProps {
  label: String,
  value: String,
  disabled: Boolean
}


export const selectProps = {
  options: {
    type: Array as PropType<optionsProps[]> ,
    default: () => []
  },
  disabled: {
    type: Boolean
  },
  filedLabel: {
    type: String,
    default: 'label'
  },
  filedValue: {
    type: String,
    default: 'value'
  },
  placeholder: {
    type: String,
  },
  selectValue: {
    type: String,
  }

} 


export const selectEmit = [
  "change",
  "update:modelValue"
];

export const useSelect = (props, emits) => {
  const lClass = computed(() => {
    return [
      'l-select',
    ]
  })

  return {
    lClass
  }
}