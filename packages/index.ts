import { App } from "vue";
import lbutton from './lbutton/lbutton.vue';
import licon from './licon/licon.vue';
import lgrid from './lgrid/lgrid.vue';
import mrow from './lgrid/mrow.vue';
const allcom=[
	lbutton,
	licon,
	lgrid,
	mrow
]

const recom =function(app:App){
	for(const allco of allcom){
		app.component(allco.name,allco)
	}
};
export {lbutton,licon,lgrid,mrow};
export default recom;