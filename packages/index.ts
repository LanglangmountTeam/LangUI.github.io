import { App } from "vue";
import lbutton from './lbutton/lbutton.vue';
import licon from './licon/licon.vue';
import ldrawer from './drawer/index.vue'
import lmessage from './message/index.vue'
import ldropdown from './dropDown/index.vue'
const allcom=[
	lbutton,
	licon,
	ldrawer,
	lmessage,
	ldropdown
]

const recom =function(app:App){
	for(const allco of allcom){
		app.component(allco.name,allco)
	}
};
export {lbutton,licon,ldrawer,lmessage,ldropdown};
export default recom;