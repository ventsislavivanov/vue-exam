<script>
import Jumbotron from '../components/Jumbotron.vue';
import Movie from '../components/Movie.vue';
import { getPopularMovies } from '../services/movieServices.js';

export default {
  components: {
    Jumbotron,
    Movie,
  },
  data() {
    return {
      movies: [],
    };
  },
  async created() {
    this.movies = await getPopularMovies();
  },
};
</script>

<template>
  <Jumbotron
    title="Find the Perfect Movie for Any Mood!"
    description="Explore a world of movies at your fingertips. Search for your favorite titles or discover new ones to fall in love with. Start your journey today!"
    call-to-action="Looking for the perfect movie? Our platform makes it easy to search, discover, and save your favorite films. Join now and dive into the world of cinema."
    :path="{ name: 'login' }"
  />

  <div class="row">
    <div v-for="movie in movies" :key="movie.id" class="col-lg-2">
      <Movie :movie="movie" />
    </div>
  </div>
</template>
