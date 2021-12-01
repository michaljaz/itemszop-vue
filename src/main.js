import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

new Vue({
	router,
	render: (h) => {
		return h(App)
	}
}).$mount("#app");
