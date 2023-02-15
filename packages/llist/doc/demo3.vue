<template>
    <l-list :block="true">
        <l-list-item v-for="(item, idx) in data.list" @detail="onDetail" @left-click="onLeftClick" @item-click="onClick"
            :key="idx" :title="item.title" :detail="item.detail" iconLeft="check-circle"
            iconLeftColor="var(--ph-primary)"></l-list-item>
    </l-list>
</template>

<script setup>
import { reactive } from "vue";
import Message from "../../message/index.js"; //此处本地示例引入消息组件
const data = reactive({
    list: [
        {
            title: "列表1",
            detail: true,
            icon: "chrome",
        },
        {
            title: "列表2",
            detail: true,
            icon: "firefox",
        },
        { title: "列表3", detail: true, icon: "safari" },
    ],
});

const onClick = () => {
    Message({
        text: "您点击了列表",
    });
};
</script>
