<script>
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
const IMAGE_RESOLUTION = 'w500';
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  emits: ['select'],
  computed: {
    posterPath() {
      return BASE_IMAGE_URL + IMAGE_RESOLUTION + this.movie.poster_path;
    },
  },
};
</script>

<template>
  <div class="card mb-3">
    <img :src="posterPath" :alt="movie.title" class="d-block user-select-none" width="100%" height="200">

    <div class="card-body">
      <p class="card-text">
        {{ movie.title }}
      </p>

      <h6 class="card-text">
        {{ movie.release_date }}
      </h6>
    </div>

    <div class="card-footer text-muted">
      <button
        :id="movie.id"
        @click="$emit('select', movie.id)"
        type="button"
        class="btn btn-primary"
      >
        View Details
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
