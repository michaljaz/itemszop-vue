import Vue from "vue";
import VueRouter from "vue-router";

import Rules from "../components/Rules.vue";
import Servers from "../components/Servers.vue";
import Voucher from "../components/Voucher.vue";
import Main from "../components/Main.vue";
import Shop from "../components/Shop.vue";
import PageNotFound from "../components/PageNotFound.vue"

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Main,
		name: 'main'
	},
	{
		path:'/shop/:shopid',
		component: Shop,
		children: [
			{
				path: '/',
				component: Servers,
				name: 'shop',
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
			},
			{
				path: 'voucher',
				component: Voucher,
				name: 'voucher',
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
				path: 'regulamin',
				name: 'regulamin',
				component: Rules,
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
			}
		]
	},
	{
		path: "*",
		component: PageNotFound
	}
]

const router = new VueRouter({
	routes
});

export default router;
