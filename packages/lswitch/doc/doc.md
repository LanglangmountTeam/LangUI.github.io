# switch开关

<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import codeds from '@/components/codeds.vue';
import DOC from '@/components/docview.vue';
const propDoc =  [
  ["v-model","开关状态","Boolean","true / false","-"],
  ["disabled", "是否禁用，详细规则参考async-validator", "Boolean", "true / false", "-"],
  ["closeColor", "关闭状态时的背景色", "String", "-", "#BFBFBF"],
  ["activeColor", "开启状态时的背景色", "String", "-", "#74baff"],
  ["closeText", "关闭状态时辅助文字", "String", "-", "-"],
  ["activeText", "开启状态时辅助文字", "String", "-", "-"],
  ["textAlign", "辅助文字位置", "String", "left / right", "left"],
  ["showTipsText", "是否显示提示信息", "Boolean", "true / false", "false"],
  ["customClass", "自定义整体的Class类名", "String", "-", "-"],
];
const eventDoc = [
  ["change", "开关事件","change = (e) =>{console.log(e)}"],
];
</script>


<div class="doc1">基本使用 change事件</div>
<div class="doc2">
  <demo1></demo1>
</div>
<Suspense><codeds compname="lswitch" demoname="demo1"></codeds></Suspense>
<div class="doc1">禁用</div>
<div class="doc2">
  <demo2></demo2>
</div>
<Suspense><codeds compname="lswitch" demoname="demo2"></codeds></Suspense>
<div class="doc1">提示信息</div>
<div class="doc2">
  <demo3></demo3>
</div>
<Suspense><codeds compname="lswitch" demoname="demo3"></codeds></Suspense>
<div class="doc1">提示文本 可更换位置</div>
<div class="doc2">
  <demo4></demo4>
</div>
<Suspense><codeds compname="lswitch" demoname="demo4"></codeds></Suspense>
<div class="doc1">自定义颜色</div>
<div class="doc2">
  <demo5></demo5>
</div>
<Suspense><codeds compname="lswitch" demoname="demo5"></codeds></Suspense>

<DOC title="属性" type=prop :body="propDoc"></DOC>

<br/>

<DOC title="input 事件" type=event :body="eventDoc"></DOC>

<style>
.doc2{
    display:"block";
    border:1px solid #f0f0f0;
    /* height:20vh; */
    padding:2vw;
    margin-top:2vh;
}
.doc1{
    margin-top:2vh;
}
</style>