<template>
  <div class="container">
    <l-textarea  
      :maxLength="100" 
      :resize="false"
      :readonly="true"
    />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container {
  width: 250px;
}
</style>