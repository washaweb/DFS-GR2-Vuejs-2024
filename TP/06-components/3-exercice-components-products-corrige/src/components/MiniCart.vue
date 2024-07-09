<template>
  <div>
    <h3><i class="fa-solid text-success fa-cart-arrow-down me-2" />Votre panier</h3>
    <div class="card">
      <!-- si aucun produit dans le panier -->
      <div class="card-body" v-if="isCartEmpty">Aucun produit dans votre panier.</div>
      <!-- sinon... liste des produits du panier -->
      <ul v-else class="list-group list-group-flush">
        <li
          v-for="product in cart"
          :key="product.id"
          class="list-group-item d-flex align-items-center gap-2"
        >
          {{ product.qty }}x
          {{ product.name }}
          <div class="btn-group ms-auto">
            <button
              class="btn btn-sm btn-secondary text-light"
              @click="onRemoveItem(product.id)"
              title="Enlever un produit"
            >
              <i class="fa-solid fa-minus" />
            </button>
            <button
              class="btn btn-sm btn-secondary text-light"
              @click="onAddItem(product.id)"
              title="Ajouter un produit"
            >
              <i class="fa-solid fa-plus" />
            </button>
            <button
              class="btn btn-sm btn-danger text-light"
              @click="onDeleteItem(product.id)"
              title="Supprimer la ligne"
            >
              <i class="fa-solid fa-trash" />
            </button>
          </div>
        </li>
      </ul>

      <div class="card-footer d-grid">
        <button
          :disabled="isCartEmpty"
          class="btn btn-danger text-light btn-sm"
          @click="onEmptyCart()"
        >
          Vider
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  emits: ['empty', 'addItem', 'removeItem', 'removeProduct'],
  computed: {
    isCartEmpty() {
      return !(this.cart && this.cart.length)
    }
  },
  methods: {
    onEmptyCart() {
      this.$emit('empty')
    },
    onAddItem(id) {
      this.$emit('addItem', id)
    },
    onRemoveItem(id) {
      this.$emit('removeItem', id)
    },
    onDeleteItem(id) {
      this.$emit('removeProduct', id)
    }
  }
}
</script>

<style lang="scss" scoped></style>
