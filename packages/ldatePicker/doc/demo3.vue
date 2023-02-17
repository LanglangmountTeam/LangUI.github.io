
<template>
    <l-datePicker class="item" v-model="dateVal" placeholder="请选择日期" size="small"> </l-datePicker>
    <l-datePicker class="item" v-model="dateVal" placeholder="请选择日期" size="medium"> </l-datePicker>
    <l-datePicker class="item" v-model="dateVal" placeholder="请选择日期" size="large"> </l-datePicker>
</template>


<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>

<style scoped>
.item {
  margin-right: 50px;
}
</style>