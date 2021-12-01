import Vue from "vue";
import VueRouter from "vue-router";

import Regulamin from "../components/Regulamin.vue";
import Sklep from "../components/Sklep.vue";
import Voucher from "../components/Voucher.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: '/voucher',
		component: Voucher,
		meta: {
			breadcrumb:[
				{
					name:'Sklep',
					link:'/'
				},
				{
					name:'Zrealizuj voucher'
				}
			]
		}
	},
	{
		path: '/regulamin',
		component: Regulamin,
		meta: {
			breadcrumb:[
				{
					name:'Sklep',
					link:'/'
				},
				{
					name:'Regulamin'
				}
			]
		}
	},
	{
		path: '/',
		component: Sklep,
		meta: {
			breadcrumb:[
				{
					name:'Sklep',
					link:'/'
				},
				{
					name:'Serwery'
				}
			]
		}
	}
]

const router = new VueRouter({
	routes
});

export default router;
