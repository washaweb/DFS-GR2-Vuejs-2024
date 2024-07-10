<template>
  <div>
    <h1>Détail du post {{ slug }}</h1>

    <pre>
      {{ $route.params.slug }}
      {{ slug }}
      {{ computedSlug }}
      {{ post }}
    </pre>
  </div>
</template>

<script>
import { posts } from '@/seeds/posts.js'

export default {
  // Attention: pour récupérer le paramètre sous forme de props, il faut utiliser props: true dans la déclaration de la route (fichier @/router/index.js)
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    computedSlug() {
      return this.$route.params.slug
    },
    post() {
      return posts.find((post) => post.slug === this.slug)
    }
  }
}
</script>
