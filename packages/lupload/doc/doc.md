# Upload 文件上传

<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import codeds from '@/components/codeds.vue';

import DOC from '@/components/docview.vue';
const propDoc =  [
  ["label","提示文字信息","String","-","-"],
  ["targetType","组件展现方式","String","btn / box","btn"],
  ["type","按钮类型的type，支持button的type的类型，custom除外","String","default / primary / success / danger / warning","default"],
  ["size","盒子类型时组件大小，targetType为box时有效","String","big","-"],
  ["accept","接受的文件类型","String","参考原生input=file的accept属性","-"],
  ["multiple","是否启用多选","Boolean","true / false","false"],
  ["showFileList","是否显示文件上传列表","Boolean","true / false","false"],
  ["fileList","文件上传列表，例：[{name:1.png},{name:2.png}]，imgListShow为false时有效","Array","-","[]"],
  ["drop","是否启用拖拽功能","Boolean","true / false","false"],
  ["imgListShow","是否预览已上传图片，targetType为box且showFileList为false时有效","Boolean","true / false","false"],
  ["customClass","自定义组件类名","String","-","-"],
];
const eventDoc = [
  ["beforeChange", "文件选择之前","beforeChange = (e) =>{console.log(e)}"],
  ["change", "文件选择之后","change = (files) =>{console.log(files)}"],
];
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
<!-- <Suspense><codeds compname="lupload" demoname="demo2"></codeds></Suspense> -->
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