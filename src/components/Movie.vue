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
  <div class="card mb-3 h-100 d-flex flex-column">
    <div class="image-container">
      <img
          :src="posterPath"
          :alt="movie.title"
          class="card-img-top user-select-none"
          width="100%"
          height="200"
      />
    </div>

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
</template>

<style scoped>
.image-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200px;
}

.card-img-top {
  transition: transform 0.6s ease-in-out, box-shadow 0.6s ease-in-out;
  transform-origin: center;
}

.image-container:hover .card-img-top {
  transform: rotateY(180deg);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

.card {
  animation: scaleUp 0.3s ease-in-out;
}

@keyframes scaleUp {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
</style>
