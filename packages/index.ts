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
import ldrawer from './drawer/index.vue'
import lmessage from './message/index.vue'
import ldropdown from './dropDown/index.vue'
import lbreadcrumbitem from './breadcrumb/breadcrumb-item.vue'
import lbreadcrumb from './breadcrumb/breadcrumb.vue'
import lmenu from './menu/index.vue'
import lavatar from './lavatar/lavatar.vue';
import ldialog from './ldialog/ldialog.vue';
import llist from './llist/llist.vue';
import llistitem from './llist/llistitem.vue';
import ldatePicker from './ldatePicker/ldatePicker.vue'

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
	lupload,
	ldrawer,
	lmessage,
	ldropdown,
	lavatar,
	ldialog,
	lbreadcrumb,
	lbreadcrumbitem,
	lmenu,
	llist,
	llistitem,
	ldatePicker
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
	lupload,
	ldrawer,
	lmessage,
	ldropdown,
	lavatar,
	ldialog,
	lbreadcrumb,
	lbreadcrumbitem,
	lmenu,
	llist,
	llistitem,
	ldatePicker

};
export default recom;