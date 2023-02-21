<template>
  <l-switch
    v-model="switchVal"
    :showTipsText="true"
    closeColor="#bc3457"
    activeColor="#45d426"
  ></l-switch>
</template>


<script setup lang="ts">

import { ref } from "vue";
const switchVal = ref(false);

</script>