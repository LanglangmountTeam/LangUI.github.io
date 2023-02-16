<template>
	<button @click="tz">点击快速入门</button>
</template>

<script setup lang="ts">
	import {useRouter} from 'vue-router';
	const router=useRouter();
	function tz(){
		router.push({
			path:"/home"
		})
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
</style>