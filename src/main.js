import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';

import router from './router/router.js';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/spacelab/bootstrap.min.css';

import FontAwesomeIcon from "./helpers/fontawesome.js";

const pinia = createPinia()
const app = createApp(App);

app.use(router);
app.use(pinia)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app');
