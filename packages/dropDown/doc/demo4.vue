<!-- html -->
<template>
  <div class="setstyle">
    <ldropdown title="hover唤醒" :options="dorpoptions"></ldropdown>
    <ldropdown
      title="click唤醒"
      :options="dorpoptions"
      trigger="click"
    ></ldropdown>
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