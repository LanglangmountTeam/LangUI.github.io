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
    { label: "中国", value: "zhongguo" },
    { label: "俄罗斯", value: "eluosi" },
    { label: "美国", value: "meiguo" },
    { label: "澳大利亚", value: "aodaliya" },
    { label: "巴基斯坦", value: "bajisitan" },
  ],
});
const { selOptions } = state;
</script>

<style>
l-select {
  margin-top: 30px;
}

</style>