<template>
	<div class="con">
	<div class="left">
		<template v-for="item in state">
			<div class="dhtitle">{{item.title}}</div>
			<li v-for="(itex,index) in item.list" :class="active === itex.name ? 'active' : '' " :key="index" @click="listClick(itex.path,itex.name)"><p style="font-size: small;">{{itex.name}}</p></li>
		</template>
	</div>
	<div class="right">
		<router-view></router-view>
	</div>
	</div>
</template>

<script setup lang="ts">
import { routers } from '../router/page-router';
import { useRouter } from 'vue-router';
import { ref,reactive, onMounted } from 'vue';

const router = useRouter()
const titleList: any = ref([])
const state: any = reactive([

])


onMounted(() => {
	const title = []
	for(let i = 0; i < routers.children.length; i++) {
		title.push(routers.children[i].title)
	}
	const newTitle = new Set(title)
	titleList.value = [...newTitle]
	for(let i = 0; i < titleList.value.length; i++) {
		state.push({
			title: titleList.value[i],
			list: []
		})
	}


	for(let i = 0; i < routers.children.length; i++) {
		for(let j = 0 ;j < state.length; j ++) {
			if(routers.children[i].title === state[j].title) {
				state[j].list.push({
					name: routers.children[i].name,
					path: routers.children[i].path
				})
			}
		}
	}
})

const active = ref('button 按钮')
const listClick = (path: any, name: string) => {
	router.push(path)
	active.value = name
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
		overflow-y: scroll;
		
	}
	.right{
		flex: 1;
		overflow: hidden;
		padding: 20px;
		height: auto;
		overflow-y: scroll;
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
	.dhtitle{
		color: lightslategrey;
		font-size: small;
		margin: 3vh 2vw;
		border-bottom: 1px solid #f0f0f0;
	}


.left::-webkit-scrollbar {
	/*滚动条整体样式*/
	width: 0.3vw; /*高宽分别对应横竖滚动条的尺寸*/
	height: 1px;
}

.left::-webkit-scrollbar-thumb {
	/*滚动条里面小方块*/
	border-radius: 10px;
	background-color: #a8a7f4;
	background-image: -webkit-linear-gradient(
		45deg,
		rgba(255, 255, 255, 0.2) 25%,
		transparent 25%,
		transparent 50%,
		rgba(255, 255, 255, 0.2) 50%,
		rgba(255, 255, 255, 0.2) 75%,
		transparent 75%,
		transparent
	);
}

.left::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
}


.right::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 0.3vw; /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }

    .right::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      background-color: #f04a30;
      background-image: -webkit-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.2) 75%,
        transparent 75%,
        transparent
      );
    }

.right::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
}

</style>