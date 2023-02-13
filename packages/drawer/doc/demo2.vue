<!-- html -->
<template>
  <m-space>
    <l-button type="primary" @click="openDrawerOfLeft">左边-left</l-button>
    <l-button type="primary" @click="openDrawerOfTop">上边-top</l-button>
    <l-button type="primary" @click="openDrawerOfRight">右边-right</l-button>
    <l-button type="primary" @click="openDrawerOfBottom">下边-bottom</l-button>
  </m-space>

  <l-drawer v-model="drawerShow1" title="左边出现的抽屉">
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </l-drawer>
  <l-drawer v-model="drawerShow2" title="上边出现的抽屉" direction="top">
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </l-drawer>
  <l-drawer v-model="drawerShow3" title="右边出现的抽屉" direction="right">
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </l-drawer>
  <l-drawer v-model="drawerShow4" title="下边出现的抽屉" direction="bottom">
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </l-drawer>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const drawerShow1 = ref(false);
const drawerShow2 = ref(false);
const drawerShow3 = ref(false);
const drawerShow4 = ref(false);
const openDrawerOfLeft = () => {
  drawerShow1.value = true;
};
const openDrawerOfTop = () => {
  drawerShow2.value = true;
};
const openDrawerOfRight = () => {
  drawerShow3.value = true;
};
const openDrawerOfBottom = () => {
  drawerShow4.value = true;
};
</script>