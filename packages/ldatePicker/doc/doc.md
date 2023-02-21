# DatePicker 日期选择     

<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import demo6 from './demo6.vue';
import demo7 from './demo7.vue';
import Attributes from './Attributes.vue'
import Format from './format.vue'
import Event from './Events.vue'
import codeds from '@/components/codeds.vue';
import DOC from '@/components/docview.vue';
</script>

<div class="doc1">
基本使用
Date 组件基本使用示例
</div>
<div class="doc2">
  <demo1></demo1>
</div>
<Suspense><codeds compname="ldatePicker" demoname="demo1"></codeds></Suspense>

<div class="doc1">
禁用状态
通过 disabled 属性开启禁用。
</div>
<div class="doc2">
  <demo2></demo2>
</div>
<Suspense><codeds compname="ldatePicker" demoname="demo2"></codeds></Suspense>
<div class="doc1">
不同大小
通过 size 属性设置显示不同大小。
 </div>
<div class="doc2">
  <demo3></demo3>
</div>
<Suspense><codeds compname="ldatePicker" demoname="demo3"></codeds></Suspense>

<div class="doc1">
选择年
通过设置 type=“year” 快捷选择年。
</div>
<div class="doc2">
  <demo4></demo4>
</div>
<Suspense><codeds compname="ldatePicker" demoname="demo4"></codeds></Suspense>
<div class="doc1">
选择月
通过设置 type=“month” 快捷选择月
</div>
<div class="doc2">
  <demo5></demo5>
</div>
<Suspense><codeds compname="ldatePicker" demoname="demo5"></codeds></Suspense>
<div class="doc1">
格式化日期显示
通过设置 format 格式化日期显示
</div>
<div class="doc2">
  <demo6></demo6>
</div>
<Suspense><codeds compname="ldatePicker" demoname="demo6"></codeds></Suspense>
<div class="doc1">
日期选择范围限制
设置可选择的日期范围限制
</div>
<div class="doc2">
  <demo7></demo7>
</div>
<Suspense><codeds compname="ldatePicker" demoname="demo7"></codeds></Suspense>


<br/>

<Attributes/>
<br/>

## format 日期格式说明

<Format/>
<br/>

## Event 事件

<Event/>
<br/>
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
