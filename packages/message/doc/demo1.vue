<!-- html -->
<template>
  <div>
    <l-button @click="openMsg">消息提示</l-button>
    <l-button @click="openVNodeMsg">消息提示(VNode)</l-button>
  </div>
</template>

<!-- js -->
<script setup>
import Message from '../index.js' //此处为本地示例，请使用import {Message} from "mzl-ui";引入
import { h } from 'vue'

const openMsg = () => {
  Message({
    text: '默认消息提示'
  })
}

const openVNodeMsg = () => {
  Message({
    text: h('p', null, '默认消息提示(VNode)')
  })
}
</script>
