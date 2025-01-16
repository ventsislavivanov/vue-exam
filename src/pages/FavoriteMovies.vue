<script setup>
import { onMounted, ref } from 'vue';
import Movie from '../components/CardMovie.vue';
import { loadFavoriteMovie } from '../services/accountServices.js';

const favoriteMovies = ref([]);

onMounted(async () => {
  favoriteMovies.value = await loadFavoriteMovie();
});
</script>

<template>
  <div class="container">
    <h2 class="pt-2">
      Favorite movies
    </h2>

    <div class="row">
      <div v-for="movie in favoriteMovies" :key="movie.id" class="col-lg-2 pt-2 pb-2">
        <Movie :movie="movie" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
