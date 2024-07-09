<template>
  <h1>Hello vue <i class="fa-regular fa-envelope"></i></h1>
  <div class="container my-3">
    <!-- Exercice :  créer 2 colonnes dans la mise en page, l'une pour afficher la liste des produits, l'autre pour afficher un panier qui contiendera un simple compteur des produits ajoutés au panier 
     
    - 1 créer la mise en page en colonnes (1 large et 1 petite)
    - 2 créer une liste de produits avec un nouveau composant "ProductItem" qui sera utilisé dans la liste des produits pour afficher les informations du produit (image, nom, marque, détails, variantes de couleur et de quantité disponible pour chaque variante, etc...)
    - ajouter dans le composant "ProductItem" un bouton pour ajouter un produit au panier
    - ajouter dans le composant "ProductItem" un bouton pour supprimer un produit du panier
    - Créer le composant "MiniCart" qui affichera le panier avec le total des produits séléctionés et un bouton pour vidanger le panier
    -->

    <!-- ici on écoute l'événement "clickCard" qui est déclenché par le composant BsCard lorsque l'on clique sur le bouton de la carte, avec $emit('clickCard', this.title) on écoute l'événement et on récupère le titre de la carte dans la variable $event -->
    <BsCard
      @clickCard="onClickCardParent($event)"
      title="Test de titre"
      subtitle="sous-titre"
      link="#"
      linkText="Lien exemple"
    >
      Contenu de la carte 1
    </BsCard>

    <BsCard title="title example" class="my-2">
      <template #header>
        <h5 class="card-title mb-0">
          <i class="fa-solid fa-user me-1" />
          Titre de la card
        </h5>
      </template>
      Texte dans le body de la card
    </BsCard>

    <pre>
      {{ products }}
    </pre>
  </div>
</template>

<script>
import BsCard from '@/components/BsCard.vue'
import { products } from '@/seeds/products'

export default {
  components: {
    BsCard
  },
  data() {
    return {
      products
    }
  },
  methods: {
    onClickCardParent(title) {
      console.log('title de l’enfant cliqué: ', title)
    }
  }
}
</script>
