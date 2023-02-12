import { App } from "vue";
import lbutton from './lbutton/lbutton.vue';
import licon from './licon/licon.vue';
import linput from './linput/linput.vue';
import ltextarea from './textarea/ltextarea.vue';
import lformItem from './lform/lform-item.vue'
import lform from './lform/lform.vue'

export type FormInstance = InstanceType<typeof lform>

const allcom=[
	lbutton,
	licon,
	linput,
	ltextarea,
	lformItem,
	lform
]

const recom =function(app:App){
	for(const allco of allcom){
		app.component(allco.name,allco)
	}
};
export {
	lbutton,
	licon,
	linput,
	ltextarea,
	lformItem,
	lform
};
export default recom;