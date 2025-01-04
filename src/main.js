import { createApp } from 'vue';
import App from './App.vue';

import router from './router/router.js';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/custom.css';

const app = createApp(App);

app.use(router);

app.mount('#app');
