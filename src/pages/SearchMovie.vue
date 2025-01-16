<script>
import CardMovie from '../components/CardMovie.vue';
import { getSearchMovie } from '../services/movieServices.js';

export default {
  components: {
    CardMovie,
  },
  data() {
    return {
      searchResults: [],
    };
  },
  computed: {
    query() {
      return this.$route.params.query;
    },
  },
  async created() {
    this.searchResults = await getSearchMovie(this.query);
  },
};
</script>

<template>
  <div class="container">
    <h2 class="pt-2">
      Results for: {{ query }}
    </h2>

    <div class="row">
      <div v-for="movie in searchResults" :key="movie.id" class="col-lg-2 pt-2 pb-2">
        <CardMovie :movie="movie" />
      </div>
    </div>
  </div>
</template>
