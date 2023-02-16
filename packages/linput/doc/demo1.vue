<template>
  <div class="container">
    <l-input :prefixIcon="Person" />
    
    <l-input class="item" :suffixIcon="Sad" />
  </div>
</template>

<script setup lang="ts">
import {Person} from '@vicons/ionicons5';
import {Sad} from '@vicons/ionicons5';
</script>

<style scoped>
.container {
  width: 250px;
}
.item {
  margin-top: 20px;
}
</style>