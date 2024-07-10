<template>
  <div>
    <h1>Le Blog</h1>
    <div class="card mb-3" v-for="post in posts" :key="post.id">
      <div class="row">
        <div class="col-md-4 pe-md-0">
          <img
            :src="post.img"
            class="img-fluid rounded-start h-100 w-100 object-fit-cover"
            :alt="post.title"
          />
        </div>
        <div class="col-md-8 ps-md-0 d-flex flex-column">
          <div class="card-body flex-fill">
            <h2 class="card-title">{{ post.title }}</h2>
            <p class="card-text">{{ post.content }}</p>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <div class="post-meta">{{ post.date }}</div>
            <button class="btn btn-primary">Lire l'article</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Mon premier article',
          content: 'Voici le contenu de mon premier article',
          img: 'https://picsum.photos/id/1018/400/180',
          date: '2024-06-22'
        },
        {
          id: 2,
          title: 'Mon deuxième article',
          content: 'Voici le contenu de mon deuxième article',
          img: 'https://picsum.photos/id/237/400/180',
          date: '2024-03-18'
        },
        {
          id: 3,
          title: 'Mon troisieme article',
          content: 'Voici le contenu de mon troisième article',
          img: 'https://picsum.photos/id/845/400/180',
          date: '2024-01-05'
        }
      ]
    }
  }
}
</script>
