<template>
  <div>
    <h1 class="mb-3">{{ product.title }}</h1>

    <div class="row mb-3">
      <div class="col-md-5">
        <img :src="product.image" alt="product.title" class="img-fluid mb-3" />

        <div class="card bg-secondary text-center">
          <div class="card-body">
            <h3 class="fw-bold text-light mb-0">
              {{ product.price ? product.price + '€&nbsp;TTC' : 'Non communiqué' }}
            </h3>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <p class="mb-5" style="min-height: 210px">{{ product.description }}</p>

        <h2 class="h4">Commentaires clients:</h2>
        <div class="card">
          <ul class="list-group list-group-flush">
            <li v-for="comment in product.comments" :key="comment.id" class="list-group-item">
              <strong>{{ comment.userName }}:</strong><br />
              {{ comment.comment }}<br />
              <div v-if="comment.note">
                <span
                  v-for="star in 5"
                  :key="star"
                  :class="star < comment.note ? 'text-warning' : 'text-secondary'"
                >
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentcolor"
                  >
                    <path
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    />
                  </svg>
                </span>
              </div>
            </li>
          </ul>
        </div>

        <nav class="d-flex gap-2 mb-2">
          <RouterLink :to="{ name: 'productDetails' }">Détails</RouterLink>
          <RouterLink :to="{ name: 'productComments' }">Commentaires</RouterLink>
        </nav>
        <RouterView />
      </div>
    </div>

    <p>
      <button class="btn btn-primary" @click="onGoBack()">Retour</button>
      <!-- <RouterLink class="btn btn-primary" to="/products">Retour</RouterLink> -->
    </p>
    <!-- <pre>
      {{ product }}
    </pre> -->
  </div>
</template>

<script>
import { products } from '@/seeds/products'
import { RouterLink, RouterView } from 'vue-router'
// import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView,
    RouterLink
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    product() {
      return products.find((product) => product.slug === this.slug)
    }
  },
  methods: {
    onGoBack() {
      // this.$router.go(-1)
      this.$router.back()
      // this.$router.push('/products')
    }
  }
}
</script>

<style lang="scss" scoped></style>
