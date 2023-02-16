<template>
	<div class="con">
	<div class="left">
		<div class="dhtitle">通用组件</div>
		<li data-index=0 data-name='button 按钮' @click="jump($event)" :class="li0" data-status=false><p style="font-size: small;">{{ arr1[0].name }}</p></li>
		<li data-index=1 data-name='icon 图标' @click="jump($event)" :class="li1" data-status=false><p style="font-size: small;">{{ arr1[1].name }}</p></li>
		<div class="dhtitle">布局组件</div>
		<li data-index=5 data-name='Divider 分割线' @click="jump($event)" :class="li5" data-status=false><p style="font-size: small;">{{ arr1[5].name }}</p></li>
		<li data-index=3 data-name='grid 布局' @click="jump($event)" :class="li3" data-status=false><p style="font-size: small;">{{ arr1[3].name }}</p></li>
		<div class="dhtitle">导航组件</div>
		<li data-index=16 data-name='breadcrumb 面包屑' @click="jump($event)" :class="li16" data-status=false><p style="font-size: small;">{{ arr1[16].name }}</p></li>
		<li data-index=17 data-name='menu 菜单' @click="jump($event)" :class="li17" data-status=false><p style="font-size: small;">{{ arr1[17].name }}</p></li>
		<li data-index=19 data-name='dropdown 下拉菜单' @click="jump($event)" :class="li19" data-status=false><p style="font-size: small;">{{ arr1[19].name }}</p></li>
		<div class="dhtitle">数据录入型组件</div>
		<li data-index=8 data-name='from 表单' @click="jump($event)" :class="li8" data-status=false><p style="font-size: small;">{{ arr1[8].name }}</p></li>
		<li data-index=11 data-name='switch 开关' @click="jump($event)" :class="li11" data-status=false><p style="font-size: small;">{{ arr1[11].name }}</p></li>
		<li data-index=12 data-name='upload 文件上传' @click="jump($event)" :class="li12" data-status=false><p style="font-size: small;">{{ arr1[12].name }}</p></li>
		<li data-index=9 data-name='select 下拉选择器' @click="jump($event)" :class="li9" data-status=false><p style="font-size: small;">{{ arr1[9].name }}</p></li>
		<div class="dhtitle">数据展示型组件</div>
		<li data-index=14 data-name='avatar 头像' @click="jump($event)" :class="li14" data-status=false><p style="font-size: small;">{{ arr1[14].name }}</p></li>
		<li data-index=13 data-name='list 列表' @click="jump($event)" :class="li13" data-status=false><p style="font-size: small;">{{ arr1[13].name }}</p></li>
		<li data-index=2 data-name='table 表格' @click="jump($event)" :class="li2" data-status=false><p style="font-size: small;">{{ arr1[2].name }}</p></li>
		<li data-index=6 data-name='input 输入框' @click="jump($event)" :class="li6" data-status=false><p style="font-size: small;">{{ arr1[6].name }}</p></li>
		<li data-index=10 data-name='radio 单选框' @click="jump($event)" :class="li10" data-status=false><p style="font-size: small;">{{ arr1[10].name }}</p></li>
		<li data-index=7 data-name='textarea 文本框' @click="jump($event)" :class="li7" data-status=false><p style="font-size: small;">{{ arr1[7].name }}</p></li>
		<div class="dhtitle">反馈型组件</div>

		
		<li data-index=4 data-name='progress 进度条' @click="jump($event)" :class="li4" data-status=false><p style="font-size: small;">{{ arr1[4].name }}</p></li>
		
	

		
	
		

		<li data-index=15 data-name='dialog 对话框' @click="jump($event)" :class="li15" data-status=false><p style="font-size: small;">{{ arr1[15].name }}</p></li>
		
		<li data-index=18 data-name='drawer 抽屉' @click="jump($event)" :class="li18" data-status=false><p style="font-size: small;">{{ arr1[18].name }}</p></li>
		
		<li data-index=20 data-name='message 消息' @click="jump($event)" :class="li20" data-status=false><p style="font-size: small;">{{ arr1[20].name }}</p></li>
	</div>
	<div class="right">
		<router-view></router-view>
	</div>
	</div>
</template>

<script setup lang="ts">
	import leftlist from '../router/page-router';
	import {useRouter} from 'vue-router';
	import {ref,computed,} from 'vue';
	const arr1:any=[];
	arr1.push(leftlist[0].children[0]);
	arr1.push(leftlist[0].children[1]);
	arr1.push(leftlist[0].children[2]);
	arr1.push(leftlist[0].children[3]);
	arr1.push(leftlist[0].children[4]);
	arr1.push(leftlist[0].children[5]);
	arr1.push(leftlist[0].children[6]);
	arr1.push(leftlist[0].children[7]);
	arr1.push(leftlist[0].children[8]);
	arr1.push(leftlist[0].children[9]);
	arr1.push(leftlist[0].children[10]);
	arr1.push(leftlist[0].children[11]);
	arr1.push(leftlist[0].children[12]);
	arr1.push(leftlist[0].children[13]);
	arr1.push(leftlist[0].children[14]);
	arr1.push(leftlist[0].children[15]);
	arr1.push(leftlist[0].children[16]);
	arr1.push(leftlist[0].children[17]);
	arr1.push(leftlist[0].children[18]);
	arr1.push(leftlist[0].children[19]);
	arr1.push(leftlist[0].children[20]);
	console.log(leftlist)
	const router=useRouter();
	const actind=ref(0);
	let sta:boolean;
	const li0=computed(()=>{if(actind.value==0){return "active"}})
	const li1=computed(()=>{if(actind.value==1){return "active"}})
	const li2=computed(()=>{if(actind.value==2){return "active"}})
	const li3=computed(()=>{if(actind.value==3){return "active"}})
	const li4=computed(()=>{if(actind.value==4){return "active"}})
	const li5=computed(()=>{if(actind.value==5){return "active"}})
	const li6=computed(()=>{if(actind.value==6){return "active"}})
	const li7=computed(()=>{if(actind.value==7){return "active"}})
	const li8=computed(()=>{if(actind.value==8){return "active"}})
	const li9=computed(()=>{if(actind.value==9){return "active"}})
	const li10=computed(()=>{if(actind.value==10){return "active"}})
	const li11=computed(()=>{if(actind.value==11){return "active"}})
	const li12=computed(()=>{if(actind.value==12){return "active"}})
	const li13=computed(()=>{if(actind.value==13){return "active"}})
	const li14=computed(()=>{if(actind.value==14){return "active"}})
	const li15=computed(()=>{if(actind.value==15){return "active"}})
	const li16=computed(()=>{if(actind.value==16){return "active"}})
	const li17=computed(()=>{if(actind.value==17){return "active"}})
	const li18=computed(()=>{if(actind.value==18){return "active"}})
	const li19=computed(()=>{if(actind.value==19){return "active"}})
	const li20=computed(()=>{if(actind.value==20){return "active"}})
	const jump=function(event: any){
		for(let i=0;i<=20;i++){event.currentTarget.dataset.status=false};
		event.currentTarget.dataset.status=true;
		sta=event.currentTarget.dataset.status;
		actind.value=event.currentTarget.dataset.index,
		router.push({
			name:event.currentTarget.dataset.name,
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