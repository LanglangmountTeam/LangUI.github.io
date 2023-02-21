<template>
    <l-button type="primary" @click="toggle">点击打开对话框</l-button>
</template>

<script setup lang="ts">
import { openDialog } from "../ldialog"; //此处引入的是本地示例对话框组件
const toggle = () => {
    openDialog({
        overlay: true,
        overlayClosable: true,
        title: () => "我是标题",
        content: () => "我是内容",
        confirm: () => { },
        cancel: () => { },
    });
};
</script>