<template>
  <div>
    <l-select 
      :options="options"
      v-model="selectValue"
      filedLabel="name"
      filedValue="id"
      @change="change"
    >
    </l-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const state = reactive({
  options:[
    {
      name: '中国',
      id: 'china',
    },
    {
      name: '美国',
      id: 'america',
    },
    {
      name: '日本',
      id: 'japan'
    },
    {
      name: '俄罗斯',
      id: 'russian'
    }
  ]
})
const { options } = state
const selectValue = ref()

const change = (e) => {
  console.log(e)
}



</script>

<style lang="scss" scoped>

</style>