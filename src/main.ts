import { createApp } from 'vue'
import App from './App.vue'
import alloc from '../packages/index';
import router from './router';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import 'animate.css';
const app=createApp(App);
app.use(alloc);
app.use(router);
app.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((white: any) => {
        hljs.highlightBlock(white)
    })
})

app.mount('#app');
