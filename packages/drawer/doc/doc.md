

# Drawer 抽屉

<br/>

<div class='btndoc1'>基本抽屉</div>
<div class='btndoc1'>基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭</div>
<div class="btndoc2">
  <demo1/>
</div>

<br/>

<div class='btndoc1'>自定义位置</div>
<div class='btndoc1'>自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭。</div>
<div class="btndoc2">
  <demo2/>
</div>

<br/>

<div class="btndoc1">自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭。</div>
<div class="btndoc1">使用具名插槽 _#header_ 、 _#content_ 、_#footer_ 可对模态框整体根据需要自定义。你也可以通过 _showHeader_ 和 _showFooter_ 属性动态控制是否显示顶部和底部。</div>
<div class="btndoc2">
  <demo3/>
</div>

<br/>
<div class="btndoc1">
<DOC title="属性" type=prop :body="propDoc"></DOC>
</div>

<br/>
<div class="btndoc1">
<DOC title="事件" type=event :body="eventDoc"></DOC>
</div>


<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import DOC from '@/components/docview.vue';

const eventDoc=[
  {
    name: "close",
    red: "抽屉关闭事件",
    attr: "()",
    exm: "close = () =>{}",
  },
  {
    name: "confirm",
    red: "右上角确定按钮点击事件",
    attr: "()",
    exm: "confirm = () =>{}",
  },
  {
    name: "cancel",
    red: "右上角取消按钮点击事件",
    attr: "()",
    exm: "cancel = () =>{}",
  },
]

const propDoc =  [
  {
        attr: "title",
        red: "抽屉标题，如果使用header具名插槽后将失效",
        type: "String",
        sel: "——",
        def: "标题",
      },
      {
        attr: "v-model",
        red: "是否显示抽屉",
        type: "Boolean",
        sel: "true / false ",
        def: "false",
      },
      {
        attr: "direction",
        red: "抽屉出现为方向",
        type: "String",
        sel: "left / top / right / bottom",
        def: "left",
      },
      {
        attr: "width",
        red: "抽屉区域宽度，direction 为 left 和 right 时有效",
        type: "String",
        sel: "——",
        def: "30%",
      },
      {
        attr: "height",
        red: "抽屉区域高度，direction 为 top 和 bottom 时有效",
        type: "String",
        sel: "——",
        def: "40%",
      },
      {
        attr: "closeOnModal",
        red: "是否可通过遮罩层关闭抽屉",
        type: "Boolean",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "showHeader",
        red: "是否显示抽屉头部区域",
        type: "Boolean",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "showFooter",
        red: "是否显示抽屉底部区域",
        type: "Boolean",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "showClose",
        red: "是否显示左上角关闭按钮",
        type: "Boolean",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "confirmText",
        red: "右上角确定按钮文本",
        type: "String",
        sel: "——",
        def: "确定",
      },
      {
        attr: "cancelText",
        red: "右上角取消按钮文本",
        type: "String",
        sel: "——",
        def: "取消",
      },
      {
        attr: "confirmShow",
        red: "是否显示右上角确定按钮",
        type: "Boolean",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "cancelShow",
        red: "是否显示右上角取消按钮",
        type: "Boolean",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "customClass",
        red: "抽屉组件自定义类名",
        type: "Boolean",
        sel: "——",
        def: "——",
      },
      {
        attr: "#header",
        red: "抽屉顶部区域具名插槽名",
        type: "String",
        sel: "——",
        def: "——",
      },
      {
        attr: "#content",
        red: "抽屉内容区域具名插槽名",
        type: "String",
        sel: "——",
        def: "——",
      },
      {
        attr: "#footer",
        red: "抽屉底部区域具名插槽名",
        type: "String",
        sel: "——",
        def: "——",
      },
];

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

