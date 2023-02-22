<template>
    <div :class="progclass" v-show="props.circle==false">
        <div :class="intext" v-if="props.hidetext==false">{{ percent }}%<slot></slot>
        </div>
    </div>
    <div v-show="props.circle==true" :class="cirlcess">
        <div class="left">
            <div ref="ileft" :class="itemleftclass"></div>
        </div>
        <div class="rightt">
            <div ref="iright" :class="itemrightclass"></div>
        </div>
        <div class="white">{{percent}}%</div>
    </div>
    <div id="ss"></div>
</template>

<script >
export default {
    name: "l-progress"
}
</script>
<script setup>
import { ref, computed, onMounted,watch } from 'vue';
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
    let ss=(props.percent / 100) * props.length
    return (`${ss}vw`)
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
const lr=computed(()=>{
    let s3=props.length/2;
    return (`${s3}vw`)
})
const white1=computed(()=>{
    let s4=props.length*0.8
    return (`${s4}vw`)
})
const white2=computed(()=>{
    let s4=props.length*0.1
    return (`${s4}vw`)
})
const ileft = ref()
const iright = ref()
onMounted(() => {
    if (props.percent > 50) {
            ileft.value.style.transform = `rotate(-${(1 - (props.percent / 100)) * 360}deg)`;
            iright.value.style.transform = `rotate(0deg)`;
        }
        else {
            iright.value.style.transform = `rotate(-${(0.5 - (props.percent / 100)) * 360}deg)`;
            ileft.value.style.transform = `rotate(180deg)`;
        }
    watch(()=>props.percent,(newvalue,oldvalue)=>{
        if (props.percent > 50) {
            ileft.value.style.transform = `rotate(-${(1 - (props.percent / 100)) * 360}deg)`;
            iright.value.style.transform = `rotate(0deg)`;
        }
        else {
            iright.value.style.transform = `rotate(-${(0.5 - (props.percent / 100)) * 360}deg)`;
            ileft.value.style.transform = `rotate(180deg)`;
        }
    })
})
</script>
<style  scoped>
.progclass {
    display: block;
    width: v-bind(progresslength);
    height: 3vh;
    border-radius: 3vh;
    background-color: #f0f0f0;
    margin-top: 1vh;
    position: relative;
}


.progress-default:before {
        content: "";
        position: absolute;
        width:v-bind(percentage);
        height: 3vh;
        border-radius: 3vh;
        background-color: blue;
    }

.progress-success::before{
    content: "";
        position: absolute;
        width: v-bind(percentage);
        height: 3vh;
        border-radius: 3vh;
        background-color: #67c23a;

}

.progress-primary::before{
    content: "";
        position: absolute;
        width: v-bind(percentage);
        height: 3vh;
        border-radius: 3vh;
        background-color: #74baff;
}

.progress-warning::before{
    content: "";
        position: absolute;
        width: v-bind(percentage);
        height: 3vh;
        border-radius: 3vh;
        background-color: #e6a23c;
}

.progress-danger::before{
    content: "";
        position: absolute;
        width: v-bind(percentage);
        height: 3vh;
        border-radius: 3vh;
        background-color: #f56c6c;
}
.progresstext {
    margin-left: v-bind(progresslength);
}

.progresstextcenter {
    margin-left: v-bind(percentage);
}

.circle {
    width: v-bind(progresslength);
    height: v-bind(progresslength);
    background-color: #f0f0f0;
    border-radius: 50%;
    position: relative;
}

.left,
.rightt {
    margin-left: 0;
    position: absolute;
    overflow: hidden;
    width: v-bind(lr);
    height: v-bind(progresslength);
    overflow: hidden;
    opacity: 0.8;
    border: none;
}

.left .itemleft {
    width:v-bind(lr) ;
    height: v-bind(progresslength);
    border-top-left-radius: v-bind(progresslength);
    border-bottom-left-radius: v-bind(progresslength);
    transform-origin: right center;
    transform: rotate(-180deg);
    animation: proless1 3s;
    animation-delay: 3s;
}

.rightt .itemright {
    width: v-bind(lr);
    height: v-bind(progresslength);
    border-top-right-radius: v-bind(progresslength);
    border-bottom-right-radius: v-bind(progresslength);
    transform-origin: left center;
    transform: rotate(-180deg);
    animation: proless2 3s;
}

.rightt {
    right: 0;
}

.white {
    position: absolute;
    top: 10%;
    left: 10%;
    width:v-bind(white1);
    height:v-bind(white1);
    background-color: white;
    border-radius:v-bind(white1);
    text-align: center;
    line-height: v-bind(white1);
    font-size: v-bind(white2);
}

.circle-danger {
    background-color: #f56c6c;
}

.circle-default {
    background-color: blue;
}

.circle-success {
    background-color: #67c23a;
}

.circle-warning {
    background-color:#e6a23c;
}

.circle-primary {
    background-color: #74baff;
}
</style>