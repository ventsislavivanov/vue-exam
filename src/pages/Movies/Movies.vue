<script>
import {
  getPopularMovies,
  getKidsMovies,
  getInTheaterMovies,
  getBestDramaMovies,
} from '../../services/movieServices.js';
import Jumbotron from './comp/Jumbotron.vue';
import Movie from './../../components/Movie.vue';

export default {
  components: {
    Jumbotron,
    Movie,
  },
  data() {
    return {
      bestDramaMovies: [],
      inTheaterMovies: [],
      kidsMovies: [],
      popularMovies: [],
    };
  },
  methods: {
    onSelect(id) {
      this.$router.push({ name: 'movie-details', params: { id } });
    },
  },
  async created() {
    this.bestDramaMovies = await getBestDramaMovies();
    this.popularMovies = await getPopularMovies();
    this.kidsMovies = await getKidsMovies();
    this.inTheaterMovies = await getInTheaterMovies();
  },
};
</script>

<template>
  <Jumbotron
    title="Find the Perfect Movie for Any Mood!"
    description="Explore a world of movies at your fingertips. Search for your favorite titles or discover new ones to fall in love with. Start your journey today!"
    call-to-action="Looking for the perfect movie? Our platform makes it easy to search, discover, and save your favorite films. Join now and dive into the world of cinema."
  />

  <div class="container">
    <h2 class="pt-2">
      Popular movies
    </h2>

    <div class="row">
      <div v-for="movie in popularMovies" :key="movie.id" class="col-lg-2 pb-2">
        <Movie :movie="movie" @select="onSelect"/>
      </div>
    </div>

    <h2 class="pt-2">
      In Theater movies
    </h2>

    <div class="row">
      <div v-for="movie in inTheaterMovies" :key="movie.id" class="col-lg-2 pb-2">
        <Movie :movie="movie" @select="onSelect"/>
      </div>
    </div>

    <h2 class="pt-2">
      Kids movies
    </h2>

    <div class="row">
      <div v-for="movie in kidsMovies" :key="movie.id" class="col-lg-2 pb-2">
        <Movie :movie="movie" @select="onSelect"/>
      </div>
    </div>

    <h2 class="pt-2">
      Best drama movies
    </h2>

    <div class="row">
      <div v-for="movie in bestDramaMovies" :key="movie.id" class="col-lg-2 pb-2">
        <Movie :movie="movie" @select="onSelect"/>
      </div>
    </div>
  </div>
</template>
