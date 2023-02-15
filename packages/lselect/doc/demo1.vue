<template>
  <div>
    <l-select 
      :options="options"
      @change="change"
      placeholder="请选择"
    >
    </l-select>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  options:[
    {
      label: '中国',
      value: 'china',
      
    },
    {
      label: '美国',
      value: 'america',
    },
    {
      label: '日本',
      value: 'japan',
      disabled: true
    },
    {
      label: '俄罗斯',
      value: 'russian'
    }
  ]
})

const { options } = state

const change = (e) => {
  console.log(e)
}

</script>

<style lang="scss" scoped>

</style>