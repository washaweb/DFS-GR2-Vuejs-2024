<template>
  <div>
    <h1>Détail produit</h1>
    <pre>
      {{ product }}
    </pre>
  </div>
</template>

<script>
import { products } from '@/seeds/products'

export default {
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
  }
}
</script>

<style lang="scss" scoped></style>
