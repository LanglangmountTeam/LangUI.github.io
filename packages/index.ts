import { App } from "vue";
import lbutton from './lbutton/lbutton.vue';
import licon from './licon/licon.vue';
import llayout from './llayout/llayout.vue';
const allcom=[
	lbutton,
	licon,
	llayout
]

const recom =function(app:App){
	for(const allco of allcom){
		app.component(allco.name,allco)
	}
};
export {lbutton,licon,llayout};
export default recom;