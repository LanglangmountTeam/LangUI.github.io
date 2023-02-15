<template>
  <l-switch v-model="switchVal" disabled></l-switch>
</template>


<script setup>
import { ref } from "vue";
const switchVal = ref(true);
</script>