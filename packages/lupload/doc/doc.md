文件上传upload

<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import codeds from '@/components/codeds.vue';
</script>


<div class="doc1">
  基本使用
  beforeChange事件
  change事件
</div>
<div class="doc2">
  <demo1></demo1>
</div>
<Suspense><codeds compname="lupload" demoname="demo1"></codeds></Suspense>
<div class="doc1">
  showFileList 展示fileList
  type 更换颜色类型
</div>
<div class="doc2">
  <demo2></demo2>
</div>
<Suspense><codeds compname="lupload" demoname="demo2"></codeds></Suspense>
<div class="doc1">
  targetType 切换盒子 按钮样式 默认为btn
  multiple 是否启用多选
</div>
<div class="doc2">
  <demo3></demo3>
</div>
<Suspense><codeds compname="lupload" demoname="demo3"></codeds></Suspense>
<div class="doc1">
  通过设置 drop 开启拖拽
  size 默认空 可选big
</div>
<div class="doc2">
  <demo4></demo4>
</div>
<Suspense><codeds compname="lupload" demoname="demo4"></codeds></Suspense>
<div class="doc1">
  imgListShow 是否开启预览
</div>
<div class="doc2">
  <demo5></demo5>
</div>
<Suspense><codeds compname="lupload" demoname="demo5"></codeds></Suspense>

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