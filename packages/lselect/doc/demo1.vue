<template>
  <l-select
    v-model="selVal"
    placeholder="请选择"
    :options="selOptions"
    @change="selchange"
  ></l-select>
</template>

<script setup>
import { reactive, ref } from "vue";
const selVal = ref("ikun");
const state = reactive({
  selOptions: [
    { label: "PHP是世界上最好的语言", value: "PHP" },
    { label: "python才是最好的语言", value: "python" },
    { label: "Java天下第一", value: "Java" },
    { label: "C++说第二没人敢说第一", value: "C++" },
    { label: "你是ikun吗", value: "ikun" },
  ],
});
const selchange = (item, index) => {
  // 当前选中的值及index
  console.log(item, index);
};
const { selOptions } = state;
</script>