<template>
  <main class="container py-5">
    <h1>Gestion des événements en Vue JS</h1>
    <!-- formulaire d'ajout d'une nouvelle todo -->
    <div class="card my-3">
      <div class="card-header"><h2 class="h4">Créer une todo</h2></div>

      <!-- premier composant ici -->
      <TodoCreateForm @create="onCreateTodo($event)" />
    </div>

    <ul id="todos" class="list-group">
      <!-- un composant par ligne de todo (<li>) -->
      <!-- eslint-disable-next-line -->
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete="onDelete($event)"
        @save="onSave($event)"
      />
      <!-- fin du composant -->
    </ul>

    <!-- un composant pour l'affichage du debug -->
    <AppDebug :datas="todos" name="Debug Todos" />
  </main>
</template>

<script>
// on doit importer les composants
import AppDebug from '@/components/AppDebug.vue'
import TodoCreateForm from '@/components/TodoCreateForm.vue'
import TodoItem from '@/components/TodoItem.vue'

export default {
  // on doit déclarer les composants
  components: {
    AppDebug,
    TodoItem,
    TodoCreateForm
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          text: 'Titre de la todo',
          done: false,
          edit: false
        },
        {
          id: 2,
          text: 'Apprendre vuejs',
          done: false
        },
        {
          id: 3,
          text: 'Faire une pause',
          done: true
        },
        {
          id: 4,
          text: 'Développer un super programme',
          done: false
        },
        {
          id: 5,
          text: 'Se détendre',
          done: false
        }
      ]
    }
  },
  methods: {
    // ici on réaffecte la valeur du tableau avec un filtre qui supprime la todo recherchée
    onDelete(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    // ici on modifie la valeur de la todo recherche pour passer todo.edit à true, ce qui va afficher le template d'édition correspondant dans la vue

    // ici on recherche dans le tableau la todo à modifier, on récupère la valeur du form pour l'insérer dans le texte, puis on remet le edit à false et vidange le form pour pouvoir enregistrer une nouvelle valeur
    onSave(todo) {
      const index = this.todos.findIndex((t) => t.id === todo.id)
      this.todos[index] = { ...todo }
    },

    // copier le formulaire form dans le tableau des todos en prenant soin d'ajouter un id unique au passage
    onCreateTodo(form) {
      // on crée un id unique
      form.id = Date.now()
      // on pousse le formulaire dans le tableau comme nouvelle todo
      this.todos.push({ ...form })
    }
  }
}
</script>

<style lang="scss" scoped></style>
