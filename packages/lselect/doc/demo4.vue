<template>
  <l-select
    v-model="selVal"
    placeholder="请选择"
    :options="selOptions"
    labelFiled="cityName"
    valueFiled="cityCode"
    @change="selchange"
  ></l-select>
</template>

<script setup>
import { reactive, ref } from "vue";
const selVal = ref("111");
const state = reactive({
  selOptions: [
    { cityName: "北京", cityCode: "111" },
    { cityName: "上海", cityCode: "222" },
    { cityName: "广州", cityCode: "333", disabled: true },
    { cityName: "深圳", cityCode: "444" },
    { cityName: "成都", cityCode: "555" },
    { cityName: "我不是小黑子", cityCode: "666"}
  ],
});
const selchange = (item, index) => {
  console.log(item, index);
};
const { selOptions } = state;
</script>