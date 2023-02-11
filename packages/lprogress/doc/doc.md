<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import demo6 from './demo6.vue';
import demo7 from './demo7.vue';
import DOC from '@/components/docview.vue';
const propDoc =  [
  [ "percent","百分比进度","number","1-100","-"],
  ["length", "进度条长度", "Number", "1开始", "10"],
  ["color", "进度条颜色", "string", "success/primary/default/warning/danger", "-"],
  ["intext", "进度条跟随", "boolean", "true/false", "false"],
  ["hidetext", "隐藏进度条", "boolean", "true/false", "false"],
  ["circle", "圆形进度条", "boolean", "true/false", "false"],
];
</script>
<div style="font-size:2vw;">进度条演示</div>

 
<br/>

基本使用

<br/>

<div class="lprogressdeom1">
<demo1></demo1>
</div>

<br/>

进度条长短

<br/>

<div class="lprogressdeom1">
<demo2></demo2>
</div>

<br/>

百分比跟随进度条或者隐藏

<br/>

<div class="lprogressdeom1">
<demo3></demo3>
</div>

<br/>

动态进度条演示

<br/>

<div class="lprogressdeom1">
<demo4></demo4>
</div>

<br/>

圆形进度条

<br/>

<div class="lprogressdeom1">
<demo5></demo5>
</div>

<br/>

动态绑定进度条

<br/>

<div class="lprogressdeom1">
<demo6></demo6>
</div>

<br/>

自动进度条

<br/>

<div class="lprogressdeom1">
<demo7></demo7>
</div>

<br/>

<div class="lprogressdeom1">
<DOC title="属性" type=prop :body="propDoc"></DOC>
</div>
<style scoped>
    .lprogressdeom1{
        border:1px solid #f0f0f0;
        padding:1vw;
        width:85vw;
    }
</style>