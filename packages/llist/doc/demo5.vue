<template>
    <l-list>
        <l-list-item v-for="(item, idx) in data.list" @detail="onDetail" @left-click="onLeftClick" @item-click="onClick"
            :key="idx" :title="item.title" :detail="item.detail" :iconRight="item.iconRight"></l-list-item>
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
            iconRight: true,
        },
        {
            title: "列表2",
            detail: true,
            iconRight: true,
        },
        { title: "列表3", detail: true, iconRight: true, },
    ],
});

const onClick = () => {
    Message({
        text: "您点击了列表",
    });
};
const onDetail = () => {
    Message({
        text: "详情事件",
    });
};
</script>
