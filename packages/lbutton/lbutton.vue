<template>
	<div class="btncon">
		<button :class="lclass"><slot><span></span></slot></button>
	</div>
</template>

<script lang="ts">
	export default{
		name:"l-button"
	}
</script>

<script setup lang="ts">
	import {computed,ref} from 'vue';
	const props=defineProps({
		type:{
			type:String,
			default:"default"
		},
		round:Boolean,
		tsy:{
			type:Boolean,
			default:false
		},
		icon:{
			type:Boolean,
			default:false
		},
		sizes:{
			type:String,
			default:""
		},
		dis:{
			type:Boolean,
			default:false
		}
	});
	const lclass=computed(()=>{
		return [
			"lbutton",`lbutton-${props.type}`,
			props.round?"lbutton-round":"",
			props.tsy?`lbutton-tsy`:"",
			props.icon?"lbutton-icon":"",
			`lbutton-sizes-${props.sizes}`,
			props.dis?"dis":""
		]
	});


</script>
<style lang="scss" scoped>
	button{
		outline: none;
		border: 0;
		background: none;
		cursor: pointer;
	}
	.lbutton{
		padding: 2vh 3vw;
		margin: 0;
		border-radius: 4px;
		border: 1px solid #f0f0f0;
		margin-left: 1vw;
		&:hover,&:focus{
			opacity: .8;
		}
	}
	.lbutton-success{
		color: white;
		background:$success;
		background-color:$success;
		&.lbutton-tsy{
			border: 1px dashed $info;
			background-color: white;
			color: $success;
			&:hover{
				background-color: $success;
				color: white;
				opacity: .8;
			}
		};
		&.lbutton-icon{
			width: 3vw;
			height: 3vw;
			padding: 0;
			border-radius:50%;
			background-image: url(./btnimg/btnicon2.png);
			background-size: 1vw;
			background-repeat: no-repeat;
			background-position:center;
		};
		&.lbutton-sizes-small{padding: 0;width: 5vw;height: 4vh;};
		&.lbutton-sizes-big{width: 12vw;height: 10vh;};
		&.dis{cursor: not-allowed;opacity: .5;}
	}
	.lbutton-primary{
		color: white;
		background:$primary;
		background-color:$primary;
		&.lbutton-tsy{
			border: 1px dashed $primary;
			background-color: white;
			color: $primary;
			&:hover{
				background-color: $primary;
				color: white;
			}
		};
		&.lbutton-icon{
			width: 3vw;
			height: 3vw;
			padding: 0;
			border-radius: 50%;
			background-image: url(./btnimg/btnicon2.png);
			background-size: 1vw;
			background-repeat: no-repeat;
			background-position:center;
		};
		&.lbutton-sizes-small{padding: 0;width: 5vw;height: 4vh;};
		&.lbutton-sizes-big{width: 12vw;height: 10vh;};
		&.dis{cursor: not-allowed;opacity: .5;}
	}
	.lbutton-warning{
		color: white;
		background:$warning;
		background-color:$warning;
		&.lbutton-tsy{
			border: 1px dashed $warning;
			background-color: white;
			color: $warning;
			&:hover{
				background-color: $warning;
				color: white;
			}
		};
		&.lbutton-icon{
			width: 3vw;
			height: 3vw;
			padding: 0;
			border-radius: 50%;
			background-image: url(./btnimg/btnicon2.png);
			background-size: 1vw;
			background-repeat: no-repeat;
			background-position:center;
		};
		&.lbutton-sizes-small{padding: 0;width: 5vw;height: 4vh;};
		&.lbutton-sizes-big{width: 12vw;height: 10vh;};
		&.dis{cursor: not-allowed;opacity: .5;}
	}
	.lbutton-danger{
		color: white;
		background:$danger;
		background-color:$danger;
		&.lbutton-tsy{
			background-color: white;
			color: $danger;
			border: 1px dashed $danger;
			&:hover{
				background-color: $danger;
				color: white;
			}
		};
		&.lbutton-icon{
			width: 3vw;
			height: 3vw;
			padding: 0;
			border-radius: 50%;
			background-image: url(./btnimg/btnicon2.png);
			background-size: 1vw;
			background-repeat: no-repeat;
			background-position:center;
		};
		&.lbutton-sizes-small{padding: 0;width: 5vw;height: 4vh;};
		&.lbutton-sizes-big{width: 12vw;height: 10vh;};
		&.dis{cursor: not-allowed;opacity: .5;}
	}
	.lbutton-info{
		color: white;
		background-color:$info;
		&.lbutton-tsy{
			border: 1px dashed $info;
			background-color: white;
			color: $info;
			&:hover{
				background-color: $info;
				color: white;
			}
		};
		&.lbutton-icon{
			width: 3vw;
			height: 3vw;
			padding: 0;
			border-radius: 50%;
			background-image: url(./btnimg/btnicon2.png);
			background-size: 1vw;
			background-repeat: no-repeat;
			background-position:center;
		};
		&.lbutton-sizes-small{padding: 0;width: 5vw;height: 4vh;};
		&.lbutton-sizes-big{width: 12vw;height: 10vh;};
		&.dis{cursor: not-allowed;opacity: .5;}
	}
	.lbutton-default{
		border: 1px solid $info;
		background: none;
		&.lbutton-tsy{
			border: 1px dashed $info;
			background-color: white;
			color: $info;
			&:hover{
				background-color: #f0f0f0;
				color: black;
			}
		};
		&.lbutton-icon{
			width: 3vw;
			height: 3vw;
			padding: 0;
			border-radius: 50%;
			background-image: url(./btnimg/btnicon1.png);
			background-size: 1vw;
			background-repeat: no-repeat;
			background-position:center;
		};
		&.lbutton-sizes-small{padding: 0;width: 5vw;height: 4vh;};
		&.lbutton-sizes-big{width: 12vw;height: 10vh;};
		&.dis{cursor: not-allowed;opacity: .5;}
	}
	.btncon{
		display: inline-block;
	}
	.lbutton-round{
		border-radius: 3vh;
	}
</style>