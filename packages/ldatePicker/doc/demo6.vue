<template>

    <l-datePicker
      v-model="dateVal"
      placeholder="请选择日期"
      format="yyyy年MM月dd日"
    ></l-datePicker>
    <l-datePicker
      v-model="dateVal"
      placeholder="请选择日期"
      format="yyyy/MM/dd"
    ></l-datePicker>
    <l-datePicker
      v-model="dateVal"
      placeholder="请选择日期"
      format="yyyy-MM-dd"
    ></l-datePicker>

</template>


<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>