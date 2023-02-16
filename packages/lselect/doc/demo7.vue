<template>
  <l-select
    v-model="selVal"
    placeholder="请选择"
    width="500px"
    :options="selOptions"
  ></l-select>
</template>

<script setup>
import { reactive, ref } from "vue";
const selVal = ref("python");
const state = reactive({
  selOptions: [
    { label: "PHP是世界上最好的语言", value: "PHP" },
    { label: "python才是最好的语言", value: "python" },
    { label: "Java天下第一", value: "Java" },
    { label: "C++说第二没人敢说第一", value: "C++" },
    { label: "你是ikun吗", value: "ikun" },
  ],
});
const { selOptions } = state;
</script>