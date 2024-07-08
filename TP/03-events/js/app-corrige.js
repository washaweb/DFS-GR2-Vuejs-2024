// Créer le code ici
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
    return {
      todos: [
        {
          id: 1,
          text: 'Titre de la todo',
          done: false,
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
  }
}).mount('#app')