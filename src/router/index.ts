import {createRouter,createWebHashHistory} from 'vue-router';
import index from '../views/index.vue';
import home from '../views/home.vue';
const history=createWebHashHistory();
const router=createRouter({
	history,
	routes:[
		{
			path:"/",
			name:"index",
			component:index,
		},
		{
			path:"/home",
			name:"home",
			component:home,
			children:[
				{
					path:"",
					name:"button 按钮",
					component:()=>import('../../packages/lbutton/doc/doc.md'),
				},
				{
					path:"licon",
					name:"icon 图标",
					component:()=>import('../../packages/licon/doc/doc.md'),
				},{
					path:"ltable",
					name:"table 表格",
					component:()=>import('../../packages/ltable/doc/doc.md'),
				},
				{
					path:"lgrid",
					name:"grid 布局",
					component:()=>import('../../packages/lgrid/doc/doc.md'),
				},
				{
					path:"lprogress",
					name:"progress 进度条",
					component:()=>import('../../packages/lprogress/doc/doc.md'),
				},
				{
					path:"ldivider",
					name:"Divider 分割线",
					component:()=>import('../../packages/ldivider/doc/doc.md')
				},
				{
					path:"linput",
					name:"input 输入框",
					component:()=>import('../../packages/linput/doc/doc.md')
				},
				{
					path:"ltextarea",
					name:"textarea 文本框",
					component:()=>import('../../packages/textarea/doc/doc.md')
				},
				{
					path:"lform",
					name:"from 表单",
					component:()=>import('../../packages/lform/doc/doc.md')
				},
				{
					path:"lselect",
					name:"select 下拉选择器",
					component:()=>import('../../packages/lselect/doc/doc.md')
				},
				{
					path:"lradio",
					name:"radio 单选框",
					component:()=>import('../../packages/lradio/doc/doc.md')
				},
				{
					path:"lswitch",
					name:"switch 开关",
					component:()=>import('../../packages/lswitch/doc/doc.md')
				},
				{
					path:"lupload",
					name:"upload 文件上传",
					component:()=>import('../../packages/lupload/doc/doc.md')
				}
			]
		}
	]
});
export default router;