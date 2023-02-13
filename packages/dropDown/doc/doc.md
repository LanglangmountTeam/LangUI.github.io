

# Dropdown 下拉菜单

<div class='btndoc1'>基本使用</div>
<div class='btndoc1'>Dropdown 下拉菜单的基本使用，需要一个主要的 _options_ 参数。</div>
<div class='btndoc2'><demo1/></div>

<div class='btndoc1'>不同大小</div>
<div class='btndoc1'>通过设置 _size_ 属性适应不同大小。</div>

<div class="btndoc2">
  <demo2/>
</div>


<div class='btndoc1'>图标类型</div>
<div class='btndoc1'>通过具名插槽设置下拉菜单头像</div>

<div class="btndoc2">
  <demo3/>
</div>

<div class='btndoc1'>唤醒方式</div>
<div class='btndoc1'>通过设置 _trigger_ 属性设置不同的唤醒方式</div>

<div class="btndoc2">
  <demo4/>
</div>


<div class='btndoc1'>头像类型</div>
<div class='btndoc1'>通过插槽 _#Img_ 设置头像类型的下拉菜单。</div>

<div class="btndoc2">
  <demo5/>
</div>

<div class="btndoc1">
<DOC title="属性" type=prop :body="datasAtt"></DOC>
</div>

<div class="btndoc1">
<DOC title="Event 事件" type=event :body="datasevent"></DOC>
</div>

<div class="btndoc1">
<DOC title="options API" type=prop :body="dataAPI"></DOC>
</div>

<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import DOC from '@/components/docview.vue';
// import Attributes from './Attributes.vue'
// import Options from './options.vue'
// import Event from './Events.vue'
// import preview from '@/components/preview.vue'

const dataAPI = [
  {
        attr: "label",
        red: "固定值，菜单名称",
        type: "String",
        sel: "——",
        def: "——",
      },
]

const datasevent = [
  {
        name: "change",
        red: "下拉菜单选择事件",
        attr: "(value: item,index)",
        exm: "change = (item,index) =>{console.log(item,index)}",
  },
]

const datasAtt = [
  {
        attr: "title",
        red: "下拉菜单标题",
        type: "String",
        sel: "——",
        def: "——",
      },
      {
        attr: "size",
        red: "尺寸大小",
        type: "String",
        sel: "default / small / mini",
        def: "default",
      },
      {
        attr: "options",
        red: "下拉菜单数据配置，具体见下方 options API",
        type: "Array",
        sel: "——",
        def: "[]",
      },
      {
        attr: "trigger",
        type: "String",
        red: "唤醒方式",
        sel: "hover / click",
        def: "hover",
      },
      {
        attr: "customClass",
        red: "自定义下拉菜单类名",
        type: "String",
        sel: "——",
        def: "——",
      },
]

</script>


<style>
    .btndoc2{
        display:"block";
        border:1px solid #f0f0f0;
        padding:2vw;
        margin-top:2vh;
    }
    .btndoc1{
        margin-top:2vh;
    }
</style>
