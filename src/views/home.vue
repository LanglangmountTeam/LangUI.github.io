<template>
	<div class="con">
	<div class="left">
		<li v-for="(item,index) in leftlist[1].children" :key="index" :class="{active:actind==index}" @click="jump(item,index)">
			{{item.name}}
		</li>
	</div>
	<div class="rigth">
		<router-view></router-view>
	</div>
	</div>
</template>

<script setup>
	import leftlist from '../router/page-router.ts';
	import {useRouter} from 'vue-router';
	import {ref} from 'vue';
	const router=useRouter();
	const actind=ref(0);
	const jump=function(item,index){
		actind.value=index,
		router.push({
			name:item.name
		})
	}
	// console.log(leftlist[1].children);
</script>

<style>
	.con{
		width: 100vw;
		height: 100vh;
		display: flex;
	}
	.left{
		width: 15vw;
		height: auto;
		border: 1px solid #f0f0f0;
		overflow-y: auto;
	}
	.rigth{
		flex: 1;
		margin-top: 10px;
		margin-left: 10px;
		height: auto;
		overflow-y: auto;
		box-sizing: border-box;
	}
	li{
		list-style-type: none;
		line-height: 5vh;
		padding: 0 1vw;
		cursor: pointer;
	}
	li.active{
		border-right:0.3vw solid #0e80eb;
		color: #0e80eb;
		background-color: aliceblue;
	}
</style>