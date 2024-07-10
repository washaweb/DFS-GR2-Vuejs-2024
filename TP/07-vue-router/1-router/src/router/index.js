import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active text-primary',
  linkExactActiveClass: 'active text-primary fw-bold',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    // la route plus précise doit être placée en dernier dans la liste
    {
      path: '/blog/:slug',
      props: true,
      name: 'blogDetail',
      component: () => import('../views/BlogDetailView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    // la route plus précise doit être placée en dernier dans la liste
    {
      path: '/product/:slug',
      props: true,
      name: 'productDetail',
      component: () => import('../views/ProductDetailView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    // catchAll pour gérer les erreurs de routage (doit toujours être déclaré en dernier)
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

// on peut utiliser des middleware pour gérer les routes et faire des vérifications
router.beforeEach((to, from, next) => {
  // exemple ici si le slug est 'protected-quatrieme-article' on redirige vers la page d'accueil
  if (to.params.slug === 'protected-quatrieme-article') {
    // ici next('/ma-page') permet de modifier la route en cours
    next('/')
  } else {
    // next() permet de continuer la navigation vers la route suivante
    next()
  }
})
export default router
