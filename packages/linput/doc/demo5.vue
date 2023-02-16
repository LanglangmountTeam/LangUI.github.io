<template>
  <div class="container">
    <l-input 
    v-model="Val" 
    :maxLength="10"
    />
    <br>
    <div class="inputValue">
      value：{{Val}}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const Val = ref()


</script>

<style scoped>
.container {
  width: 250px;
}
.inputValue{
  margin-top: 10px;
}
</style>