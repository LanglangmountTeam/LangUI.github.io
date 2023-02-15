<template>
    <div :class="['l-list-item', desc ? 'l-list-item-lg' : '']" :hover="state.hover">
        <slot name="left">
            <transition name="l-scalein">
                <custom-icon @click="emits('left-click')" :fill="iconLeftColor" class="l-li-ileft" :name="iconLeft"
                    v-if="iconLeft" />
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
                    <custom-icon @click="emits('detail')" :fill="iconRightColor" class="l-li-iright" :name="iconRight"
                        v-if="iconRight" />
                    <span @click="emits('detail')" class="l-li-detail" v-else>详细信息</span>
                    <arrow @click="emits('detail')" direction="right" />
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
// import { Arrow, CustomIcon} from '../icon'

const emits = defineEmits(['detail', 'item-click', 'left-click'])
const props = defineProps({
    title: String,
    desc: String,
    detail: Boolean,
    iconRight: String,
    iconLeft: String,
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
    padding: 14px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-left-width: 0;
    border-right-width: 0;

    &-lg {
        min-height: 70px;
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