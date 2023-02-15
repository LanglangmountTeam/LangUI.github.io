<template>
  <l-form
    :model="state"
  >
    <l-form-item 
    >
      <l-input  placeholder="请输入用户名" v-model="state.username"/>
      <template #label>用户名</template>
    </l-form-item>
    <l-form-item 
    >
      <l-input placeholder="请输入密码" type="password"   v-model="state.password"/>
      <template #label>密码</template>
    </l-form-item>
    <lbutton class="btn" type="primary" @click="validateForm" >按钮</lbutton>
  </l-form>

</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { FormInstance } from '../../index';
const state = reactive({
  username: '',
  password: ''
})

const formRef = ref<FormInstance>()

const validateForm = () => {
  console.log(state)
}
</script>

<style scoped>
.l-from-item {
  margin-top: 20px;
}
.btn {
  margin-top: 20px;
}
</style>