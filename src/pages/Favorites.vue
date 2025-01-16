<script setup>
import {useFavoritesStore} from "../stores/useFavoritesStore.js";
import Movie from "../components/Movie.vue";
import {loadFavoritesMovie} from "../services/accountServices.js";

const favoritesStore = useFavoritesStore();
</script>

<template>
  <div class="container">
    <h2 class="pt-2">
      Favorites
    </h2>

    <div class="row">
      <div v-for="movie in loadFavoritesMovie" :key="movie.id" class="col-lg-2 pt-2 pb-2">
        <Movie :movie="movie" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>