import Vue from "vue";
import VueRouter from "vue-router";
import Rules from "../components/Rules.vue";
import Servers from "../components/Servers.vue";
import Voucher from "../components/Voucher.vue";
import Main from "../components/Main.vue";
import Shop from "../components/Shop.vue";
import PageNotFound from "../components/PageNotFound.vue"
import PanelAuth from '../components/PanelAuth.vue'
import PanelSignIn from '../components/PanelSignIn.vue'
import PanelSignUp from '../components/PanelSignUp.vue'
import Panel from '../components/Panel.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Main,
		name: 'main'
	},
	{
		path: '/panel',
		component: Panel,
		name: 'panel',
		meta:{
			requiresAuth:true
		}
	},
	{
		path: '/auth',
		component: PanelAuth,
		children:[
			{
				path:'signin',
				component: PanelSignIn,
				name:'signin',
				meta:{
					redirectToPanel:true
				},
			},
			{
				path:'signup',
				component: PanelSignUp,
				name:'signup',
				meta:{
					redirectToPanel:true
				},
			}
		]
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
							link:{name:'shop'}
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
							link:{name:'shop'}
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
							link:{name:'shop'}
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
