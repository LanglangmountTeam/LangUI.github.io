<template>
	<Icon :color="color" :size="size" class="ico" :style="{opacity:`${del/10}`}"><slot></slot></Icon>
</template>

<script lang="ts">
	export default{
		name:"licon"
	}
	
</script>

<script lang="ts" setup>
import { useAttrs,computed } from "vue";
import { Icon } from '@vicons/utils';
const props=defineProps({
	color:{
		color:String,
		default:""
	},
	size:{
		size:Number,
		default:""
	},
	del:{
		del:Number,
		default:10
	}
})
const color=computed(()=>{
	return props.color
});
const size=computed(()=>{
	return props.size?props.size:""
});
const del=computed(()=>{
	return props.del?props.del:10
});
const attrs = useAttrs();
</script>
<style>
.ico{
	margin-right: 1vw;
}
</style>
