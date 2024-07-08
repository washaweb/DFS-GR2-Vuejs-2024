// Créer le code ici
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
    return {
      cart: 0,
      firstname: 'John',
      lastname: 'Doe',
    }
  },
  computed: {
    fullName(){
      return this.firstname + ' ' + this.lastname
    },
    isCartEmpty() {
      return this.cart === 0
    },
    // exemple de propriété calculée avec un setter et un getter
    fullNameComputed: {
      get() {
        return this.firstname + ' ' + this.lastname
      },
      set(newVal, oldVal) {
        console.log('new', newVal)
        console.log('old', oldVal)
        this.firstname = newVal.split(' ')[0]
        this.lastname = newVal.split(' ')[1]
      }
    }
  },
  methods: {
    greetings() {
      console.log('bojour ' + this.fullName)
      this.cart += 2
    }
  }
}).mount('#app')