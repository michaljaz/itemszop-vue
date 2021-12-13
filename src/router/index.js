import Vue from 'vue'
import VueRouter from 'vue-router'
//main
import MainPage from '../components/MainPage'
import PageNotFound from '../components/PageNotFound'
//shop
import BaseShop from '../components/shop/BaseShop'
import RulesView from '../components/shop/RulesView'
import ServersView from '../components/shop/ServersView'
import VoucherView from '../components/shop/VoucherView'
//auth
import BaseAuth from '../components/auth/BaseAuth'
import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'
import RecoverAccount from '../components/auth/RecoverAccount'
import NotVerified from '../components/auth/NotVerified'
//panel
import BasePanel from '../components/panel/BasePanel'
import ShopPanel from '../components/panel/ShopPanel'
import ShopsList from '../components/panel/ShopsList'
import NewShop from '../components/panel/NewShop'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainPage,
    name: 'main',
  },
  {
    path: '/panel',
    component: BasePanel,
    children: [
      {
        path: '/',
        component: ShopsList,
        name: 'panel',
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'new_shop',
        component: NewShop,
        name: 'new_shop',
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'shop/:shopid',
        component: ShopPanel,
        name: 'shop_panel',
        meta: {
          requiresAuth: true,
        },
      },
    ],
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
