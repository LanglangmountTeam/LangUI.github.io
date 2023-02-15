<template>
  <div>
    <l-select 
      :options="options"
      placeholder="禁用状态"
      disabled
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


</script>

<style lang="scss" scoped>

</style>