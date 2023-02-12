import index from '../views/index.vue';
import home from '../views/home.vue';
import lbuttondoc from '../../packages/lbutton/doc/doc.md';
import licon from '../../packages/licon/doc/doc.md';
import linput from '../../packages/linput/doc/doc.md';
import ltextarea from '../../packages/textarea/doc/doc.md'
import lform from '../../packages/lform/doc/doc.md'
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
				path:"linput",
				name:"输入框",
				component:linput
			},
			{
				path:"ltextarea",
				name:"文本框",
				component:ltextarea
			},
			{
				path:"lform",
				name:"表单",
				component:lform
			}
		]
	}
]