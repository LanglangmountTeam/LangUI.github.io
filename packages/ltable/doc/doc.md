<div>在这里对表格的基本演示</div>
<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import codeds from '@/components/codeds.vue';
import DOC from '@/components/docview.vue';
const propDoc =  [
  [ "options","表格数据","object","-","{fileds:[],datas:[]}",],
  ["showHeader", "是否显示表头", "boolean", "ture/false", "ture"],
  ["sizes", "大小", "string", "small/default/big", "default"],
  ["headStyle", "自定义表格样式", "object", "-", "-"],
  ["rowStyle", "自定义内容区域样式", "object", "-", "-"],
  ["align", "自定义表格内容位置", "string", "left/center/right", "left"],
  ["customClass","自定义表格class类名","string","-","-"]
];
</script>

<div class="tabdoc1">基本使用</div>
<div class="tabdoc2">
<demo1></demo1>
<Suspense><codeds compname="ltable" demoname="demo1"></codeds></Suspense>
</div>

<div class="tabdoc1">不同大小的表格</div>
通过size属性设置表格的大小
<div class="tabdoc2">
<demo2></demo2>
<Suspense><codeds compname="ltable" demoname="demo2"></codeds></Suspense>
</div>

<div class="tabdoc1">自定义插槽内容</div>
<div class="tabdoc2">
<demo3></demo3>
<Suspense><codeds compname="ltable" demoname="demo3"></codeds></Suspense>
</div>
<div class="tabdoc1">自定义表头及表格样式</div>
通过headStyle属性设置表头的样式，通过rowStyle属性设置表格内容区域的样式
<div class="tabdoc2">
<demo4></demo4>
<Suspense><codeds compname="ltable" demoname="demo4"></codeds></Suspense>
</div>
<div class="tabdoc1">
<DOC title="属性" type=prop :body="propDoc"></DOC>
</div>

<style>
  .tabdoc1{
      margin-top:2vh;
  }
  .tabdoc2{
        display:"block";
        border:1px solid #f0f0f0;
        padding:1vw;
        margin-top:2vh;
    }
</style>
