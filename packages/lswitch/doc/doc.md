switch

<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
</script>


<div class="doc1">基本使用 change事件</div>
<div class="doc2">
  <demo1></demo1>
</div>

<div class="doc1">禁用</div>
<div class="doc2">
  <demo2></demo2>
</div>

<div class="doc1">提示信息</div>
<div class="doc2">
  <demo3></demo3>
</div>

<div class="doc1">提示文本 可更换位置</div>
<div class="doc2">
  <demo4></demo4>
</div>

<div class="doc1">自定义颜色</div>
<div class="doc2">
  <demo5></demo5>
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