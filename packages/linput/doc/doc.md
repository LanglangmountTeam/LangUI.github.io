<h1>input<h1>

# input 输入框
属性          说明            类型              可选值                默认值
type          类型            string           text/password         text
readonly      只读            boolean          -                     false
size          大小            string           large/medium/small    medium
maxLength     输入最大长度     number            -                       -
showpwd       是否显示密码     boolean           -                    false
placeholder   input提示内容    string            -                    Basic usage
disabled      是否禁用         boolean           -                    false          
v-model       双向绑定         string/number      -                    -
clearable     是否可清除        boolean           - false or            false
prefixIcon    前面添加icon      string            -                     -
suffixIcon    后面添加icon      string            -                     -

事件
focus         获取焦点
blur          失去焦点
clear         清除input
input         输入时的行为
change        输入结束时触发

<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import demo6 from './demo6.vue';
import demo7 from './demo7.vue';
import codeds from '@/components/codeds.vue';
</script>

<div class="doc1">基本使用 icon</div>
<div class="doc2">
  <demo1></demo1>
</div>
<Suspense><codeds compname="linput" demoname="demo1"></codeds></Suspense>

<div class="doc1">不同的大小</div>
<div class="doc2">
  <demo2></demo2>
</div>
<Suspense><codeds compname="linput" demoname="demo2"></codeds></Suspense>
<div class="doc1">禁用状态 </div>
<div class="doc2">
  <demo3></demo3>
</div>
<Suspense><codeds compname="linput" demoname="demo3"></codeds></Suspense>

<div class="doc1">可清空 clear事件</div>
<div class="doc2">
  <demo4></demo4>
</div>
<Suspense><codeds compname="linput" demoname="demo4"></codeds></Suspense>
<div class="doc1">双向绑定 长度限制</div>
<div class="doc2">
  <demo5></demo5>
</div>
<Suspense><codeds compname="linput" demoname="demo5"></codeds></Suspense>
<div class="doc1">密码显示</div>
<div class="doc2">
  <demo6></demo6>
</div>
<Suspense><codeds compname="linput" demoname="demo6"></codeds></Suspense>
<div class="doc1">获取焦点和失去焦点事件</div>
<div class="doc2">
  <demo7></demo7>
</div>
<Suspense><codeds compname="linput" demoname="demo7"></codeds></Suspense>
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
