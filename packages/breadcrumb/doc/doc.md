# Breadcrumb 面包屑

<br/>
<div class='btndoc1'>基本用法</div>
<div class="btndoc2">
<demo1/>
</div>
<Suspense><codeds compname="breadcrumb" demoname="BreadcrumbPreview1.preview"></codeds></Suspense>

<br/>
<div class='btndoc1'>图标分隔符</div>
<div class="btndoc2">
  <demo2/>
</div>
<Suspense><codeds compname="breadcrumb" demoname="BreadcrumbPreview2.preview"></codeds></Suspense>

<br/><br/>
<div class="btndoc1">
<DOC title="Breadcrumb 属性" type=prop :body="bdpPropsData1"></DOC>
</div>

<br/>
<div class="btndoc1">
<DOC title="Breadcrumb Item 属性" type=prop :body="bdpPropsData2"></DOC>
</div>

<br/>
<div class="btndoc1">
<DOC title="Breadcrumb 插槽" type=slot :body="bdqSlotdata1"></DOC>
</div>

<br/>
<div class="btndoc1">
<DOC title="Breadcrumb Item 插槽" type=slot :body="bdqSlotdata2"></DOC>
</div>

<script setup>
import demo1 from './BreadcrumbPreview1.preview.vue'
import demo2 from './BreadcrumbPreview2.preview.vue'
import DOC from '@/components/docview.vue';
import codeds from '@/components/codeds.vue'

const bdpPropsData1 = [
  {
     name:'separator',
     red:'分隔符',
     type:'string',
     sel:'_',
     def:'/'
  },
   {
     name:'separator-icon',
     red:'图标分隔符的组件或组件名',
     type:'Component',
     sel:'_',
     def:'_'
  }
]
const bdpPropsData2 = [
  {
     name:'to',
     red:'路由跳转目标，同 vue-router 的 to属性',
     type:'object',
     sel:'_',
     def:'/'
  },
  {
     name:'separator-icon',
     red:'如果设置该属性为 true, 导航将不会留下历史记录',
     type:'boolean',
     sel:'_',
     def:'false'
  }
]
const bdqSlotdata1 = [
  {
    name:'default',
    red:'自定义默认内容'
  }
]
const bdqSlotdata2 = [
  {
    name:'default',
    red:'自定义默认内容'
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