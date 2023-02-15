<template>
  <l-radio
    v-model="radioVal"
    :options="radioOptions"
    labelFiled="name"
    valueFiled="id"
  ></l-radio>
</template>

<script setup>
import { reactive, ref } from "vue";
const radioVal = ref(1);
const state = reactive({
  radioOptions: [
    { name: "金克丝", id: 0 },
    { name: "拉克丝", id: 1 },
    { name: "霞", id: 2 },
    { name: "ikun", id: 3 },
  ],
});
const { radioOptions } = state;
</script>