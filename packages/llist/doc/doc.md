# List 列表

<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import DOC from '@/components/docview.vue';
import codeds from '@/components/codeds.vue';
</script>

<div class="lisdoc1"></div>
基本列表
<div class="lisdoc2">
<demo1></demo1>
</div>
<Suspense><codeds compname="llist" demoname="demo1"></codeds></Suspense>

<div class="lisdoc1"></div>
列表+详情
<div class="lisdoc2">
<demo2></demo2>
</div>
<Suspense><codeds compname="llist" demoname="demo2"></codeds></Suspense>

<div class="lisdoc1"></div>
列表+详情+左图标
<div class="lisdoc2">

</div>

<div class="lisdoc1"></div>
列表+详情+左图标+描述
<div class="lisdoc2">

</div>

<div class="lisdoc1"></div>
不同尺寸的列表
<div class="lisdoc2">

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
