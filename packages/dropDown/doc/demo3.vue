<!-- html -->
<template>
  <l-dropdown title="下拉菜单" :options="dorpoptions">
    <template #CameraOutline>
      <l-icon size="20"><CameraOutline/></l-icon>
    </template>
    <template #DesktopOutline>
      <l-icon size="20"><DesktopOutline/></l-icon>
    </template>
    <template #FishOutline>
      <l-icon size="20"><FishOutline/></l-icon>
    </template>
    <template #CloudDownloadOutline>
      <l-icon size="20"><CloudDownloadOutline/></l-icon>
    </template>
  </l-dropdown>
</template>

<!-- js -->
<script setup>
import { reactive } from "vue";
import {CameraOutline,DesktopOutline,FishOutline,CloudDownloadOutline} from '@vicons/ionicons5';
const state = reactive({
  dorpoptions: [
    { label: "菜单1",Icon:'CameraOutline'},
    { label: "菜单2",Icon:'DesktopOutline'},
    { label: "菜单3",Icon:'FishOutline'},
    { label: "菜单4",Icon:'CloudDownloadOutline'},
  ],
});
const { dorpoptions } = state;

</script>