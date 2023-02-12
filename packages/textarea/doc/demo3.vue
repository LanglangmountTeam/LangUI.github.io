<template>
  <div class="container">
    <l-textarea  
      @input="input"
      @blur="handleBlur"
      @focus="handleFocus"
      @change="handleChange"
    />
    {{value}}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref()

const handleBlur = (e) => {
  console.log('blur事件触发', e)
}

const input = (e) => {
  console.log('input事件触发', e)

}

const handleFocus = (e) => {
  console.log('focus事件触发', e)
}

const handleChange = (e) => {
  console.log('change事件触发', e)
}

</script>

<style scoped>
.container {
  width: 250px;
}
</style>