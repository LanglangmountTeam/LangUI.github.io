<template>
	<div>
		<button :class="lclass">按钮</button>
	</div>
</template>

<script lang="ts">
	export default{
		name:"lbutton"
	}
</script>

<script setup lang="ts">
	import {computed} from 'vue';
	const props=defineProps({
		type:{
			type:String,
			default:"default"
		}
	});
	const lclass=computed(()=>{
		return [
			"lbutton",`lbutton-${props.type}`
		]
	})


</script>
<style>
	button{
		outline: none;
		border: 0;
		background: none;
		cursor: pointer;
	}
	.lbutton{
		padding: 0;
		margin: 0;
		border-radius: 4px;
		border: 1px solid #f0f0f0;
	}
	.lbutton-success{
		background-color: red;
	}
</style>