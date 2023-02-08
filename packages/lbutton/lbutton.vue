<template>
	<div class="btncon">
		<button :class="lclass"><slot><span></span></slot></button>
	</div>
</template>

<script lang="ts">
	export default{
		name:"lbutton"
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
			tsy:Boolean,
			default:false
		},
		icon:{
			icon:Boolean,
			default:false
		}
	});
	const lclass=computed(()=>{
		return [
			"lbutton",`lbutton-${props.type}`,props.round?"lbutton-round":"",props.tsy?`lbutton-tsy`:"",props.icon?"lbutton-icon":""
		]
	});


</script>
<style lang="scss">
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
			border-radius: 50%;
			background-image: url(./btnimg/btnicon2.png);
			background-size: 1vw;
			background-repeat: no-repeat;
			background-position:center;
		};
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
		}
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
		}
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
		}
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
		}
	}
	.lbutton-default{
		border: 1px solid #f0f0f0;
		background: none;
		&.lbutton-tsy{
			border: 1px dashed $info;
			background-color: white;
			color: $info;
			&:hover{
				background-color: #f0f0f0;
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
		}
	}
	.btncon{
		display: inline-block;
	}
	.lbutton-round{
		border-radius: 3vh;
	}
</style>