/**
 * Created by hp on 2018/4/28.
 */
import Vue from 'vue';
import App from './App.vue';

import './assets/styles/global.styl';

// import './assets/styles/test.css';
// import './assets/styles/test-stylus.styl';
// import './assets/images/bg.jpeg';

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render: (h) => h(App)
}).$mount(root)