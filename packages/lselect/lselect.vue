<template>
  <div :class="lClass">
    <input type="text" readonly v-clickOutside :value="modelVal" :disabled="disabled" :placeholder="placeholder">
    <transition name="fade">
      <div class="l-position-box" v-if="positionShow">
        <li 
          v-for="(item,index) in options" 
          :key="index" 
          @click="change(item)"
          class="item-li"
          :class="{'item-disabled-li' : item.disabled}"
        >
          {{item[filedLabel]}}
        </li>
    </div>
    </transition>
      
  </div>
</template>

<script lang="ts">
	export default{
		name:"l-select"
	}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import { 
  selectProps,
  selectEmit,
  useSelect,
} from './lselect'

const emits = defineEmits(selectEmit);
const props = defineProps(selectProps);
const {
  lClass
} = useSelect(props, emits)

const modelVal = ref(props.selectValue!) 

const positionShow = ref(false)

const vClickOutside = {
  beforeMount(el) {
    let handler = (e) => {
      if(!props.disabled) {
        if(el.contains(e.target )) {
          positionShow.value = true
        }else {
          positionShow.value = false
        }
      }
    }
    document.addEventListener("click", handler)
  }
}

const change = (item) => {
  if(!item.disabled) {
    modelVal.value = item[props.filedLabel]
    positionShow.value = false
    emits('change', item)
    // console.log(item[props.filedLabel])
    emits('update:modelValue', item[props.filedLabel])
    
    // console.log(item)
  }
}



</script>

<style lang="scss" scoped>
@import './lselect.scss';



</style>