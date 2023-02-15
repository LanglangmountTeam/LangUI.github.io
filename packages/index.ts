import { App } from "vue";
import lbutton from './lbutton/lbutton.vue';
import licon from './licon/licon.vue';
import ltable from './ltable/ltable.vue';
import lgrid from './lgrid/lgrid.vue';
import mrow from './lgrid/mrow.vue';
import lprogress from './lprogress/lprogress.vue';
import ldivider from './ldivider/ldivider.vue';
import ltextarea from './textarea/ltextarea.vue';
import lformItem from './lform/lform-item.vue';
import lform from './lform/lform.vue';
import lselect from './lselect/lselect.vue';
import lradio from './lradio/lradio.vue';
import lswitch from './lswitch/lswitch.vue';
import lupload from './lupload/lupload.vue';
import linput from './linput/linput.vue';
const allcom = [
	lbutton,
	licon,
	ltable, lgrid,
	mrow,
	lprogress,
	ldivider,
	linput,
	ltextarea,
	lformItem,
	lform,
	lselect,
	lradio,
	lswitch,
	lupload

]

const recom = function (app: App) {
	for (const allco of allcom) {
		app.component(allco.name, allco)
	}
};
export {
	lbutton, 
	licon, 
	ltable, 
	lgrid, 
	mrow, 
	lprogress, 
	ldivider,
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