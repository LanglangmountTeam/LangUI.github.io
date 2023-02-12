<template>
  <l-form
    :model="state"
    ref="formRef"
    :rules="{
      username:{
        min: 6,
        max: 10,
        message: '用户名至少6-10位',
        trigger: ['change', 'blur']
      },
      password: {
        min: 10,
        max: 15,
        message: '用户名至少10-15位',
        trigger: ['change', 'blur']
      }
    }"
  >
    <l-form-item 
      prop="username" 
      labelWidth="80px"
      labelPosition="start"
      :rules="[
        {
          required: true, 
          message: '请输入用户名', 
          trigger: 'blur'
        }
      ]"
    >
      <l-input  placeholder="请输入用户名" v-model="state.username"/>
      <template #label>用户名</template>
      
    </l-form-item>

    <l-form-item 
      prop="password" 
      labelWidth="80px"
      hideRequiredAsterisk
      :rules="[
        {
          required: true, 
          message: '请输入密码', 
          trigger: 'blur'
        }
      ]"
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
  const form = formRef.value
  form?.validate((valid, errors) => {
    console.log(valid, errors)
  })
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