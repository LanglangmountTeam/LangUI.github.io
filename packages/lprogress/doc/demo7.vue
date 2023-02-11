<template>
         <l-progress circle length=10 color="success" :percent=p></l-progress>
         <br/>
         <l-button type="default" @click="start">开始</l-button>
         <l-button type="default" @click="stop">暂停</l-button>
</template>
<script setup>
import {ref} from 'vue';
let p=ref(0);
let status=ref(false);
function start(){
    status=true;
}
function stop(){
    status=false;
}
setInterval(()=>{
    if(p.value==100){return}
    if(status==true){
        p.value=p.value+1;
    }
},50)
</script>