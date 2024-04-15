import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './rooter';

import Particles from '@tsparticles/vue3';
import { loadSlim } from '@tsparticles/slim';


createApp(App)
.use(Particles, {
    init: async engine => {
        await loadSlim(engine);
    }
})
.use(router)
.mount('#app')
