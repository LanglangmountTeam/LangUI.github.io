import { App } from "vue";
import lbutton from './lbutton/lbutton.vue';
import licon from './licon/licon.vue';
import linput from './linput/linput.vue';
import ltextarea from './textarea/ltextarea.vue';
import lformItem from './lform/lform-item.vue';
import lform from './lform/lform.vue';
import lselect from './lselect/lselect.vue';
import lradio from './lradio/lradio.vue';
import lswitch from './lswitch/lswitch.vue';
import lupload from './lupload/lupload.vue';

export type FormInstance = InstanceType<typeof lform>

const allcom=[
	lbutton,
	licon,
	linput,
	ltextarea,
	lformItem,
	lform,
	lselect,
	lradio,
	lswitch,
	lupload
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
	lform,
	lselect,
	lradio,
	lswitch,
	lupload
};
export default recom;