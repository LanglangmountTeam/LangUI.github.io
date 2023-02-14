<script setup>
    import demo1 from './demo1.vue';
    import demo2 from './demo2.vue';
    import demo3 from './demo3.vue';
    import demo4 from './demo4.vue';
    import DOC from '@/components/docview.vue';
    import codeds from '@/components/codeds.vue';
    const propDoc =  [
  [ "position","自定义图案位置","string","left/center/right","left"],
  ["col", "是否为垂直分割线", "string", "col", "-"],
  ["linestyle", "分割线样式", "string", "solid/dotted/dsahed/groove...", "solid"],
];
</script>
## divider分割线
<div class="height"></div>

#### 基本使用
<div class="height"></div>
<div class="dividermd">
<demo1></demo1>
</div>
<Suspense><codeds compname="ldivider" demoname="demo1"></codeds></Suspense>
<div class="height"></div>

#### 设置分割图案
<div class="height"></div>
<div class="dividermd">
<demo2></demo2>
</div>
<Suspense><codeds compname="ldivider" demoname="demo2"></codeds></Suspense>
<div class="height"></div>

#### 自定义样式
<div class="height"></div>
<div class="dividermd">
<demo3></demo3>
</div>
<Suspense><codeds compname="ldivider" demoname="demo3"></codeds></Suspense>
<div class="height"></div>

#### 垂直分割线
<div class="height"></div>
<div class="dividermd">
<demo4></demo4>
</div>
<Suspense><codeds compname="ldivider" demoname="demo4"></codeds></Suspense>

<div class="height"></div>
<DOC title="属性" type=prop :body="propDoc"></DOC>
<style scoped>
.dividermd{
    border:1px solid #f0f0f0;
    padding:2vw ;
    width:80vw;
}
.height{
    height:2vh;
}
</style>