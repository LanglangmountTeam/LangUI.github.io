<!-- html -->
<template>
  <div>
    <l-button @click="openMsg1">消息提示</l-button>
    <l-button @click="openMsg2">5秒后消失</l-button>
  </div>
</template>

<!-- js -->
<script setup>
import {Funnel,Time} from '@vicons/ionicons5';
import Message from "../index.js"; //此处为本地示例，请使用import {Message} from "mzl-ui";引入
const openMsg1 = () => {
  Message({
    text: "自定义Icon！",
    icon: Funnel,
  });
};
const openMsg2 = () => {
  Message({
    text: "5秒后消失！",
    icon: Time,
    timeout: 5000,
  });
};
</script>