<template>
  <div>
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="post">
      <p>
        <router-link :to="{ name: 'posts' }">Go back to posts</router-link>
      </p>
      <h4>{{ post.title }}</h4>
      <div v-html="post.content">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Post',

  data () {
    return {
      loading: false,
      post: null
    }
  },

  methods: {
    fetchData () {
      this.loading = true;
      this.$http.get('https://cnodejs.org/api/v1/topic/{id}', {
        params: {
          id: this.$route.params.id
        }
      })
        .then((r) => {
          this.loading = false;
          this.post = r.body.data;
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
