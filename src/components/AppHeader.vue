<script setup>
import {useAuthStore} from "../stores/useAuthStore.js";
import {useRoute} from "vue-router";
import {computed} from "vue";

const authsStore = useAuthStore();
const route = useRoute();

const links = [
  { name: 'movies', label: 'Movie' },
  { name: 'about-us', label: 'About Us' },
  { name: 'contact-us', label: 'Contact Us' },
]

const loginStatus = computed(() => authsStore.success)

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
      <router-link class="navbar-brand" :to="{ name: 'home'}">Movie finder</router-link>

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

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item" v-if="!loginStatus">
            <router-link :to="{ name: 'login' }" class="btn btn-outline-light btn-lg" role="button">
              Log In
            </router-link>
          </li>

          <li class="nav-item" v-else>
            <button type="button" class="btn btn-outline-light btn-lg" @click="logout">
              Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
