<template>
  <div class="container my-3">
    <h1><i class="fa-solid fa-cart-shopping me-2 text-success" />{{ appName }}</h1>

    <div class="row">
      <div class="col-md-9">
        <div class="d-flex gap-2 flex-wrap">
          <ProductItem
            @addToCart="onAddToCart(product)"
            v-for="product in products"
            :product="product"
            :key="product.id"
          />
        </div>
      </div>
      <div class="col-md-3">
        <MiniCart
          @empty="onEmptyCart"
          @addItem="onAddCartItem($event)"
          @removeItem="onRemoveCartItem($event)"
          @removeProduct="onRemoveProduct($event)"
          :cart="cart"
        />
      </div>
    </div>
    <p>
      <BsInput
        label="Nom de l'application"
        id="appname"
        name="appname"
        type="text"
        placeholder="Nom de l'application"
        v-model="appName"
        validText="Bravo c'est tout bon"
      />
    </p>
    <p>
      <BsInput
        label="Valeur du compteur"
        id="count"
        type="number"
        placeholder="0"
        v-model="count"
      />
    </p>
    <!-- Exercice :  créer 2 colonnes dans la mise en page, l'une pour afficher la liste des produits, l'autre pour afficher un panier qui contiendera un simple compteur des produits ajoutés au panier 
     
    - 1 créer la mise en page en colonnes (1 large et 1 petite)
    - 2 créer une liste de produits avec un nouveau composant "ProductItem" qui sera utilisé dans la liste des produits pour afficher les informations du produit (image, nom, marque, détails, variantes de couleur et de quantité disponible pour chaque variante, etc...)
    - ajouter dans le composant "ProductItem" un bouton pour ajouter un produit au panier
    - ajouter dans le composant "ProductItem" un bouton pour supprimer un produit du panier
    - Créer le composant "MiniCart" qui affichera le panier avec le total des produits séléctionés et un bouton pour vidanger le panier
    -->

    <!-- <pre>
      {{ products }}
    </pre> -->
  </div>
</template>

<script>
import MiniCart from '@/components/MiniCart.vue'
import ProductItem from '@/components/ProductItem.vue'
import { products } from '@/seeds/products'
import BsInput from './components/BsInput.vue'

export default {
  components: {
    ProductItem,
    MiniCart,
    BsInput
  },
  data() {
    return {
      appName: 'Mon Super Panier',
      count: 0,
      products,
      cart: []
    }
  },
  methods: {
    onAddToCart(product) {
      // si le produit est déjà au panier...
      const foundProduct = this.cart.find((item) => item.id === product.id)
      // ...on augmente juste la quantité
      if (foundProduct) {
        foundProduct.qty++
        // ...sinon on ajoute le produit
      } else {
        this.cart.push({
          qty: 1,
          name: product.product,
          id: product.id
        })
      }
    },
    onEmptyCart() {
      this.cart = []
    },
    onRemoveProduct(id) {
      this.cart = this.cart.filter((product) => product.id !== id)
    },
    onAddCartItem(id) {
      const product = this.cart.find((product) => product.id === id)
      product.qty++
    },
    onRemoveCartItem(id) {
      const product = this.cart.find((product) => product.id === id)
      if (product.qty - 1 <= 0) {
        this.onRemoveProduct(id)
      } else {
        product.qty--
      }
    }
  }
}
</script>
