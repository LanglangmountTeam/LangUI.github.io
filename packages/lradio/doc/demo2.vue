<template>
  <l-radio v-model="radioVal" :options="radioOptions"></l-radio>
</template>


<script setup>
import { reactive, ref } from "vue";
const radioVal = ref("php");
const state = reactive({
  radioOptions: [
    { label: "java编程", value: "java" },
    { label: "js编程", value: "js", disabled: true },
    { label: "php编程", value: "php" },
    { label: "python编程", value: "python", disabled: true },
  ],
});
const { radioOptions } = state;
</script>