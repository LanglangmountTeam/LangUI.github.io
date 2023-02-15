radio
<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import codeds from '@/components/codeds.vue';
</script>

<div class="btndoc1">基本单选 change事件</div>
<div class="btndoc2">
<demo1></demo1>
</div>
<Suspense><codeds compname="lradio" demoname="demo1"></codeds></Suspense>
<div class="btndoc1">禁用单选</div>
<div class="btndoc2">
<demo2></demo2>
</div>
<Suspense><codeds compname="lradio" demoname="demo2"></codeds></Suspense>
<div class="btndoc1">是否变成行内块</div>
<div class="btndoc2">
<demo3></demo3>
</div>
<Suspense><codeds compname="lradio" demoname="demo3"></codeds></Suspense>
<div class="btndoc1">匹配不同的数据</div>
<div class="btndoc2">
<demo4></demo4>
</div>
<Suspense><codeds compname="lradio" demoname="demo4"></codeds></Suspense>
<div class="btndoc1">不同大小 不同颜色</div>
<div class="btndoc2">
<demo5></demo5>
</div>
<Suspense><codeds compname="lradio" demoname="demo5"></codeds></Suspense>
</div>

<style>
    .btndoc2{
        display:"block";
        border:1px solid #f0f0f0;
        /* height:20vh; */
        padding:2vw;
        margin-top:2vh;
    }
    .btndoc1{
        margin-top:2vh;
    }
</style>
