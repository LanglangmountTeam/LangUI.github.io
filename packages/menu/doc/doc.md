# Menu 菜单

<br/>
<div class='btndoc1'>Menu基本使用</div>
<div class='btndoc1'>用于网站导航分级菜单</div>
<div class="btndoc2">
  <demo1/>
</div>
<Suspense><codeds compname="menu" demoname="demo1"></codeds></Suspense>

<br/>
<div class='btndoc1'>黑色主题</div>
<div class='btndoc1'>设置 _theme_ 为 _black_ 即可不同的状态。</div>
<div class="btndoc2">
  <demo2/>
</div>
<Suspense><codeds compname="menu" demoname="demo2"></codeds></Suspense>

<br/>
<div class='btndoc1'>自定义颜色</div>
<div class='btndoc1'>也可以通过设置 _theme_ 接收一个_Object_ 来自定义你喜欢的颜色</div>
<div class="btndoc2">
  <demo3/>
</div>
<Suspense><codeds compname="menu" demoname="demo3"></codeds></Suspense>

<br/>
<div class='btndoc1'>插槽</div>
<div class='btndoc1'>可通过设置插槽实现右侧下拉菜单或其他功能</div>
<div class="btndoc2">
  <demo4/>
</div>
<Suspense><codeds compname="menu" demoname="demo4"></codeds></Suspense>

<br/>
<div class='btndoc1'>禁用菜单</div>
<div class='btndoc1'></div>
<div class="btndoc2">
  <demo6/>
</div>
<Suspense><codeds compname="menu" demoname="demo6"></codeds></Suspense>

<br/>
<br/>
<div class="btndoc1">
<DOC title="Menu 属性" type=prop :body="menupropsData"></DOC>
</div>

<br/>
<div class="btndoc1">
<DOC title="options API" type=prop :body="menuOpAPIData"></DOC>
</div>

<br/>
<div class="btndoc1">
<DOC title="options API" type=event :body="eventData"></DOC>
</div>

<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo6 from './demo6.vue'
import DOC from '@/components/docview.vue';
import codeds from '@/components/codeds.vue';
// import Attributes from './Attributes.vue'
// import Theme from './theme.vue'
// import Options from './options.vue'
// import Event from './Events.vue'
// import preview from '@/components/preview.vue'

const eventData = [
   {name:"focus",red:'input在获取焦点时触发',attr:'(event: Event)',exm:'focus=(e)=>{console.log(e.target.value)}'},
      {name:"blur",red:'input在失去焦点时触发',attr:'(event: Event)',exm:'blur=(e)=>{console.log(e.target.value)}'},
      {name:"input",red:'input值变化时触发',attr:'(value: string | number)',exm:'input=(e)=>{console.log(e)}'},
      {name:"change",red:'用户获得焦点并按下回车时触发',attr:'(event: Event)',exm:'change=(e)=>{console.log(e.target.value)}'},
      {name:"clear",red:'可清空的input点击清空按钮时触发',attr:'——',exm:'——'},
]

const menuOpAPIData = [
  {
        attr: "title",
        red: "菜单名称",
        type: "String",
        sel: "——",
        def: "title",
      },
      {
        attr: "children",
        red: "节点子集数据",
        type: "Array",
        sel: "——",
        def: "——",
      },
      {
        attr: "disabled",
        red: "是否禁用",
        type: "Boolean",
        sel: "true / false",
        def: "——",
      },
      {
        attr: "*",
        red: "其他自定拓展配置字段，如：id、vlaue",
        type: "String",
        sel: "——",
        def: "——",
      },
]

const menupropsData = [
  {
        attr: "options",
        red: "菜单树形数据，见下方options API",
        type: "Array",
        sel: "——",
        def: "——",
      },
      {
        attr: "theme",
        red: "主题类型，支持white,black两种，并且可自行配置，见下方theme API",
        type: "String | Object",
        sel: "white / black",
        def: "white",
      },
      {
        attr: "type",
        red: "菜单布局方式",
        type: "String",
        sel: "vertical / horizontal",
        def: "vertical",
      },
      {
        attr: "disabled",
        red: "是否禁用",
        type: "Boolean",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "readonly",
        red: "原生属性，是否只读",
        type: "Boolean",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "form",
        red: "原生属性，所属表单",
        type: "String",
        sel: "——",
        def: "——",
      },
      {
        attr: "clearable",
        red: "是否可清空",
        type: "Boolean",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "showPassword",
        red: "是否显示密码查看图标，需配合type为password类型一起使用",
        type: "Boolean",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "size",
        red: "尺寸大小",
        type: "String",
        sel: "default / small / mini",
        def: "default",
      },
      {
        attr: "leftIcon / rightIcon",
        red: "是否带图标，并确定图标的位置",
        type: "String",
        sel: "参考图标库",
        def: "——",
      },
      {
        attr: "autofocus",
        red: "是否自动获取输入框焦点",
        type: "Boolean",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "focusColor",
        red: "自定义Focus颜色的色值",
        type: "String",
        sel: "——",
        def: "——",
      },
]
</script>

<style scoped>
    .btndoc2{
        display:"block";
        border:1px solid #f0f0f0;
        /* height:20vh; */
        padding-top:2vw;
        padding-bottom:2vw;
       margin-top:2vh;
    }
    .btndoc1{
        margin-top:2vh;
    }
</style>
