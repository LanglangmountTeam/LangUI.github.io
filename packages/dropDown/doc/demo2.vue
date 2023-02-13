<!-- html -->
<template>
  <div class="setstyle">
    <ldropdown title="默认大小" :options="dorpoptions"></ldropdown>
    <ldropdown
      title="小一点的"
      :options="dorpoptions"
      size="small"
    ></ldropdown>
    <ldropdown
      title="更小点的"
      :options="dorpoptions"
      size="mini"
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