import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Components
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import ScrollPanel from 'primevue/scrollpanel';
import Carousel from 'primevue/carousel';
import MenuBar from 'primevue/menubar';

// Themes and CSS
import 'primevue/resources/themes/vela-green/theme.css';
import 'primevue/resources/primevue.min.css';                 //core css
import 'primeicons/primeicons.css';  

//Libraries
import '/node_modules/primeflex/primeflex.css';

const app = createApp(App).use(store).use(router)
app.use(PrimeVue);
app.component('OurButton', Button)
app.component('OurScrollPanel', ScrollPanel)
app.component('OurCarousel', Carousel)
app.component('OurMenuBar', MenuBar)

//Mounting
app.mount('#app')



