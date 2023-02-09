在这里对icon演示，使用了ionicons5图标库，引用的使用需要在ionicons5官网进行参考，可参考图标库官网<a href="https://ionic.io/ionicons">ionicons5链接</a>
<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import DOC from '@/components/docview.vue';
const propDoc =  [
  [ "color","颜色","string","-","-"],
  ["del", "深度", "Number", "1-10", "10"],
  ["sizes", "大小", "Number", "1开始", "-"],
];
</script>
<div class="icon2">基础效果</div>
<div class="icon1">
<demo1></demo1>
</div>
<div class="icon2">自定义图标</div>
<div class="icon1">
<demo2></demo2>
</div>
<div class="icon2">深度</div>
<div class="icon1">
<demo3></demo3>
</div>
<div class="icon2">
<DOC title="属性" type=prop :body="propDoc"></DOC>
</div>
<style>
    .icon1{
        border:1px solid #f0f0f0;
        padding:2vw;
        display:block;
        width:70vw;
    }
    .icon2{
        margin-top:2vh;
        margin-bottom:2vh;
    }
</style>
