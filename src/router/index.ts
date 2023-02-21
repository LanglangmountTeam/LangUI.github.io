import {createRouter,createWebHashHistory} from 'vue-router';

import index from '../views/index.vue';
import home from '../views/home.vue';
import { routers } from './page-router'
const history=createWebHashHistory();

interface routerType {}

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
			redirect: '/install',
			children: routers.children,
			
		},
		{
			path:"/md",
			name: "md",
			component:() => import('../../README.md')
		}
	]
});
export default router;