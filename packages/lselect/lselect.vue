<template>
  <div
    :class="[selectClass, customClass]"
    :style="[
      customClass ? {} : { width: parseInt(width) < 100 ? '100px' : width },
    ]"
    v-click-outside
  >
    <div :class="selectInputClass">
      <input
        type="text"
        :readonly="!searchable"
        :placeholder="selVal == '' ? placeholder : selVal"
        :style="[customClass ? {} : customStyle]"
        :class="[selVal == '' ? 'l-select-input' : 'l-select-input-value']"
        :disabled="disabled"
        @input="input"
        :value="selVal"
      />
      <i :class="iconClass" :style="[{ transform: rotate }, fixIcon]">
        <Icon style="display: flex; align-items: center; justify-content: center;"><ChevronDown/></Icon>
      </i>
    </div>
    <transition name="slide-fade">
      <div class="l-select-option" v-if="isShow">
        <div class="l-select-option-find">
          <ul>
            <li
              class="l-select-option-li"
              v-for="(item, index) in optionsData"
              :key="index"
              @click="selChange(item, index)"
              :class="{
                'l-select-active':
                  activeIndex == index ||
                  selVal == item[labelFiled] ||
                  item.selected,
                'l-select-disabled': item.disabled,
              }"
            >
              {{ item[labelFiled] }}
              <i
                style="height: 100%;"
                v-if="multiple && item.selected"
              >
              <Icon><Checkmark/></Icon>
              </i>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: "l-select",
};
</script>

<script setup lang="ts">
import { selectProps, selectEmit, useSelect } from './lselect'
import { ref, reactive } from "vue"
import  Icon  from '../licon/licon.vue'
import {ChevronDown, Checkmark} from '@vicons/ionicons5';
//增加选择框width和height属性的大小限制 高度最小是25px,width属性最小是100px,动态计算下拉图标的行高
const fixIcon = reactive({})

const emit = defineEmits(selectEmit)
const props: any = defineProps(selectProps)
const {
  iconClass,
  customStyle,
  selectClass,
  selectInputClass
} = useSelect(props,emit, fixIcon)

props.options.forEach((item: { [x: string]: any; selected: boolean; }, index: any) => {
  if (!props.multiple) {
    item.selected = false
  } else {
    props.modelValue.forEach((item1: any, index1: any) => {
      if (item[props.valueFiled] == item1) {
        item.selected = true
      }
    });
    console.log()
  }
});

const activeIndex = ref(-1)
const isShow = ref(false)
const rotate = ref("rotate(0deg)")
const optionsData = ref(props.options || [])
const selVal = ref(
  props.multiple
    ? props.modelValue
    : props.modelValue != ""
    ? props.options.filter((item: { [x: string]: any; }) => {
        return item[props.valueFiled] == props.modelValue
      })[0][props.labelFiled]
    : ""
)


const blur = () => {
  isShow.value = false
  rotate.value = "rotate(0deg)"
}

const input = (e:any) => {
  selVal.value = e.target.value
  optionsData.value = []
  let filterList = props.options.filter((item: { [x: string]: string | any[]; }) => {
    return item[props.labelFiled].indexOf(e.target.value) != -1
  });
  filterList.forEach((item: any, index: any) => {
    optionsData.value.push(item)
  });
}

const vClickOutside = {
  beforeMount(el:any) {
    let handler = (e:any) => {
      if (!props.disabled) {
        if (!props.multiple) {
          if (
            el.contains(e.target) &&
            e.target.className.indexOf("l-select-option-li") == -1
          ) {
            if (!isShow.value) {
              isShow.value = !isShow.value
              if (isShow.value) {
                rotate.value = "rotate(180deg)"
              } else {
                rotate.value = "rotate(0deg)"
              }
            }
          } else {
            if (isShow.value) {
              blur()
            }
          }
        } else {
          if (el.contains(e.target)) {
            if (!isShow.value) {
              isShow.value = !isShow.value
              if (isShow.value) {
                rotate.value = "rotate(180deg)"
              } else {
                rotate.value = "rotate(0deg)"
              }
            }
          } else {
            if (isShow.value) {
              blur()
            }
          }
        }
      }
    };
    el.handler = handler;
    if (typeof document !== "undefined") {
      document.addEventListener("click", handler)
    }
  },
  unmounted(el: { handler: (this: Document, ev: MouseEvent) => any; }) {
    if (typeof document !== "undefined") {
      document.removeEventListener("click", el.handler)
    }
  }
}

// 选择事件
let labels: any = []
let indexs: any = []

const selChange = (item:any, index:any) => {
  if (!props.multiple) {
    if (!item.disabled) {
      activeIndex.value = index
      selVal.value = item[props.labelFiled]
      emit("update:modelValue", item[props.valueFiled])
      emit("change", { lable: item.label, value: item.value, index: index })
      blur()
    }
  } else {
    if (!item.disabled) {
      Array.prototype.indexOf = function (val) {
        for (var i = 0; i < this.length; i++) {
          if (this[i] == val) return i
        }
        return -1
      }
      item.selected = !item.selected
      if (item.selected) {
        selVal.value.push(item[props.valueFiled])
        labels.push(item.label)
        indexs.push(index)
      } else {
        selVal.value.splice(selVal.value.indexOf(item[props.valueFiled]), 1)
        labels.splice(labels.indexOf(item.label), 1)
        indexs.splice(indexs.indexOf(index), 1)
      }
      emit("update:modelValue", selVal.value);
      emit("change", { lable: labels, value: selVal.value, index: indexs })
    }
  }
}

</script>

<style lang="scss" scoped>
@import './lselect.scss';
</style>
