
export const routers: any = {
	children:[
		{
			path:"/lbutton",
			name:"button 按钮",
			component:()=>import('../../packages/lbutton/doc/doc.md'),
			title:"通用组件"
		},
		{
			path:"/licon",
			name:"icon 图标",
			component:()=>import('../../packages/licon/doc/doc.md'),
			title:"通用组件"
		},{
			path:"/ltable",
			name:"table 表格",
			component:()=>import('../../packages/ltable/doc/doc.md'),
			title:"数据展示型组件"
		},
		{
			path:"/lgrid",
			name:"grid 布局",
			component:()=>import('../../packages/lgrid/doc/doc.md'),
			title:"布局组件"
		},
		{
			path:"/lprogress",
			name:"progress 进度条",
			component:()=>import('../../packages/lprogress/doc/doc.md'),
			title: "反馈型组件"
		},
		{
			path:"/ldivider",
			name:"Divider 分割线",
			component:()=>import('../../packages/ldivider/doc/doc.md'),
			title:"布局组件"
		},
		{
			path:"/linput",
			name:"input 输入框",
			component:()=>import('../../packages/linput/doc/doc.md'),
			title:"数据展示型组件"
		},
		{
			path:"/ltextarea",
			name:"textarea 文本框",
			component:()=>import('../../packages/textarea/doc/doc.md'),
			title:"数据展示型组件"
		},
		{
			path:"/lform",
			name:"from 表单",
			component:()=>import('../../packages/lform/doc/doc.md'),
			title: "数据录入型组件"
		},
		{
			path:"/lselect",
			name:"select 下拉选择器",
			component:()=>import('../../packages/lselect/doc/doc.md'),
			title: "数据录入型组件"
		},
		{
			path:"/lradio",
			name:"radio 单选框",
			component:()=>import('../../packages/lradio/doc/doc.md'),
			title:"数据展示型组件"
		},
		{
			path:"/lswitch",
			name:"switch 开关",
			component:()=>import('../../packages/lswitch/doc/doc.md'),
			title: "数据录入型组件"
		},
		{
			path:"/lupload",
			name:"upload 文件上传",
			component:()=>import('../../packages/lupload/doc/doc.md'),
			title: "数据录入型组件"
		},
		{
			path:"/llist",
			name:"list 列表",
			component:()=>import('../../packages/llist/doc/doc.md'),
			title:"数据展示型组件"
		},
		{
			path:"/lavatar",
			name:"avatar 头像",
			component:()=>import('../../packages/lavatar/doc/doc.md'),
			title:"数据展示型组件"
		},
		{
			path:"/ldialog",
			name:"dialog 对话框",
			component:()=>import('../../packages/ldialog/doc/doc.md'),
			title: "反馈型组件"
		},
		{
			path:"/lbreadcrumb",
			name:"breadcrumb 面包屑",
			component:()=>import('../../packages/breadcrumb/doc/doc.md'),
			title: "导航组件"
		},
		{
			path:"/lmenu",
			name:"menu 菜单",
			component:()=>import('../../packages/menu/doc/doc.md'),
			title: "导航组件"
		},
		{
			path:"/ldrawer",
			name:"drawer 抽屉",
			component:()=>import('../../packages/drawer/doc/doc.md'),
			title: "反馈型组件"
		},
		{
			path:"/ldropdown",
			name:"dropdown 下拉菜单",
			component:()=>import('../../packages/dropDown/doc/doc.md'),
			title: "导航组件"
		},
		{
			path:"/lmessage",
			name:"message 消息",
			component:()=>import('../../packages/message/doc/doc.md'),
			title: "反馈型组件"
		},
		{
			path:"/ldatePicker",
			name:"datePicker 日期选择器",
			component:()=>import('../../packages/ldatePicker/doc/doc.md'),
			title: "数据录入型组件"
		}
	]
}
