<template>
  <div class="container my-3">
    <h1><i class="fa-solid fa-cart-shopping me-2 text-success" />Mes produits</h1>

    <!-- Exercice :  créer 2 colonnes dans la mise en page, l'une pour afficher la liste des produits, l'autre pour afficher un panier qui contiendera un simple compteur des produits ajoutés au panier 
     
    - 1 créer la mise en page en colonnes (1 large et 1 petite)
    - 2 créer une liste de produits avec un nouveau composant "ProductItem" qui sera utilisé dans la liste des produits pour afficher les informations du produit (image, nom, marque, détails, variantes de couleur et de quantité disponible pour chaque variante, etc...)
    - ajouter dans le composant "ProductItem" un bouton pour ajouter un produit au panier
    - ajouter dans le composant "ProductItem" un bouton pour supprimer un produit du panier
    - Créer le composant "MiniCart" qui affichera le panier avec le total des produits séléctionés et un bouton pour vidanger le panier
    -->

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
