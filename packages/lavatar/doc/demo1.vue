<template>
    <div>
        <l-avatar :src="imgUrl" size="small" class="lavatar" />
        <l-avatar :src="imgUrl" size="default" class="lavatar" />
        <l-avatar :src="imgUrl" size="large" class="lavatar" />
        <l-avatar :src="imgUrl" :size="100" class="lavatar" />
    </div>
</template>

<script setup>
import imgUrl from "/src/assets/img/avatar.jpg";
</script>

<style>
.lavatar {
    margin: 6px;
}
</style>