
# input 输入框
属性          说明              类型              可选值                默认值
label         标签文本          string           text                     -           

<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';

</script>

<div class="doc1">表单基本用法</div>
<div class="doc2">
<demo1></demo1>
</div>

<div class="doc1">正则校验</div>
<div class="doc2">
<demo2></demo2>
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
