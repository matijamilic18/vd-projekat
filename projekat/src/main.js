import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import {createI18n} from 'vue-i18n';
import en from './locales/en.json'
import sr from './locales/sr.json'


const i18n = createI18n({
    legacy: false, 
    locale: 'sr', 
    fallbackLocale: 'en', 
    messages: { en, sr },   
  })

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');