<template>
  <div class="bill">
    <h1 class="h3">Création / édition d'une facture</h1>
    <pre>
      id: {{ id }}
    </pre>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '-1'
    }
  }
}
</script>
