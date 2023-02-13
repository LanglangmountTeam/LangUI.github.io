<!-- html -->
<template>
  <div class="setstyle">
    <l-dropdown title="hover唤醒" :options="dorpoptions"></l-dropdown>
    <l-dropdown
      title="click唤醒"
      :options="dorpoptions"
      trigger="click"
    ></l-dropdown>
  </div>
</template>

<!-- js -->
<script setup>
import { reactive } from "vue";
const state = reactive({
  dorpoptions: [
    { label: "菜单1" },
    { label: "菜单2" },
    { label: "菜单3" },
    { label: "菜单4" },
    { label: "菜单5" },
  ],
});
const { dorpoptions } = state;
</script>

<style>
.setstyle{
  display: flex;
  justify-content:space-between;
  align-items: center;
  width: 200px;
}
</style>