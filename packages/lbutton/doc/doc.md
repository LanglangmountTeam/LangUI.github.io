<div>在这里对按钮的基本演示</div>
<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import demo6 from './demo6.vue';
import DOC from '@/components/docview.vue';
import codeds from '@/components/codeds.vue';
const propDoc =  [
  [ "type","类型","string","default / primary / info / success / warning / danger","default",],
  ["tsy", "是否虚线为按钮", "boolean", "-", "false"],
  ["sizes", "大小", "string", "small /  big", "default"],
  ["round", "是否为圆角按钮", "boolean", "-", "false"],
  ["icon", "图标按钮", "boolean", "-", "false"],
  ["dis", "是否禁用", "boolean", "-", "fasle"],
];
</script>
<div class="btndoc1">基本按钮</div>
<div class="btndoc2">
<demo1></demo1>
</div>
<Suspense><codeds compname="lbutton" demoname="demo1"></codeds></Suspense>

<div class="btndoc1">圆角按钮</div>
<div class="btndoc2">
<demo2></demo2>
</div>
<Suspense><codeds compname="lbutton" demoname="demo2"></codeds></Suspense>
<div class="btndoc1">虚线按钮</div>
<div class="btndoc2">
<demo3></demo3>
</div>
<Suspense><codeds compname="lbutton" demoname="demo3"></codeds></Suspense>
<div class="btndoc1">图标按钮</div>
<div class="btndoc2">
<demo4></demo4>
</div>
<Suspense><codeds compname="lbutton" demoname="demo4"></codeds></Suspense>
<div class="btndoc1">尺寸按钮</div>
<div class="btndoc2">
<demo5></demo5>
</div>
<Suspense><codeds compname="lbutton" demoname="demo5"></codeds></Suspense>
<div class="btndoc1">禁用按钮</div>
<div class="btndoc2">
<demo6></demo6>
</div>
<Suspense><codeds compname="lbutton" demoname="demo6"></codeds></Suspense>
<div>
<div class="btndoc1">
<DOC title="属性" type=prop :body="propDoc"></DOC>
</div>
</div>
<style scoped>
    .btndoc2{
        display:"block";
        border:1px solid #f0f0f0;
        /* height:20vh; */
        padding-top:2vw;
        padding-bottom:2vw;
       margin-top:2vh;
    }
    .btndoc1{
        margin-top:2vh;
    }
</style>
