

# Message 消息提示
<br/>
<div class='btndoc1'>基本用法</div>
<div class='btndoc1'>message 消息提示基本使用示例。</div>
<div class="btndoc2">
  <demo1/>
</div>
<Suspense><codeds compname="message" demoname="demo1"></codeds></Suspense>

<br/>
<div class='btndoc1'>不同状态</div>
<div class='btndoc1'>可根据 Message 参数的 type 来定义显示不同的状态。</div>
<div class="btndoc2">
  <demo3/>
</div>
<Suspense><codeds compname="message" demoname="demo3"></codeds></Suspense>

<br/>
<div class='btndoc1'>拓展自定义配置</div>
<div class='btndoc1'>可根据不同场景自定义 icon 图标及 timeout 消失时间。</div>
<div class="btndoc2">
  <demo4/>
</div>
<Suspense><codeds compname="message" demoname="demo4"></codeds></Suspense>

<br/>
<br/>
<div class="btndoc1">
<DOC title="Breadcrumb 属性" type=prop :body="mgPropsData"></DOC>
</div>

<script setup>
import demo1 from './demo1.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import DOC from '@/components/docview.vue';
import codeds from '@/components/codeds.vue'

const mgPropsData = [
  {
        attr: 'text',
        red: '消息提示文本内容',
        type: 'String|VNode',
        sel: '——',
        def: '——'
      },
      {
        attr: 'type',
        red: '消息提示类型',
        type: 'String',
        sel: 'info / warn / error / success / custom',
        def: 'info'
      },
      {
        attr: 'icon',
        red: '消息提示Icon图标',
        type: 'String',
        sel: '参考图标库',
        def: '——'
      },
      {
        attr: 'timeout',
        red: '消息提示框消失时间（单位：毫秒ms）',
        type: 'Number',
        sel: '——',
        def: '2500'
      },
      {
        attr: 'textColor',
        red: '文本颜色，type 为 custom 时有效',
        type: 'String',
        sel: '——',
        def: '——'
      },
      {
        attr: 'bgColor',
        red: '背景颜色，type 为 custom 时有效',
        type: 'String',
        sel: '——',
        def: '——'
      },
      {
        attr: 'customClass',
        red: '自定义组件类名',
        type: 'String',
        sel: '——',
        def: '——'
      }
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