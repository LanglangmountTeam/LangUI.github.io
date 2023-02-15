<template>
  <l-radio v-model="radioVal" :options="radioOptions" :inline="false"></l-radio>
</template>


<script setup>
import { reactive, ref } from "vue";
const radioVal = ref("java");
const state = reactive({
  radioOptions: [
    { label: "java编程", value: "java" },
    { label: "js编程", value: "js" },
    { label: "php编程", value: "php" },
    { label: "python编程", value: "python" },
  ],
});
const { radioOptions } = state;
</script>