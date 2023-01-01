import { createApp } from 'vue'
import { router } from './router'
import { store } from './store'
import App from './App.vue'
import { Main as MainLayout } from './layouts';
import './index.css'

const app = createApp(App);

// layouts
app.component('MainLayout', MainLayout);

// packages
app.use(router);
app.use(store);

app.mount('#app');
