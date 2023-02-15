<template>
    <l-list :block="true">
        <l-list-item v-for="(item, idx) in data.list" @item-click="onClick" :key="idx"
            :title="item.title"></l-list-item>
    </l-list>

    <!-- <l-list :block="true">
        <l-list-item v-for="(item, idx) in data.list" @detail="onDetail" @left-click="onLeftClick" @item-click="onClick"
            :key="idx" :title="item.title" :detail="item.detail"></l-list-item>
    </l-list> -->
    <!-- 111
    
    111
    <l-list :block="true">
        <l-list-item v-for="(item, idx) in data.list1" @detail="onDetail" @left-click="onLeftClick"
            @item-click="onClick" :key="idx" :title="item.title" :detail="item.detail" iconLeft="check-circle"
            iconLeftColor="var(--ph-primary)"></l-list-item>
    </l-list>
    11
    <l-list :block="true">
        <l-list-item v-for="(item, idx) in data.list1" @detail="onDetail" @left-click="onLeftClick"
            @item-click="onClick" :key="idx" :title="item.title" :detail="item.detail"
            :iconRight="item.icon"></l-list-item>
    </l-list>
    111
    <l-list :block="true">
        <l-list-item v-for="(item, idx) in data.list2" @detail="onDetail" @left-click="onLeftClick"
            @item-click="onClick" :key="idx" :title="item.title" :desc="item.desc" :detail="item.detail"></l-list-item>
    </l-list>
    111
    <l-list :block="true">
        <l-list-item v-for="(item, idx) in data.list2" @detail="onDetail" @left-click="onLeftClick"
            @item-click="onClick" :key="idx" :title="item.title" :desc="item.desc" :detail="item.detail"
            iconLeft="check-circle" iconLeftColor="var(--ph-primary)"></l-list-item>
    </l-list>
    11
    <l-list>
        <l-list-item v-for="(item, idx) in data.list2" @detail="onDetail" @left-click="onLeftClick"
            @item-click="onClick" :key="idx" :title="item.title" :desc="item.desc" :detail="item.detail"></l-list-item>
    </l-list>
    11
    <l-list>
        <l-list-item v-for="(item, idx) in data.list2" @detail="onDetail" @left-click="onLeftClick"
            @item-click="onClick" :key="idx" :title="item.title" :detail="item.detail"></l-list-item>
    </l-list>
    11
    <l-list>
        <l-list-item v-for="(item, idx) in data.list2" @detail="onDetail" @left-click="onLeftClick"
            @item-click="onClick" :key="idx">{{ item.title }}</l-list-item>
    </l-list>
    11
    <l-list size="small">
        <l-list-item v-for="(item, idx) in data.list2" @detail="onDetail" @left-click="onLeftClick"
            @item-click="onClick" :key="idx" :title="item.title" :detail="item.detail"></l-list-item>
    </l-list>
    <l-list size="normal">
        <l-list-item v-for="(item, idx) in data.list2" @detail="onDetail" @left-click="onLeftClick"
            @item-click="onClick" :key="idx" :title="item.title" :detail="item.detail"></l-list-item>
    </l-list>
    <l-list size="large">
        <l-list-item v-for="(item, idx) in data.list2" @detail="onDetail" @left-click="onLeftClick"
            @item-click="onClick" :key="idx" :title="item.title" :detail="item.detail"></l-list-item>
    </l-list> -->
</template>

<script setup>
import { reactive } from "vue";
import Message from "../../message/index.js"; //此处本地示例引入消息组件
const data = reactive({
    list: [
        {
            title: "列表1",
            detail: true,
        },
        { title: "列表2", detail: true },
        { title: "列表3", detail: true },
    ],
    list1: [
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
    list2: [
        {
            title: "列表1",
            detail: true,
            desc: "描述内容",
        },
        {
            title: "列表2",
            detail: true,
            desc: "描述内容",
        },
        { title: "列表3", detail: true, desc: "描述内容" },
    ],
});

const onClick = () => {
    Message({
        text: "您点击了列表",
    });
};
</script>
