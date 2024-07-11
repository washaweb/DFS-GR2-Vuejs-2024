<template>
  <div class="bill">
    <h1 class="h3">{{ isNewBill ? 'Créer' : 'Éditer' }} une facture</h1>
    <pre>
      id: {{ id }} 
      {{ isNewBill }}
    </pre>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: 'new'
    }
  },
  computed: {
    isNewBill() {
      return this.id === 'new'
    }
  }
}
</script>
