<script>
import { getDiscoverMovies } from '../../services/discoverServices.js';
import { getPopularMovies } from '../../services/movieServices.js';
import Jumbotron from './comp/Jumbotron.vue';
import Movie from './comp/Movie.vue';

export default {
  components: {
    Jumbotron,
    Movie,
  },
  data() {
    return {
      discoverMovies: [],
      popularMovies: [],
    };
  },
  async created() {
    this.popularMovies = await getPopularMovies();
    this.discoverMovies = await getDiscoverMovies();
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

  <div class="container">
    <h2 class="pt-2">
      Popular movies
    </h2>

    <div class="row">
      <div v-for="movie in popularMovies" :key="movie.id" class="col-lg-2">
        <Movie :movie="movie" />
      </div>
    </div>

    <h2 class="pt-2">
      Discover movies
    </h2>

    <div class="row">
      <div v-for="movie in discoverMovies" :key="movie.id" class="col-lg-2">
        <Movie :movie="movie" />
      </div>
    </div>
  </div>
</template>
