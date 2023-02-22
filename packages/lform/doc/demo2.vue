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
      hideRequiredAsterisk
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
    <template #default = {context}>
      <l-input :context="context" placeholder="请输入用户名" v-model="state.username"/>
    </template>
      <template #label>用户名</template>
      
    </l-form-item>

    <l-form-item 
      prop="password" 
      labelWidth="80px"
      hideRequiredAsterisk
      labelPosition="start"
      :rules="[
        {
          required: true, 
          message: '请输入密码', 
          trigger: 'blur'
        }
      ]"
    >
      <template #default = {context}>
        <l-input :context="context"  placeholder="请输入密码" type="password" showpwd v-model="state.password"/>
      </template>
      
      <template #label>密码</template>
      
    </l-form-item>
    <l-switch class="item" v-model="switchVal" @change="switchChange"></l-switch>
    <l-radio
      class="item"
      v-model="radioVal"
      :options="state.radioOptions"
      @change="radioChange"
    ></l-radio>
    <l-button class="item" type="primary" @click="validateForm" >按钮</l-button>
  </l-form>

</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
const radioVal = ref("python");
const switchVal = ref(false);
const state = reactive({
  username: '',
  password: '',
  radioOptions: [
    { label: "java编程", value: "java" },
    { label: "js编程", value: "js" },
    { label: "php编程", value: "php" },
    { label: "python编程", value: "python" },
  ],
})

const formRef = ref()

const validateForm = () => {
  const form = formRef.value
  form?.validate((valid, errors) => {
    console.log(valid, errors)
  })
}

const radioChange = (e) => {
  console.log(e.value, e.index);
};

const switchChange = (e) => {
  console.log(e);
};

</script>

<style scoped>
.l-from-item {
  margin-top: 20px;
}
.item {
  margin-top: 20px;
}
</style>