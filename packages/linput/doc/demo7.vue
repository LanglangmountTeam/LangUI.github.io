<template>
  <div class="container">
    <l-input @focus="click" @blur="blur"/>
  </div>
</template>

<script setup lang="ts">

const click = (e) => {
  console.log(e.type)
}

const blur = (e) => {
  console.log(e.type)
}

</script>

<style scoped>
.container {
  width: 250px;
}
</style>