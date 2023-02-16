<template>
    <l-button type="primary" @click="toggle">点击打开对话框</l-button>
    <l-dialog v-model="visible" :overlay-closable="false" @onOverlayClick="onOverlayClick">
        此时点击遮罩无法取消。
    </l-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);

const toggle = () => {
    visible.value = !visible.value;
};

const onOverlayClick = () => {

};
</script>
