<div>在这里进行头像的演示</div>
<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import DOC from '@/components/docview.vue';
import codeds from '@/components/codeds.vue';
const propDoc =  [
  [ "icon","大小","number/string","nember/large/default/small","default",],
  ["shap", "形状", "string", "circle/square", "circle"],
  ["src", "头像图片的资源地址", "string", "-", "-"],
  ["alt", "描述图像的文本", "string", "-", "-"],
];
</script>

<div class="avadoc1">基本使用</div>
<div class="avadoc2">
    <div class="avadoc1">通过size属性来设置头像大小</div>
    <demo1></demo1>
</div>
<Suspense><codeds compname="lavatar" demoname="demo1"></codeds></Suspense>

<div class="avadoc1">形状</div>
    <div class="avadoc2">
        <div class="avadoc1">通过shape属性来设置头像形状</div>
        <demo2></demo2>
    </div>
    <Suspense>
        <codeds compname="lavatar" demoname="demo2"></codeds>
    </Suspense>
</div>

<div class="avadoc1">颜色</div>
    <div class="avadoc2">
        <div class="avadoc1">自定义头像的字体及背景颜色</div>
        <demo3></demo3>
    </div>
    <Suspense>
        <codeds compname="lavatar" demoname="demo3"></codeds>
    </Suspense>
</div>

<div class="avadoc1">
    <DOC title="属性" type=prop :body="propDoc"></DOC>
</div>

<style>
.avadoc1{
    margin-top:2vh;
    margin-bottom:2vh;
  }
.avadoc2{
    display:"block";
    border:1px solid #f0f0f0;
    padding:1vw;
    margin-top:2vh;
}
</style>
