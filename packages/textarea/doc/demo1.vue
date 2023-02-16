<template>
  <div class="container">
    <l-textarea  
      :maxLength="110" 
      :rows="10"
      :cols="50" 
      v-model="value" 
    />
    value：{{value}}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref()

</script>

<style scoped>
.container {
  width: 250px;
}
</style>