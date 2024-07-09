<template>
  <div class="card mb-3 product-card">
    <img
      class="card-img-top"
      :src="product.variants[selectedImage].variantImage"
      alt="product.product"
    />
    <div class="card-body p-2">
      <h3 class="card-title border-bottom pb-1">{{ product.product }}</h3>
      <h4 class="h6 card-subtitle mb-2 text-end">{{ product.brand }}</h4>
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-12">
          <ul class="ps-0">
            <li
              v-for="(variant, index) in product.variants"
              :key="variant.variantId"
              class="d-flex justify-content-between align-items-center"
              :style="`color:${variant.variantColor}`"
            >
              <div
                class="d-inline-block px-1 py-0 rounded-pill"
                :style="variant.variantColor === 'white' ? 'background-color: #aaa' : ''"
              >
                <i
                  @mouseenter="selectedImage = index"
                  @mouseleave="selectedImage = product.selectedVariant"
                  class="fa-solid fa-eye me-1 cursor-pointer"
                />
                <span>{{ variant.variantColor }}</span>
              </div>
              <span class="badge rounded-pill text-bg-info">{{ variant.variantQuantity }}</span>
            </li>
          </ul>
        </div>
        <div class="col d-grid align-items-end">
          <button @click="$emit('addToCart')" class="btn btn-danger text-light">
            <i class="fa-solid fa-cart-arrow-down me-1" />Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  emits: ['addToCart'],
  data() {
    return {
      selectedImage: 0
    }
  },
  mounted() {
    this.selectedImage = this.product.selectedVariant
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  width: 100%;
  @media (min-width: 40rem) {
    width: calc(50% - 1rem);
  }
  @media (min-width: 90rem) {
    width: calc(33% - 0.5rem);
  }
}
</style>
