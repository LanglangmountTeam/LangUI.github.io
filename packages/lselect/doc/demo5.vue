<template>
    <l-select
      class="l-select"
      v-model="selVal1"
      placeholder="默认大小"
      :options="selOptions"
    ></l-select>
    <br>
    <l-select
      class="l-select"
      v-model="selVal1"
      placeholder="小一点的"
      :options="selOptions"
      size="small"
    ></l-select>
    <br>
    <l-select
      class="l-select"
      v-model="selVal1"
      placeholder="mini型的"
      :options="selOptions"
      size="mini"
    ></l-select>
</template>

<script setup>
import { reactive, ref } from "vue";
const selVal1 = ref("");
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

<style>
l-select {
  margin-top: 30px;
}

</style>