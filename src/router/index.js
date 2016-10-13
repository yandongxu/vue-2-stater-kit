import Vue from 'vue';
import Router from 'vue-router';

// NOTE: sync components
// import Foo from '../components/views/Foo.vue';
// import Bar from '../components/views/Bar.vue';
// import Other from '../components/views/Other.vue';

// NOTE: Lazy load async components
const Foo = resolve => require(['../components/views/Foo.vue'], resolve);
const Bar = resolve => require(['../components/views/Bar.vue'], resolve);
const Other = resolve => require(['../components/views/Other.vue'], resolve);

Vue.use(Router);

export default new Router({
  // hash|history
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'foo',
      path: '/foo',
      component: Foo
    },
    {
      name: 'bar',
      path: '/bar',
      component: Bar
    },
    {
      path: '*',
      component: Other
    }
  ]
});
