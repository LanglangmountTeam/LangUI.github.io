
<template>
  <l-datePicker v-model="dateVal" placeholder="请选择日期" type="month"> </l-datePicker>
</template>


<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>