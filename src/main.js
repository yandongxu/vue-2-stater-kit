import Vue from 'vue';
import router from './router';
import App from './components/views/App.vue';

const app = new Vue({
  // store,
  router,
  ...App
});

app.$mount('#root');
