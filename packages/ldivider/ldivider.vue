<template>
    <div class="l-divider" :style="{'border-top':`0.3vh ${linestyle} #f0f0f0`,'justify-content':position}" :class="{'col':col=='col'}">
        <div class="l-divider-t">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
export default{
    name:"l-divider"
}
</script>

<script setup lang="ts">

const props=defineProps({
    linestyle:{
        type:String,
        default:"solid"
    },
    position:{
        type:String,
        defalu:"left"
    },
    col:{
        type:String,
        default:""
    }
})
</script>
<style scoped>
.l-divider{
    width: 100%;
    height: 1vh;
    margin: 3vh 0;
    align-items: center;
    padding: 0 2vw;
    box-sizing: border-box;
    position: relative;
    display: flex;
}
.l-divider-t{
    border-left: 2vw solid white;
    border-right: 2vw solid white;
    background-color: white;
    transform: translate(-25%,-25%);
}
.col{
    display: inline-block;
    width: 1px;
    height: 1em;
    margin: 0 8px;
    border-top: none;
    border-left: 1px solid #dcdfe6;
    padding: 0;
}
</style>