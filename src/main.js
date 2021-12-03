import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const app=initializeApp({
	apiKey: "AIzaSyAgqotnCT9d_zcmwrE8mHWiC9JL8r75U-s",
	authDomain: "sklepmc-c7516.firebaseapp.com",
	databaseURL:"https://sklepmc-c7516-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "sklepmc-c7516",
	storageBucket: "sklepmc-c7516.appspot.com",
	messagingSenderId: "889784816765",
	appId: "1:889784816765:web:7c84a7bce9b480ce7d4d14",
});

var errorCodes={
	"auth/invalid-email":"Email jest źle sformatowany.",
	"auth/wrong-password":"Złe hasło.",
	"auth/network-request-failed":"Brak połączenia z internetem.",
	"auth/user-not-found":"Nie znaleziono użytkownika o podanym identyfikatorze.",
	"auth/too-many-requests":"Dostęp do konta został tymczasowo zablokowany ze względu na dużą liczbę nieudanych prób logowań. Możesz od razu je odblokować resetując hasło.",
	"auth/email-already-in-use":"Email jest już w użyciu.",
	"auth/weak-password":"Zbyt słabe hasło (powinno mieć co najmniej 6 znaków).",
	"auth/missing-email":"Nie wpisałeś adresu email."
}

Vue.prototype.$auth = getAuth(app)
Vue.prototype.$database = getDatabase(app)
Vue.prototype.$errorCodes = errorCodes;
Vue.config.productionTip = false;

let waitForConnect=true
Vue.prototype.$auth.onAuthStateChanged(user => {
	waitForConnect=false
  store.dispatch("fetchUser", user);
})

router.beforeEach((to,from,next)=>{
	const fun=()=>{
		if(to.meta.requiresAuth && !store.getters.user.loggedIn){
			next({name:'signin'})
		}else if(to.meta.redirectToPanel && store.getters.user.loggedIn){
			next({name:'panel'})
		}else{
			next()
		}
	}
	if(!waitForConnect){
		fun()
	}else{
		const int=setInterval(()=>{
			if(!waitForConnect){
				fun()
				clearInterval(int)
			}
		},100)
	}
})

new Vue({
	router,
	store,
	render: (h) => {
		return h(App)
	}
}).$mount("#app");
