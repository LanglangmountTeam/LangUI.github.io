<template>
  <div>
  <l-icon class="item" :size=30><Camera/></l-icon>
  <l-icon class="item" :size=30 color="green"><Cloudy/></l-icon>
  <l-icon class="item" :size=40 ><Cloudy/></l-icon>
  <l-icon class="item" :size=50 color="red" ><Cloudy/></l-icon>
  </div>

</template>
<script setup>
import {Camera} from '@vicons/ionicons5';
import {Cloudy} from '@vicons/ionicons5';
</script>

<style lang="scss" scoped>

.item {
  margin-right: 10px;
}
</style>