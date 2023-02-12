<template>
    <div :class="progclass" v-show="props.circle==false">
        <div :class="intext" v-if="props.hidetext==false">{{ percent }}%<slot></slot>
        </div>
    </div>
    <div v-show="props.circle==true" :class="cirlcess">
        <div class="left">
            <div ref="ileft" :class="itemleftclass"></div>
        </div>
        <div class="right">
            <div ref="iright" :class="itemrightclass"></div>
        </div>
        <div class="white">{{percent}}%</div>
    </div>
</template>

<script>
export default {
    name: "l-progress"
}
</script>
<script setup>
import { ref, computed, onMounted } from 'vue';
const props = defineProps({
    circle: {
        type: Boolean,
        default: false
    },
    length: {
        type: Number,
        default: 70
    },
    color: {
        type: String,
        default: "default"
    },
    percent: {
        type: Number,
        default: 0
    },
    intext: {
        type: Boolean,
        default: false
    },
    hidetext: {
        type: Boolean,
        default: false
    }
});
const progresslength = computed(() => {
    return [`${props.length}vw`]
});
const progclass = computed(() => {
    return ['progclass', `progress-${props.color}`]
});
const percentage = computed(() => {
    return [(props.percent / 100) * props.length]
});
const intext = computed(() => {
    return [props.intext ? "progresstextcenter" : "progresstext"]
})
const cirlcess = computed(() => {
    return ['circle']
})
const itemleftclass = computed(() => {
    return ['itemleft', `circle-${props.color}`]
})
const itemrightclass = computed(() => {
    return ['itemright', `circle-${props.color}`]
})
const ileft = ref(null)
const iright = ref(null)
onMounted(() => {
    setInterval(() => {
        if (props.percent > 50) {
            ileft.value.style.transform = `rotate(-${(1 - (props.percent / 100)) * 360}deg)`;
            iright.value.style.transform = `rotate(0deg)`;
        }
        else {
            iright.value.style.transform = `rotate(-${(0.5 - (props.percent / 100)) * 360}deg)`;
            ileft.value.style.transform = `rotate(180deg)`;
        }
    }, 100)

})
</script>
<style lang="scss" scoped>
.progclass {
    display: block;
    width: v-bind(progresslength);
    height: 3vh;
    border-radius: 3vh;
    background-color: #f0f0f0;
    margin-top: 1vh;
    position: relative;
}

.progress-default {
    &:before {
        content: "";
        position: absolute;
        width: calc(1vw * v-bind(percentage));
        height: 3vh;
        border-radius: 3vh;
        background-color: blue;
    }
}

.progress-success {
    &:before {
        content: "";
        position: absolute;
        width: calc(1vw * v-bind(percentage));
        height: 3vh;
        border-radius: 3vh;
        background-color: $success;
    }
}

.progress-primary {
    &:before {
        content: "";
        position: absolute;
        width: calc(1vw * v-bind(percentage));
        height: 3vh;
        border-radius: 3vh;
        background-color: $primary;
    }
}

.progress-warning {
    &:before {
        content: "";
        position: absolute;
        width: calc(1vw * v-bind(percentage));
        height: 3vh;
        border-radius: 3vh;
        background-color: $warning;
    }
}

.progress-danger {
    &:before {
        content: "";
        position: absolute;
        width: calc(1vw * v-bind(percentage));
        height: 3vh;
        border-radius: 3vh;
        background-color: $danger;
    }
}

.progresstext {
    margin-left: v-bind(progresslength);
}

.progresstextcenter {
    margin-left: calc(1vw * v-bind(percentage));
}

.circle {
    width: v-bind(progresslength);
    height: v-bind(progresslength);
    background-color: #f0f0f0;
    border-radius: 50%;
    position: relative;
}

.left,
.right {
    margin-left: 0;
    position: absolute;
    overflow: hidden;
    width: calc(v-bind(progresslength)/2);
    height: v-bind(progresslength);
    overflow: hidden;
    opacity: 0.8;
    border: none;
}

.left .itemleft {
    width: calc(v-bind(progresslength)/2);
    height: v-bind(progresslength);
    border-top-left-radius: v-bind(progresslength);
    border-bottom-left-radius: v-bind(progresslength);
    transform-origin: right center;
    transform: rotate(-180deg);
    animation: proless1 3s;
    animation-delay: 3s;
}

.right .itemright {
    width: calc(v-bind(progresslength)/2);
    height: v-bind(progresslength);
    border-top-right-radius: v-bind(progresslength);
    border-bottom-right-radius: v-bind(progresslength);
    transform-origin: left center;
    transform: rotate(-180deg);
    animation: proless2 3s;
}

.right {
    right: 0;
}

.white {
    position: absolute;
    top: 10%;
    left: 10%;
    width: calc(v-bind(progresslength)*(0.8));
    height: calc(v-bind(progresslength)*(0.8));
    background-color: white;
    border-radius: calc(v-bind(progresslength)*(0.8));
    text-align: center;
    line-height: calc(v-bind(progresslength)*(0.8));
    font-size: calc(v-bind(progresslength)*(0.1));
}

.circle-danger {
    background-color: $danger;
}

.circle-default {
    background-color: blue;
}

.circle-success {
    background-color: $success;
}

.circle-warning {
    background-color: $warning;
}

.circle-primary {
    background-color: $primary;
}
</style>