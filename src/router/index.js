import Vue from 'vue'
import VueRouter from 'vue-router'
//main
import MainPage from '../components/MainPage.vue'
import PageNotFound from '../components/PageNotFound.vue'
//shop
import RulesView from '../components/shop/RulesView.vue'
import ServersView from '../components/shop/ServersView.vue'
import VoucherView from '../components/shop/VoucherView.vue'
import Shop from '../components/shop/Shop.vue'
//panel
import PanelAuth from '../components/panel/PanelAuth.vue'
import PanelSignIn from '../components/panel/PanelSignIn.vue'
import PanelSignUp from '../components/panel/PanelSignUp.vue'
import PanelDashboard from '../components/panel/PanelDashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainPage,
    name: 'main',
  },
  {
    path: '/panel',
    component: PanelDashboard,
    name: 'panel',
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/auth',
    component: PanelAuth,
    children: [
      {
        path: 'signin',
        component: PanelSignIn,
        name: 'signin',
        meta: {
          redirectToPanel: true,
        },
      },
      {
        path: 'signup',
        component: PanelSignUp,
        name: 'signup',
        meta: {
          redirectToPanel: true,
        },
      },
    ],
  },
  {
    path: '/shop/:shopid',
    component: Shop,
    children: [
      {
        path: '/',
        component: ServersView,
        name: 'shop',
        meta: {
          breadcrumb: [
            {
              name: 'Sklep',
              link: { name: 'shop' },
            },
            {
              name: 'Serwery',
            },
          ],
        },
      },
      {
        path: 'voucher',
        component: VoucherView,
        name: 'voucher',
        meta: {
          breadcrumb: [
            {
              name: 'Sklep',
              link: { name: 'shop' },
            },
            {
              name: 'Zrealizuj voucher',
            },
          ],
        },
      },
      {
        path: 'regulamin',
        name: 'regulamin',
        component: RulesView,
        meta: {
          breadcrumb: [
            {
              name: 'Sklep',
              link: { name: 'shop' },
            },
            {
              name: 'Regulamin',
            },
          ],
        },
      },
    ],
  },
  {
    path: '*',
    component: PageNotFound,
  },
]

const router = new VueRouter({
  routes,
})

export default router
