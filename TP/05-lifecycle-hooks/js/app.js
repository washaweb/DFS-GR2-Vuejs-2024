// Créer le code ici
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  // avant tout ça éventuellement le setup
  setup(){
    console.log('setup')
  },
  // les imports de composants en premier,
  components: {},
  // les props et emits en second
  props: {},
  emits: {},
  // les datas en troisième
  data() {
    return {
      count: 0,
      x: 0,
      y: 0,
      user: {
        name: 'John',
        age: 30
      }
    }
  },
  // les computed en quatrième
  computed: {},
  // les hooks en cinquième
  beforeCreate() {
    console.log('before create')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('before mount')
  },
  mounted() {
    console.log('mounted')
    // on attache un événement sur le document
    document.addEventListener('mousemove', this.onMouseMove)
  },
  beforeUpdate() {
    // test d'incrémentation du compteur à chaque changement d'état...
    // this.count++
    // console.log('before update')
  },
  updated() {
    // console.log('updated')
  },
  beforeUnmount() {
    console.log('before unmount')
    // on retire l'événement
    document.removeEventListener('mousemove', this.onMouseMove)
  },
  unmounted(){
    console.log('unmounted')
  },
  // les méthodes en sixième
  methods: {
    // méthode utilisée dans le listener mousemove
    onMouseMove(e) {
      this.x = e.clientX
      this.y = e.clientY
    }
  },
  // les watch en septième
  watch: {
    // pour surveiller une valeur, on peut utiliser la méthode watch
    // pour surveiller count, je dois donc écrire une méthode qui reprend le nom de la variable count(){} dans les watcher
    // la méthode watch prend en paramètre la valeur et l'ancienne valeur
    count(newVal, oldVal) {
      console.log('count changed', newVal, oldVal)
      console.log(newVal * 10)
    },
    // on peut aussi surveiller une propriété d'objet
    // ['user.name'](newVal, oldVal) {
    //   console.log('user.name changed', newVal, oldVal)
    // },
    // pour surveiller un ovjet en profondeur (toutes les propriétés), on peut utiliser la propriété deep: true et une fonction handler
    user: {
      handler(newVal){
        console.log('user changed', newVal)
      },
      deep: true
    }
  },
}).mount('#app')