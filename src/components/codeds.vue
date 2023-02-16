<template>
  <div class="boxx">
    <div class="showcode" @click="show">显示代码</div>
    <div class="scode" v-show="status" v-highlight>
    <pre ><code >{{ codes }}</code></pre>
  </div>
  <div class="hidecode" @click="hide" v-show="status">隐藏代码</div>
  </div>
</template>

<script  setup lang="ts">
import {ref} from "vue";
let codes=ref("");
let props=defineProps({
  compname:{
    type:String,
    default:""
  },
  demoname:{
    type:String,
    default:""
  }
})
codes=(await import(`/packages/${props.compname}/doc/${props.demoname}.vue?raw`)).default;
let status=ref(false);
function show(){
  status.value=true;
}
function hide(){
  status.value=false;
}
</script>
<style lang="scss" scoped>
.boxx{
  width: 85vw;
}
.showcode{
  width: 85vw;
  height: 5vh;
  background-color: #f0f0f0;
  text-align: center;
  font-size: small;
  line-height: 5vh;
  cursor: pointer;
}
.scode{
  border: 1px solid #f0f0f0;
}
.hidecode{
  width: 85vw;
  height: 5vh;
  background-color: #f0f0f0;
  text-align: center;
  font-size: small;
  line-height: 5vh;
  cursor: pointer;
}
</style>