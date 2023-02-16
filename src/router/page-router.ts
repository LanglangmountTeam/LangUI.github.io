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
import llist from '../../packages/llist/doc/doc.md';
import lavatar from '../../packages/lavatar/doc/doc.md';
import ldialog from '../../packages/ldialog/doc/doc.md';
import ldrawer from "../../packages/drawer/doc/doc.md";
import lmessage from "../../packages/message/doc/doc.md";
import ldropdown from "../../packages/dropDown/doc/doc.md";
import lbreadcrumb from "../../packages/breadcrumb/doc/doc.md";
import lmenu from "../../packages/menu/doc/doc.md";

export const routers: any = {
	children:[
		{
			path:"/lbutton",
			name:"button 按钮",
			component:lbuttondoc,
			title:"通用组件"
		},
		{
			path:"/licon",
			name:"icon 图标",
			component:licon,
			title:"通用组件"
		},{
			path:"/ltable",
			name:"table 表格",
			component:ltable,
			title:"数据展示型组件"
		},
		{
			path:"/lgrid",
			name:"grid 布局",
			component:lgrid,
			title:"布局组件"
		},
		{
			path:"/lprogress",
			name:"progress 进度条",
			component:lprogress,
			title: "反馈型组件"
		},
		{
			path:"/ldivider",
			name:"Divider 分割线",
			component:ldivider,
			title:"布局组件"
		},
		{
			path:"/linput",
			name:"input 输入框",
			component:linput,
			title:"数据展示型组件"
		},
		{
			path:"/ltextarea",
			name:"textarea 文本框",
			component:ltextarea,
			title:"数据展示型组件"
		},
		{
			path:"/lform",
			name:"from 表单",
			component:lform,
			title: "数据录入型组件"
		},
		{
			path:"/lselect",
			name:"select 下拉选择器",
			component:lselect,
			title: "数据录入型组件"
		},
		{
			path:"/lradio",
			name:"radio 单选框",
			component:lraido,
			title:"数据展示型组件"
		},
		{
			path:"/lswitch",
			name:"switch 开关",
			component:lswitch,
			title: "数据录入型组件"
		},
		{
			path:"/lupload",
			name:"upload 文件上传",
			component:lupload,
			title: "数据录入型组件"
		},
		{
			path:"/llist",
			name:"list 列表",
			component:llist,
			title:"数据展示型组件"
		},
		{
			path:"/lavatar",
			name:"avatar 头像",
			component:lavatar,
			title:"数据展示型组件"
		},
		{
			path:"/ldialog",
			name:"dialog 对话框",
			component:ldialog,
			title: "反馈型组件"
		},
		{
			path:"/lbreadcrumb",
			name:"breadcrumb 面包屑",
			component:lbreadcrumb,
			title: "导航组件"
		},
		{
			path:"/lmenu",
			name:"menu 菜单",
			component:lmenu,
			title: "导航组件"
		},
		{
			path:"/ldrawer",
			name:"drawer 抽屉",
			component:ldrawer,
			title: "反馈型组件"
		},
		{
			path:"/ldropdown",
			name:"dropdown 下拉菜单",
			component:ldropdown,
			title: "导航组件"
		},
		{
			path:"/lmessage",
			name:"message 消息",
			component:lmessage,
			title: "反馈型组件"
		},
	]
}
