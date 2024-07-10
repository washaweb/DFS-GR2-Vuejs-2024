<template>
  <div class="card text-bg-dark" style="width: 18rem">
    <img :src="product.image" class="card-img" :alt="product.title" />
    <div class="card-img-overlay bg-dark bg-opacity-50">
      <h5 class="card-title">{{ product.title }}</h5>
      <RouterLink
        class="btn btn-primary"
        :to="{
          name: 'productDetail',
          params: {
            slug: product.slug
          }
        }"
        >Voir le détail</RouterLink
      >
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  components: {
    RouterLink
  }
}
</script>
