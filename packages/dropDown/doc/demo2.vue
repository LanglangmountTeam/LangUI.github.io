<!-- html -->
<template>
  <div class="setstyle">
    <l-dropdown title="默认大小" :options="dorpoptions"></l-dropdown>
    <l-dropdown
      title="小一点的"
      :options="dorpoptions"
      size="small"
    ></l-dropdown>
    <l-dropdown
      title="更小点的"
      :options="dorpoptions"
      size="mini"
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
const dropchange = (item, index) => {
  console.log(item, index);
};
const { dorpoptions } = state;
</script>

<style scoped>
.setstyle{
  display: flex;
  justify-content:space-between;
  align-items: center;
  width: 300px;
}
</style>