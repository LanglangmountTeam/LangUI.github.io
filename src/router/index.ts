import {createRouter,createWebHashHistory} from 'vue-router';
import pagerouter from './page-router.ts';
const history=createWebHashHistory();
const router=createRouter({
	history,
	routes:[
		...pagerouter
	]
});
export default router;