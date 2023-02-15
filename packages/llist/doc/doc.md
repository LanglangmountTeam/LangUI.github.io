# List 列表

<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import DOC from '@/components/docview.vue';
import codeds from '@/components/codeds.vue';
const propDoc =  [
  [ "title","列表内容","String","-","-",],
  ["desc", "描述内容", "String", "-", "-"],
  ["detail", "是否有详细信息", "Boolean", "true/false", "false"],
  ["iconRight", "是否展示右图标", "Boolean", "true/false", "false"],
  ["iconLeft", "是否展示左图标", "Boolean", "true/false", "false"],
  ["iconLeftColor","自定义左图标颜色","string","-","-"]
  ["iconRightColor","自定义右图标颜色","string","-","-"]
];
</script>

<div class="lisdoc1"></div>
基本列表使用
<div class="lisdoc2">
<demo1></demo1>
</div>
<Suspense><codeds compname="llist" demoname="demo1"></codeds></Suspense>

<div class="lisdoc1">列表+详情</div>
<div class="lisdoc1">通过detail属性选择是否需要详情信息</div>
<div class="lisdoc2">
<demo2></demo2>
</div>
<Suspense><codeds compname="llist" demoname="demo2"></codeds></Suspense>

<div class="lisdoc1">列表+详情+左图标</div>
<div class="lisdoc1">通过iconLeft属性来选择是否需要左图标</div>
<div class="lisdoc2">
<demo3></demo3>
</div>
<Suspense><codeds compname="llist" demoname="demo3"></codeds></Suspense>

<div class="lisdoc1">列表+详情+左图标+内容描述</div>
<div class="lisdoc1">通过desc属性来设置描述内容</div>
<div class="lisdoc2">
<demo4></demo4>
</div>
<Suspense><codeds compname="llist" demoname="demo4"></codeds></Suspense>

<div class="lisdoc1">列表+详情+右图标</div>
<div class="lisdoc1">通过iconRight属性来选择是否需要右图标</div>
<div class="lisdoc2">
<demo5></demo5>
</div>
<Suspense><codeds compname="llist" demoname="demo5"></codeds></Suspense>

<div class="lisdoc1">
<DOC title="属性" type=prop :body="propDoc"></DOC>
</div>

<style>
  .lisdoc1{
      margin-top:2vh;
  }
  .lisdoc2{
        display:"block";
        border:1px solid #f0f0f0;
        padding:1vw;
        margin-top:2vh;
    }
</style>
