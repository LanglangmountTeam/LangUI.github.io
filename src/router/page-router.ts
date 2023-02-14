import index from "../views/index.vue";
import home from "../views/home.vue";
import lbuttondoc from "../../packages/lbutton/doc/doc.md";
import licon from "../../packages/licon/doc/doc.md";
import drawer from "../../packages/drawer/doc/doc.md";
import lmessage from "../../packages/message/doc/doc.md";
import ldropdown from "../../packages/dropDown/doc/doc.md";
import ltable from "../../packages/ltable/doc/doc.md";
import lgrid from "../../packages/lgrid/doc/doc.md";
import lprogress from "../../packages/lprogress/doc/doc.md";
import ldivider from "../../packages/ldivider/doc/doc.md";
import lbreadcyumb from "../../packages/breadcrumb/doc/doc.md";
import lmenu from "../../packages/menu/doc/doc.md";
export default [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/home",
    name: "home",
    component: home,
    children: [
      {
        path: "",
        name: "button 按钮",
        component: lbuttondoc,
      },
      {
        path: "licon",
        name: "icon 图标",
        component: licon,
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
      {
        path: "ltable",
        name: "表格",
        component: ltable,
      },
      {
        path: "lgrid",
        name: "grid 布局",
        component: lgrid,
      },
      {
        path: "lprogress",
        name: "progress 进度条",
        component: lprogress,
      },
      {
        path: "ldivider",
        name: "Divider 分割线",
        component: ldivider,
      },
      {
        path: "lbreadcrumb",
        name: "Breadcrumb 面包屑",
        component: lbreadcyumb,
      },
      {
        path: "lmenu",
        name: "Menu 菜单",
        component: lmenu,
      },
    ],
  },
];
