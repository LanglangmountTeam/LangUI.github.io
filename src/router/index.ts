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
					name:"表格",
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
				}
			]
		}
	]
});
export default router;