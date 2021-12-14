import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import firebaseConfig from './assets/firebaseConfig'
import errorCodes from './assets/errorCodes'

const app = initializeApp(firebaseConfig)

Vue.prototype.$auth = getAuth(app)
Vue.prototype.$database = getDatabase(app)
Vue.prototype.$user = null
Vue.prototype.$errorCodes = errorCodes
Vue.prototype.$pregMatchAll = (regex, str) => {
  return new RegExp(regex, 'g').test(str)
}
Vue.config.productionTip = false

let waitForConnect = true
Vue.prototype.$auth.onAuthStateChanged((user) => {
  waitForConnect = false
  store.dispatch('fetchUser', user)
  Vue.prototype.$user = user
})

router.beforeEach((to, from, next) => {
  const fun = () => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      //if panel-like view
      if (!store.getters.user.loggedIn) {
        //if not logged in
        next({ name: 'signin' })
      } else if (!store.getters.user.data.emailVerified) {
        //if email not verified
        next({ name: 'notverified' })
      } else {
        next()
      }
    } else if (to.meta.redirectToPanel && store.getters.user.loggedIn) {
      next({ name: 'panel' })
    } else {
      next()
    }
  }
  if (!waitForConnect) {
    fun()
  } else {
    const int = setInterval(() => {
      if (!waitForConnect) {
        fun()
        clearInterval(int)
      }
    })
  }
})

new Vue({
  router,
  store,
  render: (h) => {
    return h(App)
  },
}).$mount('#app')
