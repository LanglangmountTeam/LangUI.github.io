<template>
  <l-upload label="上传文件" @beforeChange="beforeChangeClick" @change="changeClick"></l-upload>
</template>

<script lang="ts" setup>

const beforeChangeClick = (e)=> {
  console.log(e, 'beforeChangeClick')
}

const changeClick = (e) => {
  console.log(e, 'changeClick')
}

</script>
