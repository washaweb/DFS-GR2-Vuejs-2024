<template>
  <div>
    <h1>Catalogue</h1>

    <pre>
      {{ products }}
    </pre>
  </div>
</template>

<script>
import { products } from '@/seeds/products'

export default {
  data() {
    return {
      products
    }
  }
}
</script>

<style lang="scss" scoped></style>
