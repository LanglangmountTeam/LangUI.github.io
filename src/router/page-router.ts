import lbuttondoc from '../../packages/lbutton/doc/doc.md';
import licon from '../../packages/licon/doc/doc.md';
import ltable from '../../packages/ltable/doc/doc.md';
import lgrid  from '../../packages/lgrid/doc/doc.md';
import lprogress from '../../packages/lprogress/doc/doc.md';
import ldivider from '../../packages/ldivider/doc/doc.md';
import linput from '../../packages/linput/doc/doc.md';
import ltextarea from '../../packages/textarea/doc/doc.md';
import lform from '../../packages/lform/doc/doc.md';
import lselect from '../../packages/lselect/doc/doc.md';
import lraido from '../../packages/lradio/doc/doc.md';
import lswitch from '../../packages/lswitch/doc/doc.md';
import lupload from '../../packages/lupload/doc/doc.md';
export default[
	{
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
			},{
				path:"ltable",
				name:"table 表格",
				component:ltable,
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
			},
			{
				path:"ldivider",
				name:"Divider 分割线",
				component:ldivider
			},
			{
				path:"linput",
				name:"input 输入框",
				component:linput
			},
			{
				path:"ltextarea",
				name:"textarea 文本框",
				component:ltextarea
			},
			{
				path:"lform",
				name:"from 表单",
				component:lform
			},
			{
				path:"lselect",
				name:"select 下拉选择器",
				component:lselect
			},
			{
				path:"lradio",
				name:"radio 单选框",
				component:lraido
			},
			{
				path:"lswitch",
				name:"switch 开关",
				component:lswitch
			},
			{
				path:"lupload",
				name:"upload 文件上传",
				component:lupload
			}
		]
	}
]