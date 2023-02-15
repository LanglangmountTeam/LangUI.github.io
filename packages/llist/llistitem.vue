<template>
    <div :class="['l-list-item', desc ? 'l-list-item-lg' : '']" :hover="state.hover">
        <slot name="left">
            <transition name="l-scalein">
                <l-icon size="20" @click="emits('left-click')" :fill="iconLeftColor" class="l-li-ileft" v-if="iconLeft">
                    <CheckmarkCircleOutline />
                </l-icon>
            </transition>
        </slot>
        <div class="l-li-content" @click="emits('item-click')">
            <slot>
                <h1 class="l-li-title">{{ title }}</h1>
                <p class="l-li-desc">{{ desc }}</p>
            </slot>
        </div>
        <div class="l-li-action">
            <slot name="right">
                <template v-if="detail">
                    <l-icon size="20" @click="emits('detail')" :fill="iconRightColor" class="l-li-iright"
                        v-if="iconRight">
                        <ColorWandOutline />
                    </l-icon>
                    <span @click="emits('detail')" class="l-li-detail" v-else>详细信息</span>
                    <l-icon @click="emits('detail')" direction="right">
                        <ChevronForwardOutline />
                    </l-icon>
                </template>
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'l-list-item'
}
</script>

<script lang="ts" setup>
import { defineProps, defineEmits, reactive } from 'vue'
import { CheckmarkCircleOutline, ChevronForwardOutline, ColorWandOutline } from '@vicons/ionicons5';
const emits = defineEmits(['detail', 'item-click', 'left-click'])
const props = defineProps({
    title: String,
    desc: String,
    detail: Boolean,
    iconRight: Boolean,
    iconLeft: Boolean,
    iconLeftColor: String,
    iconRightColor: String,
})
const state = reactive({
    hover: !('ontouchstart' in window)
})
</script>
<style lang="scss">
.l-list-item {
    display: flex;
    align-items: center;
    margin-top: -1px;
    min-height: 16px;
    padding: 12px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-left-width: 0;
    border-right-width: 0;

    &-lg {
        min-height: 45px;
    }

    &[hover=true] {
        cursor: pointer;
    }

    .l-li-ileft {
        margin-right: 16px;
        cursor: pointer;
    }

    .l-li-content {
        flex: 1;
        font-size: 15px;

        .l-li-title {
            font-size: 17px;
            line-height: 25px;
            color: rgba(0 0 0/85%);
            font-weight: 500;
        }

        .l-li-desc {
            font-size: 14px;
            color: #bfbfbf;
        }
    }

    .l-li-action {
        display: flex;
        align-items: center;
        cursor: pointer;

        .l-li-detail {
            font-size: 16px;
            color: rgba(0 0 0/85%);
        }

        .l-li-iright,
        .l-li-detail {
            margin-right: 6px;
        }
    }

    &:nth-of-type(1) {
        border-radius: 0;
    }

    &:nth-last-of-type(1) {
        border-radius: 0;
    }
}
</style>