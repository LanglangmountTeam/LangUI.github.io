<template>
    <l-progress :percent=reo color="default"></l-progress>
    <br/>
    <l-button type="default" @click="rs">-1</l-button>
    <l-button type="default" @click="ad">+1</l-button>
</template>
<script setup>
import {ref} from "vue";
const reo=ref(0);
reo.value=20;
function rs(){
    reo.value=reo.value-1;
}
function ad(){
    reo.value=reo.value+1;
}

</script>