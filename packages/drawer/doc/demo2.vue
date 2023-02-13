<!-- html -->
<template>
  <m-space>
    <lbutton type="primary" @click="openDrawerOfLeft">左边-left</lbutton>
    <lbutton type="primary" @click="openDrawerOfTop">上边-top</lbutton>
    <lbutton type="primary" @click="openDrawerOfRight">右边-right</lbutton>
    <lbutton type="primary" @click="openDrawerOfBottom">下边-bottom</lbutton>
  </m-space>

  <ldrawer v-model="drawerShow1" title="左边出现的抽屉">
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </ldrawer>
  <ldrawer v-model="drawerShow2" title="上边出现的抽屉" direction="top">
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </ldrawer>
  <ldrawer v-model="drawerShow3" title="右边出现的抽屉" direction="right">
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </ldrawer>
  <ldrawer v-model="drawerShow4" title="下边出现的抽屉" direction="bottom">
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </ldrawer>
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