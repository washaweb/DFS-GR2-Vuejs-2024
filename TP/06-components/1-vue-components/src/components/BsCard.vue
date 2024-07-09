<template>
  <div class="card" style="width: 18rem">
    <div class="card-header">
      <slot name="header">
        <h5 v-if="title" class="card-title mb-0">{{ title }}</h5>
      </slot>
    </div>
    <div class="card-body">
      <h6 v-if="subtitle" class="card-subtitle mb-2 text-body-secondary">{{ subtitle }}</h6>
      <p class="card-text">
        <!-- les slots récupères le code html présent entre l'ouverture de baluse et la fermeture de balise du composant, ici on met un texte par défaut dans la balise slot, celui-ci sera remplacé uniquement si le slot est utilisé dans le parent -->
        <slot>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </slot>
      </p>
      <p v-if="link && linkText">
        <a :href="link" class="card-link">{{ linkText }}</a>
      </p>
      <p>
        <button @click="onClickCard" class="btn btn-primary">Event depuis la carte</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  // les props permettent de récuperer les données passées au composant via des attributs html
  props: ['title', 'subtitle', 'link', 'linkText'],
  // on déclare les événements qui peuvent être déclenchés par le composant
  emits: ['clickCard'],

  methods: {
    onClickCard() {
      // ici on déclenche l'événement "clickCard" qui remonte au parent
      this.$emit('clickCard', this.title)
    }
  }
}
</script>

<style lang="scss" scoped></style>
