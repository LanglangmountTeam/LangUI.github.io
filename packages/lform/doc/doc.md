
# FORM 表单       

<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import codeds from '@/components/codeds.vue';
import DOC from '@/components/docview.vue';

const propDoc =  [
  ["model","表单数据对象","object","-","-"],
  ["rules", "表单验证规则，详细规则参考async-validator", "object", "-", "-"],
  ["hideRequiredAsterisk", "是否显示*号", "boolean", "-", "-"],
  ["labelWidth", "label的长度", "string", "-", "50px"],
  ["labelPosition", "label文字的位置", "string", "start/center/end", "end"],
];
const eventDoc = [
  ["ref", "绑定元素调用validate","-"],
  ["validate", "验证表单的信息","-"] ,
];
</script>

<div class="doc1">表单基本用法</div>
<div class="doc2">
<demo1></demo1>
</div>
<Suspense><codeds compname="lform" demoname="demo1"></codeds></Suspense>

<div class="doc1">表单校验校验</div>
<div class="doc2">
<demo2></demo2>
</div>
<Suspense><codeds compname="lform" demoname="demo2"></codeds></Suspense>


<DOC title="属性" type=prop :body="propDoc"></DOC>

<br/>


<DOC title="input 事件" type=event :body="eventDoc"></DOC>
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
