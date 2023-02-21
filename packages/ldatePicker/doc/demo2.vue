
<template>
  <l-datePicker v-model="dateVal" disabled placeholder="请选择日期"> </l-datePicker>
</template>


<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>