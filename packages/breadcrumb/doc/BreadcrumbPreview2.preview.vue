<!-- <preview>图标分隔符</preview> -->
<template>
  <l-breadcrumb :separatorIcon="ArrowForward">
    <l-breadcrumbitem :to="{ path: '/' }">homepage</l-breadcrumbitem>
    <l-breadcrumbitem
      ><a href="/">promotion management</a></l-breadcrumbitem
    >
    <l-breadcrumbitem>promotion list</l-breadcrumbitem>
    <l-breadcrumbitem>langlangshan</l-breadcrumbitem>
  </l-breadcrumb>
</template>

<script setup lang="ts">
import {ArrowForward} from '@vicons/ionicons5';
</script>
