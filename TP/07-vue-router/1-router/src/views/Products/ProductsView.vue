<template>
  <div>
    <h1 class="mb-3">Catalogue</h1>
    <div class="d-flex flex-wrap gap-4">
      <ProductListItem v-for="product in products" :product="product" :key="product.id" />
    </div>
    <!-- <pre>
      {{ products }}
    </pre> -->
  </div>
</template>

<script>
import ProductListItem from '@/components/ProductListItem.vue'
import { products } from '@/seeds/products'
export default {
  components: {
    ProductListItem
  },
  data() {
    return {
      products
    }
  }
}
</script>

<style lang="scss" scoped></style>
