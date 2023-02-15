<template>

    <l-radio v-model="radioVal" :options="radioOptions" customColor="#25B0F8"></l-radio>
    <l-radio v-model="radioVal" :options="radioOptions" size="small" customColor="#959595"></l-radio>
    <l-radio v-model="radioVal" :options="radioOptions" size="mini"></l-radio>

</template>

<script setup>
import { reactive, ref } from "vue";
const radioVal = ref("js");
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