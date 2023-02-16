<template>
    <span class="l-avatar" :class="classes" :style="styles">
        <img v-if="src && !hasLoadError" :src="src" :alt="alt" @error="handleError" />
        <slot></slot>
    </span>
</template>

<script lang="ts">
export default {
    name: "l-avatar",
};
</script>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
const props = defineProps({
    size: {
        type: [String, Number],
        default: "default",
    },
    src: {
        type: String,
        default: "",
    },
    shape: {
        type: String,
        default: "circle",
    },
    alt: {
        type: String,
    },
    color: {
        type: String,
    },
    backgroundColor: {
        type: String,
    },
});
const emits = defineEmits(["error"]);
const hasLoadError = ref(false);
const { size, shape, color, backgroundColor } = props;
const classes = computed(() => {
    return {
        [`l-avatar-${size}`]: typeof size === "string",
        [`l-avatar-${shape}`]: shape,
    };
});

const styles = computed(() => {
    return {
        width: typeof size === "number" ? `${size}px` : "",
        height: typeof size === "number" ? `${size}px` : "",
        color,
        backgroundColor,
    };
});

watch(
    () => props.src,
    () => (hasLoadError.value = false)
);

const handleError = (e: Event) => {
    hasLoadError.value = true;
    emits("error", e);
};
</script>

<style lang="scss">
$font-size: 14px;
$small-size: 24px;
$default-size: 40px;
$large-size: 56px;

$white: #fff;
$default-background: #c0c4cc;

.l-avatar {
    background-color: $default-background;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: $font-size;
    color: $white;

    >img {
        width: 100%;
        height: 100%;
    }
}

.l-avatar-small {
    width: $small-size;
    height: $small-size;
}

.l-avatar-default {
    width: $default-size;
    height: $default-size;
}

.l-avatar-large {
    width: $large-size;
    height: $large-size;
}

.l-avatar-circle {
    border-radius: 100%;

    >img {
        border-radius: 100%;
    }
}

.l-avatar-square {
    border-radius: 3px;

    >img {
        border-radius: 3px;
    }
}
</style>
