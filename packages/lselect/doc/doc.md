下拉选择器
<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import demo6 from './demo6.vue';
import demo7 from './demo7.vue';
import demo8 from './demo8.vue';
import codeds from '@/components/codeds.vue';
</script>

<div class="doc1">
基本使用
select 下拉框基本使用示例,需要一个主要的 options 参数
</div>
<div class="doc2">
  <demo1></demo1>
</div>
<Suspense><codeds compname="lselect" demoname="demo1"></codeds></Suspense>
<div class="doc1">
禁用状态
可以设置 disabled 属性来实现禁用状态
</div>
<div class="doc2">
  <demo2></demo2>
</div>
<Suspense><codeds compname="lselect" demoname="demo2"></codeds></Suspense>
<div class="doc1">
禁用选项
可以针对 options 下某个选项来添加 disabled 属性实现禁用选项
</div>
<div class="doc2">
  <demo3></demo3>
</div>
<Suspense><codeds compname="lselect" demoname="demo3"></codeds></Suspense>
<div class="doc1">
匹配不同格式的数据
默认 options 接收 label 和 value 作为显示和值绑定，你可以根据 labelFiled 和 valueFiled 来重新确定字段的绑定，更方便的匹配不同格式的数据。
</div>
<div class="doc2">
  <demo4></demo4>
</div>
<Suspense><codeds compname="lselect" demoname="demo4"></codeds></Suspense>
<div class="doc1">
不同大小
通过设置 size 属性来显示不同大小的 select

</div>
<div class="doc2">
  <demo5></demo5>
</div>
<Suspense><codeds compname="lselect" demoname="demo5"></codeds></Suspense>

<div class="doc1">
可过滤搜索
通过设置 searchable 属性来开启过滤搜索
</div>
<div class="doc2">
  <demo6></demo6>
</div>
<Suspense><codeds compname="lselect" demoname="demo6"></codeds></Suspense>

<div class="doc1">
多选
通过设置 multiple 属性来开启多选
</div>
<div class="doc2">
  <demo8></demo8>
</div>
<Suspense><codeds compname="lselect" demoname="demo8"></codeds></Suspense>

<div class="doc1">
自定义宽高
通过设置 width 和 height 自定义宽高
</div>
<div class="doc2">
  <demo7></demo7>
</div>
<Suspense><codeds compname="lselect" demoname="demo7"></codeds></Suspense>



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