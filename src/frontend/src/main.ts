import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../node_modules/admin-lte/dist/css/adminlte.min.css'
import '@vuepic/vue-datepicker/dist/main.css'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faAngleLeft, faPhone, faTachometerAlt, faSackDollar, faBasketShopping, faChartPie, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone, faAngleLeft, faAngleRight, faTachometerAlt, faSackDollar, faBasketShopping, faChartPie, faCalendarAlt);

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')