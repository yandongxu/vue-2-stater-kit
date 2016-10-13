import Vue from 'vue';
import Router from 'vue-router';

import Foo from '../components/views/Foo.vue';
import Bar from '../components/views/Bar.vue';
import Other from '../components/views/Other.vue';

Vue.use(Router);

const routes = [
  {
    path: '/foo',
    component: Foo
  },
  {
    path: '/bar',
    component: Bar
  },
  {
    path: '*',
    component: Other
  }
];

export default new Router({
  // mode: 'history',
  // scrollBehavior: () => ({ y: 0 }),
  routes
});
