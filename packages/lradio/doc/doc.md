# radio单选框
<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import codeds from '@/components/codeds.vue';
import DOC from '@/components/docview.vue';

const propDoc =  [
  ["v-model","单选绑定值","String || Number","-","-"],
  ["size", "尺寸大小", "String", "default / small / mini", "default"],
  ["options", "单选数据配置，具体见下方label、value", "Array", "-", "[]"],
  ["inline", "是否为行内元素", "Boolean", "true / false", "true"],
  ["labelFiled", "自定义替换lable的字段名", "String", "-", "label"],
  ["valueFiled", "自定义替换value的字段名", "String", "-", "value"],
  ["customColor", "自定义选中颜色色值", "String", "-", "-"],
  ["customClass", "自定义组件类名", "String", "-", "-",],
  ["disabled", "是否禁用选项", "Boolean", "true / false", "false",],
  ["label", "单选默认label展示字段名，自定义请使用labelFiled属性重新关联lable字段", "String", "-", "label",],
  ["value", "单选默认value选中值，自定义请使用valueFiled属性重新关联value字段", "String", "-", "value",]
];
const eventDoc = [
  ["change", "开关事件","change = (e) =>{console.log(e)}"],
];
</script>

<div class="btndoc1">基本单选 change事件</div>
<div class="btndoc2">
<demo1></demo1>
</div>
<Suspense><codeds compname="lradio" demoname="demo1"></codeds></Suspense>
<div class="btndoc1">禁用单选</div>
<div class="btndoc2">
<demo2></demo2>
</div>
<Suspense><codeds compname="lradio" demoname="demo2"></codeds></Suspense>
<div class="btndoc1">是否变成行内块</div>
<div class="btndoc2">
<demo3></demo3>
</div>
<Suspense><codeds compname="lradio" demoname="demo3"></codeds></Suspense>
<div class="btndoc1">匹配不同的数据</div>
<div class="btndoc2">
<demo4></demo4>
</div>
<Suspense><codeds compname="lradio" demoname="demo4"></codeds></Suspense>
<div class="btndoc1">不同大小 不同颜色</div>
<div class="btndoc2">
<demo5></demo5>
</div>
<Suspense><codeds compname="lradio" demoname="demo5"></codeds></Suspense>
</div>

<DOC title="属性" type=prop :body="propDoc"></DOC>

<br/>

<DOC title="input 事件" type=event :body="eventDoc"></DOC>

<style>
    .btndoc2{
        display:"block";
        border:1px solid #f0f0f0;
        /* height:20vh; */
        padding:2vw;
        margin-top:2vh;
    }
    .btndoc1{
        margin-top:2vh;
    }
</style>
