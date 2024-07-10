<template>
  <div>
    <h1>Le Blog</h1>
    <div class="card mb-3" v-for="post in posts" :key="post.id">
      <div class="row">
        <div class="col-md-4 pe-md-0">
          <img
            :src="post.img"
            class="img-fluid rounded-start h-100 w-100 object-fit-cover"
            :alt="post.title"
          />
        </div>
        <div class="col-md-8 ps-md-0 d-flex flex-column">
          <div class="card-body flex-fill">
            <h2 class="card-title">{{ post.title }}</h2>
            <p class="card-text">{{ post.content }}</p>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <div class="post-meta">{{ post.date }}</div>
            <RouterLink
              :to="{
                name: 'blogDetail',
                params: {
                  slug: post.slug
                }
              }"
              class="btn btn-primary"
              >Lire l'article</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { posts } from '@/seeds/posts.js'
import { RouterLink } from 'vue-router'
export default {
  components: {
    RouterLink
  },
  data() {
    return {
      posts
    }
  }
}
</script>
