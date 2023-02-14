<!-- html -->
<template>
  <l-table :options="options">
    <!-- 自定标表头job(职业)的插槽内容，展示为下拉菜单 -->
    <template #head-job="item">
      <m-dropdown :title="item.scope.title" :options="dorpoptions" @change="dropchange" size="mini"></m-dropdown>
    </template>
    <!-- 自定义id列，插槽名为id，并接受item作为行数据 -->
    <template #id="item">
      <div style="color: #008dff">{{ item.scope.row.id }}</div>
    </template>
    <!-- 自定义操作列，插槽名为action，并接受item作为行数据 (操作类的列固定插槽名为action)-->
    <template #action="item">
      <m-button type="text" leftIcon="m-icon-edit" size="small" :disabled="item.scope.rowIndex % 2 == 0">编辑</m-button>
      <m-button type="text" leftIcon="m-icon-ashbin" style="color: #ec3437" size="small">删除</m-button>
    </template>
  </l-table>
</template>

<!-- js -->
<script setup>
import { reactive } from "vue";
const state = reactive({
  options: {
    fileds: [
      { field: 'id', title: 'ID', align: 'center' },
      { field: 'name', title: '姓名', align: 'center' },
      { field: 'job', title: '职业', align: 'center' },
      { field: 'salary', title: '薪资', align: 'center' },
      { field: 'from', title: '籍贯', align: 'center' },
      {field:'action',title:'操作',align:'center'}
    ],
    datas: [
      { id: 1, name: '张三', job: '前端开发工程师', salary: '18k', from: "北京" },
      { id: 2, name: '李四', job: '后端开发工程师', salary: '18k', from: "上海" },
      { id: 3, name: '王五', job: '前端开发实习生', salary: '9k', from: "深圳" },
      { id: 4, name: '赵六', job: '后端开发实习生', salary: '9k', from: "杭州" },
    ]
  },
  dorpoptions: [
    { label: "前端开发工程师", icon: "m-icon-file" },
    { label: "后端开发工程师", icon: "m-icon-keyboard-9" },
    { label: "前端开发实习生", icon: "m-icon-link" },
    { label: "后端开发实习生", icon: "m-icon-file" },
  ],
});
const dropchange = (item, index) => {
  console.log(item, index);
};
const { options, dorpoptions } = state;
</script>