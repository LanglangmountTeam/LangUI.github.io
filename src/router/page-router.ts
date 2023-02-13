import index from '../views/index.vue';
import home from '../views/home.vue';
import lbuttondoc from '../../packages/lbutton/doc/doc.md';
import licon from '../../packages/licon/doc/doc.md';
import drawer from "../../packages/drawer/doc/doc.md";
import lmessage from "../../packages/message/doc/doc.md";
import ldropdown from "../../packages/dropDown/doc/doc.md";
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
				name:"按钮",
				component:lbuttondoc,
			},
			{
				path:"licon",
				name:"图标",
				component:licon,
			},
			{
				path: "drawer",
				name: "抽屉",
				component: drawer,
			},
			{
				path: "message",
				name: "消息",
				component: lmessage,
			},
			{
				path: "dropdown",
				name: "下拉菜单",
				component: ldropdown,
			},
		]
	}
]