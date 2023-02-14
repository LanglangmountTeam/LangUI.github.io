<!-- html -->
<template>
  <l-table :options="options" :headStyle="headStyle" :rowStyle="rowStyle" size="small"></l-table>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const state = reactive({
  options: {
    fileds: [
      { field: 'id', title: 'ID', align: 'center' },
      { field: 'name', title: '姓名', align: 'center' },
      { field: 'job', title: '职业', align: 'center' },
      { field: 'salary', title: '薪资', align: 'center' },
      { field: 'from', title: '籍贯', align: 'center' }
    ],
    datas: [
      { id: 1, name: '张三', job: '前端开发工程师', salary: '18k', from: "北京" },
      { id: 2, name: '李四', job: '后端开发工程师', salary: '18k', from: "上海" },
      { id: 3, name: '王五', job: '前端开发实习生', salary: '9k', from: "深圳" },
      { id: 4, name: '赵六', job: '后端开发实习生', salary: '9k', from: "杭州" },
    ],
  },
  headStyle: {
    color: "#0e80eb",
    borderColor: "#f0f3fa",
    backgroundColor: "#f0f8ff",
  },
  rowStyle: {
    borderColor: "#f0f3fa",
  },
});
const { options, headStyle, rowStyle } = state;
</script>