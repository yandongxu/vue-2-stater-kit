import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import store from './store'
import router from './router';
import App from './components/views/App.vue';

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

const app = new Vue({
  store,
  router,
  ...App
});

export { app, router, store }
