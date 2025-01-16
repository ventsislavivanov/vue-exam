<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '../stores/useAuthStore.js';

const authsStore = useAuthStore();
const route = useRoute();

const links = [
  { name: 'movies', label: 'Movie' },
  { name: 'favorites', label: 'Favorites' },
  { name: 'about-us', label: 'About Us' },
  { name: 'contact-us', label: 'Contact Us' },
];

const loginStatus = computed(() => authsStore.success);

function isActiveLink(name) {
  return name === route.name ? 'active' : '';
}

function logout() {
  authsStore.logout();
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        Movie finder
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>

      <div id="navbarColor01" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li
            v-for="link in links"
            :key="link.name"
            class="nav-item"
          >
            <router-link
              class="nav-link"
              :class="isActiveLink(link.name)"
              :to="{ name: link.name }"
            >
              {{ link.label }}
            </router-link>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li v-if="!loginStatus" class="nav-item">
            <router-link :to="{ name: 'login' }" class="btn btn-outline-light btn-lg" role="button">
              Log In
            </router-link>
          </li>

          <li v-else class="nav-item">
            <button type="button" class="btn btn-outline-light btn-lg" @click="logout">
              Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
