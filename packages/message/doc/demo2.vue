<!-- html -->
<template>
  <lbutton @click="openMsg">消息提示</lbutton>
</template>

<!-- js -->
<script setup>
import Message from "../index.js"; //此处为本地示例，请使用import {Message} from "mzl-ui";引入
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const openMsg = () => {
  instance.proxy.$message({ text: "默认消息提示！" });
};
</script>