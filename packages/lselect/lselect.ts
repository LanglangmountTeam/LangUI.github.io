import { computed } from "vue";

export const selectProps = {
  modelValue: [String , Array],
  placeholder: String,
  customClass: String,
  disabled: Boolean,
  searchable: Boolean,
  size: {
    type: String,
    default: "default",
  },
  width: {
    type: String,
    default: "260px",
  },
  height: {
    type: String,
    default: "",
  },
  options: {
    type: [String, Object],
    default: () => {
      return [];
    },
  },
  //默认需要显示的label字段
  labelFiled: {
    type: String,
    default: "label",
  },
  //默认需要显示的value字段
  valueFiled: {
    type: String,
    default: "value",
  },
  multiple: Boolean,
}


export const selectEmit = [
  "update:modelValue",
  "change"
]

export const useSelect = (props, emits) => {


  return {

  }
}