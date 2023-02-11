基本使用
<br/>

简单的自适应布局。Lgrid 基本使用，将每一行平均分为 24 列。

<br/>

<script setup>
    import demo1 from './demo1.vue';
     import demo2 from './demo2.vue';
     import DOC from '@/components/docview.vue';
     const propDoc =  [
  [ "span","占用行数","Number","1-24","24"],
  ["offset", "列偏移量", "Number", "-", "0"],
];
</script>

<div class="llayout-demo1">
<demo1></demo1>
</div>

<br/>

位置偏移
<br/>

通过 _offset_ 设置偏移占用指定的列数。

<br/>
<div class="llayout-demo1">
<demo2></demo2>
</div>

<br/>

<div>
<DOC title="属性" type=prop :body="propDoc"></DOC>
</div>
<style scoped>
.llayout-demo1{
    border:1px solid #f0f0f0;
    padding:1vw;
    width:85vw;
}
</style>