
<template>
  <l-switch v-model="switchVal" closeText="关闭" activeText="开启"></l-switch>
  <l-switch
    v-model="switchVal1"
    closeText="关闭"
    activeText="开启"
    textAlign="right"
  ></l-switch>
</template>


<script setup lang="ts">
import { ref } from "vue";

const switchVal = ref(true);
const switchVal1 = ref(true);

</script>