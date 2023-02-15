<template>
    <div :class="['l-list', block ? 'l-list-block' : '', 'l-list-' + props.size]">
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    name: 'l-list'
}
</script>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
const props = defineProps({
    block: Boolean,
    size: String as PropType<'small' | 'normal' | 'large'>
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
    --l-li-brt: 2px 2px 0 0;
    --l-li-brl: 0 0 2px 2px;
    --l-li-blr: 1px;
    margin: 16px;
    margin-top: 0;
    line-height: 24px;

    &-block {
        margin-left: 0;
        margin-right: 0;
    }

    &-small {
        --l-glist-h: 38px;
    }

    &-normal {
        --l-glist-h: 46px;
    }

    &-large {
        --l-glist-h: 54px;
    }
}
</style>
