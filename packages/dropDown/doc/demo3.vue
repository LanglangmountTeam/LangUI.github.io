<!-- html -->
<template>
  <ldropdown title="下拉菜单" :options="dorpoptions">
    <template #CameraOutline>
      <licon size="20"><CameraOutline/></licon>
    </template>
    <template #DesktopOutline>
      <licon size="20"><DesktopOutline/></licon>
    </template>
    <template #FishOutline>
      <licon size="20"><FishOutline/></licon>
    </template>
    <template #CloudDownloadOutline>
      <licon size="20"><CloudDownloadOutline/></licon>
    </template>
  </ldropdown>
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