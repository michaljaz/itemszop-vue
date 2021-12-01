import Vue from "vue";
import VueRouter from "vue-router";

import Rules from "../components/Rules.vue";
import Servers from "../components/Servers.vue";
import Voucher from "../components/Voucher.vue";
import Main from "../components/Main.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Main,
		name: 'main',
		meta:{
			shopFrame: false
		}
	},
	{
		path: '/shop/:shopid/',
		component: Servers,
		name: 'shop',
		meta: {
			shopFrame: true,
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
	},
	{
		path: '/shop/:shopid/voucher',
		component: Voucher,
		name: 'voucher',
		meta: {
			shopFrame: true,
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
		path: '/shop/:shopid/regulamin',
		name: 'regulamin',
		component: Rules,
		meta: {
			shopFrame: true,
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
	}

]

const router = new VueRouter({
	routes
});

export default router;
