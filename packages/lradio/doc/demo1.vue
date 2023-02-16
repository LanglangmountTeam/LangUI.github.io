<template>
  <l-radio
    v-model="radioVal"
    :options="radioOptions"
    @change="radioChange"
  ></l-radio>
</template>

<script setup>
import { reactive, ref } from "vue";
const radioVal = ref("python");
const state = reactive({
  radioOptions: [
    { label: "java编程", value: "java" },
    { label: "js编程", value: "js" },
    { label: "php编程", value: "php" },
    { label: "python编程", value: "python" },
  ],
});
const radioChange = (e) => {
  console.log(e.value, e.index);
};
const { radioOptions } = state;
</script>