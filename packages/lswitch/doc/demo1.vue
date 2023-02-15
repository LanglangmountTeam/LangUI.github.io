<template>
  <l-switch v-model="switchVal" @change="switchChange"></l-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";

const switchVal = ref(false);
const switchChange = (e) => {
  console.log(e);
};

</script>