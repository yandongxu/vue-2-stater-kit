<template>
  <div>
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="posts.length > 0">
      <h4>Posts</h4>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <router-link :to="{ name: 'post', params: { id: post.id } }">
            {{ post.title }}
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Posts',

  data () {
    return {
      loading: false,
      posts: []
    }
  },

  methods: {
    fetchData () {
      this.loading = true;
      this.$http.get('https://cnodejs.org/api/v1/topics')
        .then((r) => {
          this.loading = false;
          this.posts = r.body.data;
        })
        .catch((e) => {
          this.loading = false;
          console.error('error found!');
          console.error(e);
        });
    }
  },

  created () {
    this.fetchData();
  }
}
</script>
