// Créer le code ici
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
    return {
      count: 0,
      text: "John Doe",
      bgColor: 'white',
      email: '',
      message: '',
      position: {
        x: 0,
        y: 0,
      }
    }
  },
  methods: {
    onUpdateMousePosition(event) {
      console.log(event)
      this.position.x = event.layerX
      this.position.y = event.layerY
    },

    onSubmit() {
      console.log(this.email)
    },

    onFillMessage() {
      this.message = 'Bonjour ceci est un faux texte'
    }
  }
}).mount('#app')