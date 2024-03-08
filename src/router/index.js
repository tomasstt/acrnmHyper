import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutLuxvital from "../views/AboutLuxvital.vue"
import AboutSagrop from "../views/AboutSagrop.vue"
import error from "../components/404.vue"


const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{ path: "/sagrop", component: AboutSagrop },
	{ path: "/luxvital", component: AboutLuxvital },
	{ path: '/:pathMatch(.*)*', name: 'not-found', component: error },

	{
		path: "/about",
		name: "about",

		component: function () {
			return import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
		},
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
