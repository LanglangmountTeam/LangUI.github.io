import index from '../views/index.vue';
import home from '../views/home.vue';
import lbuttondoc from '../../packages/lbutton/doc/doc.md';
import licon from '../../packages/licon/doc/doc.md';
import ltable from '../../packages/ltable/doc/doc.md';
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
				path:"ltable",
				name:"表格",
				component:ltable,
			}
		]
	}
]