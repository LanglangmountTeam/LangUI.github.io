<template>
	<div class="con">
	<div class="nb">
		<div class="nb-Nb">
		   <div class="iconNb" @click="jumpindex">
			<img src="@/assets/img/logo.jpg">
			<div class="iconNbp">LANG-UI</div>
		   </div>
		   <div class="left-itm"> 
		        <div class="itemNb" @click="jump1()"  :class="itemNbsta1">首页</div>
		        <div class="itemNb" @click="jump2()"  :class="itemNbsta2">组件</div>
	        </div>
		</div>
	</div>
	<div class="left">
		<div v-for="item in state">
			<div class="dhtitle">{{item.title}}</div>
			<li v-for="(itex,index) in item.list" :class="active === itex.name ? 'active' : '' " :key="index" @click="listClick(itex.path,itex.name)"><p style="font-size: 12px;">{{itex.name}}</p></li>
		</div>
	</div>
	<div class="right">
		<router-view></router-view>
	</div>
	</div>
</template>

<script setup lang="ts">
import { routers } from '../router/page-router';
import { useRouter } from 'vue-router';
import { ref,reactive, onMounted ,computed} from 'vue';

const router = useRouter()
const titleList: any = ref([])
const state: any = reactive([

])
const jumpindex=function(){
	router.push({
		path:'/'
	})
}
let itemNbsta1=computed(()=>{
	if(sss1.value==true){return 'irmNbactive'}
})
let itemNbsta2=computed(()=>{
	if(sss2.value==true){return 'irmNbactive'}
})
let sss1=ref(false);
let sss2=ref(true);
const jump1=function(){
	sss2.value=false,
	router.push({
		path:'/'
	})
}
const jump2=function(){
	sss1.value=false,
	sss2.value=true,
	router.push({
		path:'/home'
	})
}
onMounted(() => {
	const title = []
	for(let i = 0; i < routers.children.length ; i++) {
		title.push(routers.children[i].title)
	}
	const newTitle = new Set(title)
	titleList.value = [...newTitle]
	for(let i = 0; i < titleList.value.length ; i++) {
		state.push({
			title: titleList.value[i],
			list: []
		})
	}


	for(let i = 0; i < routers.children.length ; i++) {
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

<style lang="scss" scoped>
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
		border-top: none;
		margin-top: 10vh;
		
	}
	.right{
		flex: 1;
		padding: 20px 20px;
		overflow: hidden;
		padding: 20px 40;
		height: auto;
		overflow-y: scroll;
		margin-top: 10vh;
	}
	li{
		list-style-type: none;
		line-height: 5vh;
		padding: 0 1vw;
		cursor: pointer;
		&:hover {
			color: #0e80eb;
		}
	}
	li.active{
		border-right:0.3vw solid #0e80eb;
		color: #0e80eb;
		background-color: aliceblue;
	}
	.dhtitle{
		color: lightslategrey;
		font-size: small;
		margin: 3vh 1vw;
		border-bottom: 1px solid #f0f0f0;
	}


.left::-webkit-scrollbar {
	/*滚动条整体样式*/
	width: 0.2vw; /*高宽分别对应横竖滚动条的尺寸*/
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
.nb{
	height:8vh;
	box-shadow: 0 0.5vh 1vh #f0f0f0;
	position: fixed;
	width: 100vw;
	margin: 0;
}
.nb-Nb{
	width: 100%;
	height: 8vh;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.left-itm{
	display: flex;
	flex-direction: row;
	margin-right: 4vw;
}
.iconNb{
	margin-left: 1vw;
	display: flex;
	flex-direction: row;
	cursor: pointer;
}
.iconNbp{
	margin-left: 0.5vw;
	line-height: 4vh;
}
img{
	width: 3vw;
	height: 4vh;
}
.itemNb{
	margin-right: 3vw;
	cursor: pointer;
}
.irmNbactive{
	border-bottom:0.3vw solid #0e80eb;
	color: #0e80eb;
	background-color: white;
}
</style>
