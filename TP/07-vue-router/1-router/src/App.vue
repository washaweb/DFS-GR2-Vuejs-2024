<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        @click="navBarOpen = !navBarOpen"
        aria-controls="navbarNav"
        :aria-expanded="navBarOpen"
        aria-label="Afficher / masquer la navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ show: navBarOpen }" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/blog">Blog</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div id="page-content" class="container my-3">
    <Transition>
      <RouterView />
    </Transition>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: {
    RouterLink,
    RouterView
  },
  data() {
    return {
      navBarOpen: false
    }
  }
}
</script>
