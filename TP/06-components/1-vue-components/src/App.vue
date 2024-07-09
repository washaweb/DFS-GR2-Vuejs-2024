<template>
  <h1>Hello vue <i class="fa-regular fa-envelope"></i></h1>
  <div class="container my-3">
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
  </div>
</template>

<script>
import BsCard from '@/components/BsCard.vue'

export default {
  components: {
    BsCard
  },
  data() {
    return {}
  },
  methods: {
    onClickCardParent(title) {
      console.log('title de l’enfant cliqué: ', title)
    }
  }
}
</script>
