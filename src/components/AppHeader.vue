<script>
export default {
  data() {
    return {
      links: [
        { name: 'movies', label: 'Movie' },
        { name: 'contact-us', label: 'Contact Us' },
      ],
    };
  },
  methods: {
    isActiveLink(name) {
      return name === this.$route.name ? 'active' : '';
    }
  },
};
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
      </div>
    </div>
  </nav>
</template>
