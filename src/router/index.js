import Vue from 'vue'
import VueRouter from 'vue-router'

//main
import MainPage from '../components/MainPage'
import PageNotFound from '../components/PageNotFound'

//shop
import BaseShop from '../components/shop/BaseShop'
import ShopRules from '../components/shop/ShopRules'
import ShopServers from '../components/shop/ShopServers'
import ShopVouchers from '../components/shop/ShopVouchers'

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
import PanelSettings from '../components/panel/PanelSettings'

import MainView from '../components/panel/shop/MainView'
import PagesView from '../components/panel/shop/PagesView'
import PaymentsView from '../components/panel/shop/PaymentsView'
import RconView from '../components/panel/shop/RconView'
import ServersView from '../components/panel/shop/ServersView'
import ServicesView from '../components/panel/shop/ServicesView'
import SettingsView from '../components/panel/shop/SettingsView'
import VouchersView from '../components/panel/shop/VouchersView'

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
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/',
        component: ShopsList,
        name: 'panel',
      },
      {
        path: 'new_shop',
        component: NewShop,
        name: 'new_shop',
      },
      {
        path: 'settings',
        component: PanelSettings,
        name: 'panel_settings',
      },
      {
        path: 'shop/:shopid',
        component: ShopPanel,
        children: [
          {
            path: '/',
            component: MainView,
            name: 'shop_main',
          },
          {
            path: 'pages',
            component: PagesView,
            name: 'shop_pages',
          },
          {
            path: 'payments',
            component: PaymentsView,
            name: 'shop_payments',
          },
          {
            path: 'rcon',
            component: RconView,
            name: 'shop_rcon',
          },
          {
            path: 'servers',
            component: ServersView,
            name: 'shop_servers',
          },
          {
            path: 'services',
            component: ServicesView,
            name: 'shop_services',
          },
          {
            path: 'settings',
            component: SettingsView,
            name: 'shop_settings',
          },
          {
            path: 'vouchers',
            component: VouchersView,
            name: 'shop_vouchers',
          },
        ],
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
        component: ShopServers,
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
        component: ShopVouchers,
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
        component: ShopRules,
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
