# TODOLIST Composants

Exercice : Reprendre le code du TP de todolist réalisé hier (en script module), et le transformer pour être utilisé dans une application crée avec vue-cli (npm create).

- Reprendre le code existant
- Transformer les différentes parties de l'application en composants :
  + un composant pour le formulaire d'ajout d'une nouvelle todo (eh haut de page)
  + un composant par ligne de todo dans la liste (une li)

Pour rappel, voici l'HTML du template, le code javascript de l'app est à intégrer dans le controlleur de l'application App.vue

```html
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
            <input v-model="formTodo.text" type="text" class="form-control" id="todoText" required>
          </div>
          <div class="col-2 d-grid">
            <!-- au click du bouton, déclencher une méthode pour injecter une nouvelle todo dans le tableau des todos -->
            <button @click="onCreateTodo()" class="btn btn-block btn-primary">Créer</button>
          </div>
        </div>
      </div>
      <!-- fin du premier composant -->
    </div>

    <!-- exercice créer une TODO liste -->
    <ul id="todos" class="list-group">
      <!-- structure référence à créer 
      <li class="list-group-item">[case à cocher readonly] Titre de la todo (+classe barrer si achevée: "text-decoration-line-through") + bouton modifier + bouton supprimer</li> 
      -->

      <!-- un composant par ligne de todo (<li>) -->
      <li v-for="todo in todos" :key="todo.id" class="list-group-item d-flex align-items-center gap-2">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" :id="'check-' + todo.id" v-model="todo.done">
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
            <input type="text" class="form-control" v-model="todo.form">
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
    <p class="mt-5"><input class="form-check-input" type="checkbox" role="switch" v-model="debug"> Debug</p>
    <pre v-if="debug">
      {{todos}}
    </pre>
    <!-- fin du composant du debug -->
  </main>
```
