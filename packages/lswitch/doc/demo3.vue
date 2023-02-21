<template>
  <l-switch v-model="switchVal" :showTipsText="true"></l-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";

const switchVal = ref(false);

</script>