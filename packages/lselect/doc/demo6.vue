<template>
  <l-select
    v-model="selVal"
    placeholder="可搜索"
    :options="selOptions"
    searchable
  ></l-select>
</template>

<script setup>
import { reactive, ref } from "vue";
const selVal = ref("");
const state = reactive({
  selOptions: [
    { label: "php", value: "php" },
    { label: "Node", value: "Node" },
    { label: "CSS", value: "CSS" },
    { label: "javascript", value: "javascript" },
    { label: "element-ui", value: "element-ui" },
    { label: "ant", value: "ant" },
    { label: "Npm", value: "Npm" },
    { label: "HTML", value: "HTML", disabled: true },
    { label: "java", value: "java" },
    { label: "XML", value: "XML" },
    { label: "pnpm", value: "pnpm" },
  ],
});
const { selOptions } = state;
</script>