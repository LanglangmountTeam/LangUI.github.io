<!-- html -->
<template>
  <div class="setstyle">
    <l-dropdown title="下拉菜单" :options="dorpoptions">
      <template #Img>
        <img src="https://q1.qlogo.cn/g?b=qq&nk=(2827459285)&s=640" alt="" />
      </template>
    </l-dropdown>

    <l-dropdown
      title="下拉菜单"
      :options="dorpoptions"
      @change="dropchange"
      size="small"
    >
      <template #Img>
        <img src="https://q1.qlogo.cn/g?b=qq&nk=(2827459286)&s=640" alt="" />
      </template>
    </l-dropdown>

    <l-dropdown
      title="下拉菜单"
      :options="dorpoptions"
      @change="dropchange"
      size="mini"
    >
      <template #Img>
        <img src="https://p.qlogo.cn/gh/(877277040)/(877277040)/640/" alt="" />
      </template>
    </l-dropdown>
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

const dropchange = (e) => {
  console.log(e)
}
</script>

<style scoped>
.setstyle{
  display: flex;
  justify-content:space-between;
  align-items: center;
  width: 400px;
}
</style>