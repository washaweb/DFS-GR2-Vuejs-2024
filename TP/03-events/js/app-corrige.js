// Créer le code ici
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
    return {
      formTodo: {
        id: -1, //remplacer cet id par le timestamp de la date de création
        text: '', //binder cette valeur sur le champ de formulaire de création
        done: false,
      },
      todos: [
        {
          id: 1,
          text: 'Titre de la todo',
          done: false,
          edit: true,
        },
        {
          id: 2,
          text: 'Apprendre vuejs',
          done: false,
        },
        {
          id: 3,
          text: 'Faire une pause',
          done: true,
        },
        {
          id: 4,
          text: 'Développer un super programme',
          done: false,
        },
        {
          id: 5,
          text: 'Se détendre',
          done: false,
        },
      ],
      debug: false
    }
  },
  methods: {
    // ici on réaffecte la valeur du tableau avec un filtre qui supprime la todo recherchée
    onDelete(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    // ici on modifie la valeur de la todo recherche pour passer todo.edit à true, ce qui va afficher le template d'édition correspondant dans la vue
    onEdit(id) {
      const todo = this.todos.find(todo => todo.id === id)
      todo.edit = true
      todo.form = todo.text
    },
    // ici on annule la modification en remettant les valeurs à 0
    onCancel(id){
      const todo = this.todos.find(todo => todo.id === id)
      todo.form = ''
      todo.edit = false
    },

    // ici on recherche dans le tableau la todo à modifier, on récupère la valeur du form pour l'insérer dans le texte, puis on remet le edit à false et vidange le form pour pouvoir enregistrer une nouvelle valeur
    onSave(todo) {
      const todoEdited = this.todos.find(t => t.id === todo.id)
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
      this.todos.push( { ...this.formTodo } )
      // réinitialise le texte du formulaire
      this.form.todo.text = ''
    }
  }
}).mount('#app')