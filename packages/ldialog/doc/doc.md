<div>在这里对对话框进行演示</div>

<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import codeds from '@/components/codeds.vue';
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
