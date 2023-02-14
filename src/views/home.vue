<template>
	<div class="con">
	<div class="left">
		<li v-for="(item,index) in arr1" :key="index" :class="{active:actind==index}" @click="jump(item,index)">
			{{item.name}}
		</li>
	</div>
	<div class="rigth">
		<router-view></router-view>
	</div>
	</div>
</template>

<script setup lang="ts">
	import leftlist from '../router/page-router';
	import {useRouter} from 'vue-router';
	import {ref} from 'vue';
	const arr1:any=[];
	arr1.push(leftlist[0].children[0]);
	arr1.push(leftlist[0].children[1]);
	arr1.push(leftlist[0].children[2]);
	arr1.push(leftlist[0].children[3]);
	arr1.push(leftlist[0].children[4]);
	arr1.push(leftlist[0].children[5]);
	const router=useRouter();
	const actind=ref(0);
	const jump=function(item:any,index:any){
		actind.value=index,
		router.push({
			name:item.name
		})
	}
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