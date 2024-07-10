<template>
  <main class="container py-5">
    <h1>Gestion des événements en Vue JS</h1>
    <!-- formulaire d'ajout d'une nouvelle todo -->
    <div class="card my-3">
      <div class="card-header"><h2 class="h4">Créer une todo</h2></div>

      <!-- premier composant ici -->
      <div class="card-body">
        <div class="row align-items-end">
          <div class="col-10">
            <!-- ici il faut binder le formulaire sur le texte de la nouvelle todo à créer -->
            <label for="todoText" class="form-label visually-hidden">Texte de la todo</label>
            <input
              v-model="formTodo.text"
              type="text"
              class="form-control"
              id="todoText"
              required
            />
          </div>
          <div class="col-2 d-grid">
            <!-- au click du bouton, déclencher une méthode pour injecter une nouvelle todo dans le tableau des todos -->
            <button @click="onCreateTodo()" class="btn btn-block btn-primary">Créer</button>
          </div>
        </div>
      </div>
      <!-- fin du premier composant -->
    </div>

    <ul id="todos" class="list-group">
      <!-- un composant par ligne de todo (<li>) -->
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="list-group-item d-flex align-items-center gap-2"
      >
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            :id="'check-' + todo.id"
            v-model="todo.done"
          />
          <label class="form-check-label visually-hidden" :for="'check-' + todo.id">Terminé</label>
        </div>
        <!-- affichage simple d'une todo -->
        <template v-if="!todo.edit">
          <div :class="{ 'text-decoration-line-through': todo.done }">{{ todo.text }}</div>
          <div class="ms-auto d-flex gap-2">
            <button @click="onDelete(todo.id)" class="btn btn-danger">Supprimer</button>
            <button @click="onEdit(todo.id)" class="btn btn-info">Modifier</button>
          </div>
        </template>

        <!-- affichage en mode edition -->
        <template v-else>
          <div class="w-100">
            <input type="text" class="form-control" v-model="todo.form" />
          </div>
          <div class="d-flex gap-2">
            <button @click="onCancel(todo.id)" class="btn btn-secondary">Annuler</button>
            <button @click="onSave(todo)" class="btn btn-success">Enregistrer</button>
          </div>
        </template>
      </li>
      <!-- fin du composant -->
    </ul>

    <!-- un composant pour l'affichage du debug -->
    <Debug :datas="todos" name="Debug Todos" />

    <Debug :datas="formTodo" name="Debug formTodo" />
    <!-- fin du composant du debug -->
  </main>
</template>

<script>
import Debug from '@/components/Debug.vue'

export default {
  components: {
    Debug
  },
  data() {
    return {
      formTodo: {
        id: -1, //remplacer cet id par le timestamp de la date de création
        text: '', //binder cette valeur sur le champ de formulaire de création
        done: false
      },
      todos: [
        {
          id: 1,
          text: 'Titre de la todo',
          done: false,
          edit: true
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
    onEdit(id) {
      const todo = this.todos.find((todo) => todo.id === id)
      todo.edit = true
      todo.form = todo.text
    },
    // ici on annule la modification en remettant les valeurs à 0
    onCancel(id) {
      const todo = this.todos.find((todo) => todo.id === id)
      todo.form = ''
      todo.edit = false
    },

    // ici on recherche dans le tableau la todo à modifier, on récupère la valeur du form pour l'insérer dans le texte, puis on remet le edit à false et vidange le form pour pouvoir enregistrer une nouvelle valeur
    onSave(todo) {
      const todoEdited = this.todos.find((t) => t.id === todo.id)
      todoEdited.text = todoEdited.form
      todoEdited.form = ''
      todoEdited.edit = false
    },

    // copier le formulaire formTodo dans le tableau udes todos en prenant soin d'ajouter un id unique au passage, puis on vidange le formulaire
    onCreateTodo() {
      // console.log(this.formTodo)
      // on crée un id unique
      this.formTodo.id = Date.now()
      // on pousse le formulaire dans le tableau comme nouvelle todo
      this.todos.push({ ...this.formTodo })
      // réinitialise le texte du formulaire
      this.form.todo.text = ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
