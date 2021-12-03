import Vue from 'vue'
import VueRouter from 'vue-router'
import RulesView from '../components/RulesView.vue'
import ServersView from '../components/ServersView.vue'
import VoucherView from '../components/VoucherView.vue'
import MainPage from '../components/MainPage.vue'
import Shop from '../components/Shop.vue'
import PageNotFound from '../components/PageNotFound.vue'
import PanelAuth from '../components/PanelAuth.vue'
import PanelSignIn from '../components/PanelSignIn.vue'
import PanelSignUp from '../components/PanelSignUp.vue'
import PanelDashboard from '../components/PanelDashboard.vue'

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
