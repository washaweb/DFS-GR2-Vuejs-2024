<template>
  <div class="card-body">
    <div class="row align-items-end">
      <div class="col-10">
        <!-- ici il faut binder le formulaire sur le texte de la nouvelle todo à créer -->
        <label for="todoText" class="form-label visually-hidden">Texte de la todo</label>
        <input v-model="form.text" type="text" class="form-control" id="todoText" required />
      </div>
      <div class="col-2 d-grid">
        <!-- au click du bouton, déclencher une méthode pour injecter une nouvelle todo dans le tableau des todos -->
        <button @click="onCreate()" class="btn btn-block btn-primary">Créer</button>
      </div>
    </div>
    <AppDebug :datas="form" name="Debug formTodo" />
  </div>
</template>

<script>
import AppDebug from '@/components/AppDebug.vue'

export default {
  emits: ['create'],
  components: {
    AppDebug
  },
  data() {
    return {
      form: {
        id: -1, //remplacer cet id par le timestamp de la date de création
        text: '', //binder cette valeur sur le champ de formulaire de création
        done: false
      }
    }
  },
  methods: {
    onCreate() {
      this.$emit('create', this.form)
      this.form.text = ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
