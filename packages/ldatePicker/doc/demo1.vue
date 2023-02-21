
<template>
  <l-datePicker v-model="dateVal" @change="dateChange" placeholder="请选择日期"></l-datePicker>
</template>


<script setup>
import { ref } from 'vue'
const dateVal = ref('')
const dateChange = (e) => {
  console.log(e)
}
</script>
