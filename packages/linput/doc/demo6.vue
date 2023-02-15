<template>
  <div class="container">
    <l-input v-model="Val"  showpwd  @input="input"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const Val = ref()

const input = (e) => {
console.log(e.target.value)
}

</script>

<style scoped>
.container {
  width: 250px;
}
</style>