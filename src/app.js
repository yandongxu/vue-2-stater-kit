import Vue from 'vue';
import VueResource from 'vue-resource';
import { sync } from 'vuex-router-sync';
import store from './store'
import router from './router';
import App from './components/views/App.vue';
import ajaxCache from './middlewares/ajaxCache';

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

// VueResource
Vue.use(VueResource);
Vue.http.interceptors.push(ajaxCache);

const app = new Vue({
  store,
  router,
  ...App
});

export { app, router, store };
