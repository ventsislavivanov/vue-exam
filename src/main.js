import { createApp } from 'vue';
import App from './App.vue';

import router from './router/router.js';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/spacelab/bootstrap.min.css';

// FontAwesome import libs
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// FontAwesome add icons
library.add(faUser, faLock, faEnvelope);

const app = createApp(App);

app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app');
