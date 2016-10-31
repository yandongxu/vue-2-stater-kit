<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'foo' }">Foo</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'bar' }">Bar</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'posts' }">Posts</router-link>
      </li>
    </ul>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      title: 'Vue family'
    }
  }
};
</script>
