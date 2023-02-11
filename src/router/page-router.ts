import index from '../views/index.vue';
import home from '../views/home.vue';
import lbuttondoc from '../../packages/lbutton/doc/doc.md';
import licon from '../../packages/licon/doc/doc.md';
import lgrid  from '../../packages/lgrid/doc/doc.md';
import lprogress from '../../packages/lprogress/doc/doc.md';
export default[
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
				component:lbuttondoc,
			},
			{
				path:"licon",
				name:"icon 图标",
				component:licon,
			},
			{
				path:"lgrid",
				name:"grid 布局",
				component:lgrid,
			},
			{
				path:"lprogress",
				name:"progress 进度条",
				component:lprogress,
			}
		]
	}
]