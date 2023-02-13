<div>在这里对表格的基本演示</div>
<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
// import demo4 from './demo4.vue'
// import Attributes from './Attributes.vue'
// import Fileds from './fileds.vue'
// import preview from '@/components/preview.vue'
</script>

<div class="tabdoc1">基本使用</div>
<div class="tabdoc2">
<demo1></demo1>
</div>

<div class="tabdoc1">不同大小的表格</div>
<div class="tabdoc2">
<demo2></demo2>
</div>

<div class="tabdoc1">自定义插槽内容</div>
<div class="tabdoc2">
<demo3></demo3>
</div>

<style>
  .tabdoc1{
      margin-top:2vh;
  }
  .tabdoc2{
        display:"block";
        border:1px solid #f0f0f0;
        width:70vw;
        padding:1vw;
        margin-top:2vh;
    }
</style>
