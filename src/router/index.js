import Vue from 'vue'
import VueRouter from 'vue-router'
//main
import MainPage from '../components/MainPage.vue'
import PageNotFound from '../components/PageNotFound.vue'
//shop
import BaseShop from '../components/shop/BaseShop.vue'
import RulesView from '../components/shop/RulesView.vue'
import ServersView from '../components/shop/ServersView.vue'
import VoucherView from '../components/shop/VoucherView.vue'
//auth
import BaseAuth from '../components/auth/BaseAuth.vue'
import SignIn from '../components/auth/SignIn.vue'
import SignUp from '../components/auth/SignUp.vue'
import RecoverAccount from '../components/auth/RecoverAccount.vue'
import NotVerified from '../components/auth/NotVerified.vue'
//panel
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
    component: BaseAuth,
    children: [
      {
        path: 'signin',
        component: SignIn,
        name: 'signin',
        meta: {
          redirectToPanel: true,
        },
      },
      {
        path: 'signup',
        component: SignUp,
        name: 'signup',
        meta: {
          redirectToPanel: true,
        },
      },
      {
        path: 'recover',
        component: RecoverAccount,
        name: 'recover',
      },
      {
        path: 'notverified',
        component: NotVerified,
        name: 'notverified',
      },
    ],
  },
  {
    path: '/shop/:shopid',
    component: BaseShop,
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
