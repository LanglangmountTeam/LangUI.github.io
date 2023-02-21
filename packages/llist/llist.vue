<template>
    <div :class="['l-list']">
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    name: 'l-list'
}
</script>
<script lang="ts" setup>
import {  PropType } from 'vue'
const props = defineProps({

})
</script>
<style lang="scss">
.l-list {
    background-color: #fff;
    color: rgba(0 0 0/65%);
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: 16px;
    font-size: 16px;

    margin: 16px;
    margin-top: 0;
    line-height: 24px;

    &-block {
        margin-left: 0;
        margin-right: 0;
    }

    &-small {
        min-height: 38px;
    }

    &-normal {
        min-height: 46px;
    }

    &-large {
        min-height: 54px;
    }
}
</style>
