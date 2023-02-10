import { App } from "vue";
import lbutton from './lbutton/lbutton.vue';
import licon from './licon/licon.vue';
import llayout from './llayout/llayout.vue';
import mrow from './llayout/mrow.vue';
const allcom=[
	lbutton,
	licon,
	llayout,
	mrow
]

const recom =function(app:App){
	for(const allco of allcom){
		app.component(allco.name,allco)
	}
};
export {lbutton,licon,llayout,mrow};
export default recom;