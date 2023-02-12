<template>
     <l-progress circle :length=10 :percent=p color="success"></l-progress>
     <div style="height: 1vh;"></div>
     <l-button type="default" @click="es">+1</l-button>
     <l-button type="default" @click="add">-1</l-button>
</template>
<script setup>
    import {ref} from 'vue';
    const p=ref(0);
    p.value=60;
    function es(){
        p.value=p.value+1;
    }
    function add(){
        p.value=p.value-1;
    }
</script>
<style>
</style>