<template>
  <div class="container">

    <l-input size="small"  placeholder="small"/>
    <l-input size="medium" placeholder="medium"/>
    <l-input size="large" placeholder="large"/>
    
  </div>
</template>

<script setup lang="ts">



</script>

<style scoped>
.l-input {
  margin-top: 10px;
}
.container {
  display: flex;
  flex-direction: column;
  width: 300px;
}
</style>