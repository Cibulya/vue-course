import './theme.css'
import TheHeader from './components/TheHeader.vue';

import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component('the-header',TheHeader);
app.component('async-component',defineAsyncComponent( () => import('./components/AppAsyncComp.vue') ));
app.mount('#app')
