# Dialog 对话框

<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import codeds from '@/components/codeds.vue';
import DOC from '@/components/docview.vue';
const propDoc = [
  ["v-model", "绑定值", "boolean", "-", "flase"],
  ["overlay", "是否需要背景遮罩", "boolean", "-", "true"],
  ["title", "标题", "string", "-", "标题"],
  ["overlay-closebale","是否可以通过点击overlay关闭对话框","boolean","-","true",],
];

</script>

<div class="diadoc1">基本使用</div>
<div class="diadoc2">
    <demo1></demo1>
</div>
<Suspense><codeds compname="ldialog" demoname="demo1"></codeds></Suspense>

<div class="diadoc1">点击遮罩
<div class=diadoc2>
  <demo2></demo2>
</div>
</div>
<Suspense><codeds compname="ldialog" demoname="demo2"></codeds></Suspense>

<div class="diadoc1">一句话打开对话框
<div class=diadoc2>
  <demo3></demo3>
</div>
</div>
<Suspense><codeds compname="ldialog" demoname="demo3"></codeds></Suspense>

<div class="diadoc1">
<DOC title="属性" type=prop :body="propDoc"></DOC>
</div>

<style>
.diadoc1{
    margin-top:2vh;
    margin-bottom:2vh;
  }
.diadoc2{
    display:"block";
    border:1px solid #f0f0f0;
    padding:1vw;
    margin-top:2vh;
}


</style>
