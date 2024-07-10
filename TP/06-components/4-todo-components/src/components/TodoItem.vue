<template>
  <li class="list-group-item d-flex align-items-center gap-2">
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        :id="'check-' + form.id"
        v-model="form.done"
      />
      <label class="form-check-label visually-hidden" :for="'check-' + form.id">Terminé</label>
    </div>
    <!-- affichage simple d'une todo -->
    <template v-if="!form.edit">
      <div :class="{ 'text-decoration-line-through': form.done }">{{ form.text }}</div>
      <div class="ms-auto d-flex gap-2">
        <button @click="$emit('delete', form.id)" class="btn btn-danger">Supprimer</button>
        <button @click="onEdit()" class="btn btn-info">Modifier</button>
      </div>
    </template>

    <!-- affichage en mode edition -->
    <template v-else>
      <div class="w-100">
        <input @keyup.enter="onSave()" type="text" class="form-control" v-model="text" />
      </div>
      <div class="d-flex gap-2">
        <button @click="onCancel()" class="btn btn-secondary">Annuler</button>
        <button @click="onSave()" class="btn btn-success">Enregistrer</button>
      </div>
    </template>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  emit: ['save', 'delete'],
  data() {
    return {
      text: '',
      form: null
    }
  },
  beforeMount() {
    this.form = { ...this.todo }
  },
  methods: {
    onEdit() {
      this.form.edit = true
      this.text = this.form.text
    },
    onCancel() {
      this.text = ''
      this.form.edit = false
    },
    onSave() {
      this.form.text = this.text
      this.text = ''
      this.form.edit = false
    }
  },
  watch: {
    form: {
      handler(newVal) {
        this.$emit('save', newVal)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
