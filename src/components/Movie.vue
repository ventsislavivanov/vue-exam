<script>
import {createRouter as $router} from "vue-router/dist/vue-router.esm-browser.js";
import { useFavoritesStore } from '../stores/useFavoritesStore.js';
import { useAuthStore } from "../stores/useAuthStore.js";

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
const IMAGE_RESOLUTION = 'w500';
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      favoritesStore: useFavoritesStore(),
      authsStore: useAuthStore(),
    }
  },
  computed: {
    posterPath() {
      return BASE_IMAGE_URL + IMAGE_RESOLUTION + this.movie.poster_path;
    },
    isFavorite() {
      return this.favoritesStore.isFavorite(this.movie.id);
    },
    loginStatus() {
      return this.authsStore.success;
    }
  },
  methods: {
    viewDetails() {
      this.$router.push({ name: 'movie-details', params: { id: this.movie.id } });
    },
    toggleFavorite() {
      this.favoritesStore.toggleFavorite(this.movie.id);
    }
  }
};
</script>

<template>
  <div class="pb-2">
    <div class="card mb-3 h-100 d-flex flex-column">
      <img
          :src="posterPath"
          :alt="movie.title"
          class="card-img-top user-select-none"
          width="100%"
          height="200"
      />

      <div class="card-body d-flex flex-column flex-grow-1">
        <h6 class="card-title text-center">
          {{ movie.title }}
        </h6>

        <!-- Release Date -->
        <p class="card-text text-center text-muted mb-4">
          {{ movie.release_date }}
        </p>
      </div>

      <!-- Card Footer with Actions -->
      <div class="card-footer text-muted d-flex justify-content-around">
        <!-- View Details Button -->
        <button
            @click="viewDetails"
            type="button"
            class="btn btn-info"
        >
          <font-awesome-icon :icon="['fas', 'eye']" />
        </button>

        <!-- Favorite Button -->
        <button
            v-if="loginStatus"
            @click="toggleFavorite"
            type="button"
            :class="['btn', !isFavorite ? 'btn-outline-primary' : 'btn-primary']"
        >
          <font-awesome-icon :icon="['fas', 'heart']" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
