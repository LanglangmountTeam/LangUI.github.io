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

export const useSelect = (props:any, emits:any, fixIcon:any) => {
  const iconClass = computed(() => {
    return ["select-icon iconfont m-icon-arrow-down"]
  })

  //根据自定义的组件尺寸适配组件里面的下拉框相对位置以及图标居中
  const customStyle = computed(() => {
    let styles = {}
    if (props.height) {
      let height = parseInt(props.height) < 25 ? "25px" : props.height
      props.height = height
      fixIcon.lineHeight = height
      fixIcon.top = 0
      fixIcon.height = "100%"
    }
    return styles
  })

  const selectClass = computed(() => {
    return [
      `l-select-${props.size}`,
      props.disabled ? `l-select-${props.size}-disabled` : ""
    ];
  });

  const selectInputClass = computed(() => {
    return [
      "l-select-input-box",
      `l-select-input-${props.size}`,
      props.disabled ? `l-select-input-${props.size}-disabled` : ""
    ];
  });

  return {
    iconClass,
    customStyle,
    selectClass,
    selectInputClass
  }
}