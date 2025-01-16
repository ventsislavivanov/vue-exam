<script>
import { useAuthStore } from '../stores/useAuthStore.js';
import { useFavoritesStore } from '../stores/useFavoritesStore.js';

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
    };
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
    },
  },
  watch: {
    'authsStore.success': function (newValue) {
      if (!newValue) {
        this.$router.push({ name: 'login' });
      }
    },
  },
  methods: {
    viewDetails() {
      this.$router.push({ name: 'movie-details', params: { id: this.movie.id } });
    },
    addFavorite() {
      this.favoritesStore.addFavorite(this.movie.id);
    },
  },
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
      >
    </div>

    <div class="card-body d-flex flex-column flex-grow-1">
      <h6 class="card-title text-center">
        {{ movie.title }}
      </h6>

      <p class="card-text text-center text-muted mb-4">
        {{ movie.release_date }}
      </p>
    </div>

    <div class="card-footer text-muted d-flex justify-content-around">
      <button
        type="button"
        class="btn btn-info"
        @click="viewDetails"
      >
        <font-awesome-icon :icon="['fas', 'eye']" />
      </button>

      <button
        v-if="loginStatus"
        type="button"
        class="btn"
        :class="[!isFavorite ? 'btn-outline-primary' : 'btn-primary']"
        @click="addFavorite"
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
