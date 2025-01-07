<script>
import {getMovieDetails} from "../../services/movieServices.js";

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
const IMAGE_RESOLUTION = 'w500';

export default {
  data() {
    return {
      movie: {},
    };
  },
  computed: {
    posterPath() {
      return BASE_IMAGE_URL + IMAGE_RESOLUTION + this.movie.poster_path;
    },
    movieGenres() {
      if (Object.keys(this.movie).length !== 0)
        return this.movie.genres.map(genre => genre.name).join(', ');

      return null;
    }
  },
  async created() {
    this.movie = await getMovieDetails(this.$route.params.id);
  },
}
</script>

<template>
  <div class="container w-50">
    <h3 class="panel-title mt-5">
      {{ movie.title }}
    </h3>

    <img :src="posterPath" :alt="movie.title" class="thumbnail" width="100%">
    <ul class="list-group">
      <li class="list-group-item">Genres:
        <span>
          {{ movieGenres }}
        </span>
      </li>

      <li class="list-group-item">Release Date: {{ movie.release_date }}</li>

      <a :href="movie.homepage" target="_blank" class="btn btn-outline-primary mt-2 mb-5">
        Visit Movie Website
      </a>
    </ul>
  </div>
</template>

<style scoped>

</style>