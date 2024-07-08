import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
  
createApp({
  data() {
    return {
      title: 'Exemple de titre',
      user: {
        lastname: 'Skywalker',
        firstname: 'Luke',
        age: 25,
        message: 'Hello World',
        img: './images/img-1.jpg'
      },
      zoo: ['lion', 'tigre', 'chat', 'chien', 'crocodile']
    }
  },
  methods: {
    changeMessage(){
      this.message = "Dark Vador"
    },
    onClick(){
      this.user.age = 14
    }
  }
}).mount('#app')