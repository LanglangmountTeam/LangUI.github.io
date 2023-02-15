<template>
  <div class="container">
    <l-input 
    v-model="Val" 
    placeholder="请输入密碼"
    clearable
    @clear="clearHandle"
    @change="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const Val = ref('clear inputValue')

//clear事件
const clearHandle = (e) => {
  console.log(Val.value, e)
}

const handleChange = (e) => {
  console.log(e.target.value)
}

</script>

<style scoped>
.container {
  width: 250px;
}
</style>