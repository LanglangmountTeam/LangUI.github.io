下拉选择器
<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
</script>

<div class="doc1">基本使用</div>
<div class="doc2">
  <demo1></demo1>
</div>

<div class="doc1">匹配不同的数据</div>
<div class="doc2">
  <demo2></demo2>
</div>

<div class="doc1">匹配不同的数据</div>
<div class="doc2">
  <demo3></demo3>
</div>



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