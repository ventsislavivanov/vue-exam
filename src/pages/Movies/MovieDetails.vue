<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getMovieDetails } from '../../services/movieServices.js';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
const IMAGE_RESOLUTION = 'w500';

const route = useRoute();
const movie = ref({});

const posterPath = computed(() => BASE_IMAGE_URL + IMAGE_RESOLUTION + movie.value.poster_path);
const movieGenres = computed(() => {
  if (Object.keys(movie.value).length !== 0)
    return movie.value.genres.map(genre => genre.name).join(', ');

  return null;
});

onMounted(async () => {
  movie.value = await getMovieDetails(route.params.id);
});
</script>

<template>
  <div class="container w-50">
    <h3 class="panel-title mt-5">
      {{ movie.title }}
    </h3>

    <img :src="posterPath" :alt="movie.title" class="thumbnail" width="100%">
    <ul class="list-group">
      <li class="list-group-item">
        Genres:
        <span>
          {{ movieGenres }}
        </span>
      </li>

      <li class="list-group-item">
        Release Date: {{ movie.release_date }}
      </li>
      <li class="list-group-item">
        Overview: {{ movie.overview }}
      </li>

      <a :href="movie.homepage" target="_blank" class="btn btn-outline-primary mt-2 mb-5">
        Visit Movie Website
      </a>
    </ul>
  </div>
</template>
