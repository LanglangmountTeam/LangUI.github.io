<!-- html -->
<template>
  <l-button @click="openDrawer" type="primary">自定义</l-button>
  <l-drawer v-model="drawerShow">
    <template #header>
      这是头部自定义信息
      <l-button
        size="small"
        type="primary"
        style="position: absolute; right: 20px"
        >自定义</l-button
      >
    </template>
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
    <template #footer> 这是底部自定义信息 </template>
  </l-drawer>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const drawerShow = ref(false);
const openDrawer = () => {
  drawerShow.value = true;
};
</script>