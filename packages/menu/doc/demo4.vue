<!-- html -->
<template>
  <l-menu :options="menuOptions">
    <l-dropdown
      title="下拉菜单"
      :options="dorpoptions"
      size="small"
    >
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
  </l-menu>
</template>

<!-- js -->
<script setup>
import { reactive } from "vue";
import {CameraOutline,DesktopOutline,FishOutline,CloudDownloadOutline} from '@vicons/ionicons5';
const state = reactive({
  menuOptions: [
    {
      title: "菜单1",
    },
    {
      title: "菜单2",
      children: [
        {
          title: "菜单2-1",
        },
        {
          title: "菜单2-2",
        },
        {
          title: "菜单2-3",
          children: [
            {
              title: "菜单2-3-1",
              children: [
                {
                  title: "菜单2-3-1-1",
                },
                {
                  title: "菜单2-3-1-2",
                },
              ],
            },
            {
              title: "菜单2-3-2",
            },
          ],
        },
      ],
    },
    {
      title: "菜单3",
      children: [
        {
          title: "菜单3-1",
        },
        {
          title: "菜单3-2",
        },
      ],
    },
    {
      title: "菜单4",
      children: [
        {
          title: "菜单4-1",
          children: [
            {
              title: "菜单4-1-1",
            },
            {
              title: "菜单4-1-2",
            },
          ],
        },
      ],
    },
    {
      title: "菜单5",
      children: [
        {
          title: "菜单3-1",
        },
      ],
    },
    {
      title: "菜单6",
    },
  ],
  dorpoptions: [
    { label: "浪浪山1",Icon:'CameraOutline'},
    { label: "浪浪山2",Icon:'DesktopOutline'},
    { label: "浪浪山3",Icon:'FishOutline'},
    { label: "浪浪山4",Icon:'CloudDownloadOutline'},
  ],
});
const { menuOptions, dorpoptions } = state;
</script>