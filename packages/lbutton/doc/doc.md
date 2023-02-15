在这里对button演示。
<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import codeds from '../../../src/components/codeds.vue';
</script>
<div class="btndoc1">基本按钮</div>
<div class="btndoc2">
<demo1></demo1>
</div>
<div class="btndoc1">圆角按钮</div>
<div class="btndoc2">
<demo2></demo2>
</div>
<div class="btndoc1">虚线按钮</div>
<div class="btndoc2">
<demo3></demo3>
</div>
<div class="btndoc1">图标按钮</div>
<div class="btndoc2">
<demo4></demo4>
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
