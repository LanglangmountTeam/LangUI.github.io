<h1>textarea文本域<h1>

# input 输入框
属性          说明            类型              可选值                默认值
rows          文本域宽度      number                                  10
cols          文本域长度       number                                  30
readonly      只读            boolean          -                     false
maxLength     输入最大长度     number            -                       -
placeholder   提示内容         string            -                    Basic usage
disabled      是否禁用         boolean           -                    false          
v-model       双向绑定         string/number      -                    -
resize        是否可以拖拽      boolean

事件
focus         获取焦点
blur          失去焦点
input         输入时的行为

<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import codeds from '@/components/codeds.vue';
</script>

<div class="doc1">基本使用</div>
<div class="doc2">
  <demo1></demo1>
</div>
<Suspense><codeds compname="textarea" demoname="demo1"></codeds></Suspense>

<div class="doc1">不可拖拽 限定长度 只读</div>
<div class="doc2">
  <demo2></demo2>
</div>
<Suspense><codeds compname="textarea" demoname="demo1"></codeds></Suspense>
<div class="doc1">input blur focus change 事件</div>
<div class="doc2">
  <demo3></demo3>
</div>
<Suspense><codeds compname="textarea" demoname="demo1"></codeds></Suspense>
<div class="doc1">文本框禁用 </div>
<div class="doc2">
  <demo4></demo4>
</div>
<Suspense><codeds compname="textarea" demoname="demo1"></codeds></Suspense>

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
