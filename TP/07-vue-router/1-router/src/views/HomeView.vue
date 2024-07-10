<template>
  <main>
    <h1>Home page</h1>

    <button @click="show = !show">Toggle</button>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>
  </main>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
