import { createApp } from 'vue';
import App from './App.vue';
import './theme.css';
import translatePlugin from './components/translatePlugin';

const app = createApp(App);



const ru = {
    app:{
        title:'Как работают плагины во Vue?',
    }
}


const en = {
    app:{
        title:'How plugins work in Vue?',
    }
}
app.use(translatePlugin,{ru,en});

app.mount('#app');