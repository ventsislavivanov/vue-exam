<script>
export default {
  data() {
    return {
      links: [
        { name: 'home', label: 'Home' },
        { name: 'contact-us', label: 'Contact Us' },
      ],
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <!-- Лого -->
      <a class="navbar-brand" href="#">MyLogo</a>

      <!-- Бутон за мобилно меню -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <!-- Навигационни линкове -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li v-for="link in links" :key="link.name" class="nav-item">
            <router-link :to="{ name: link.name }" class="nav-link active">
              {{ link.label }}
            </router-link>
          </li>
        </ul>

        <div>
          <router-link :to="{ name: 'login' }" class="btn btn-primary">
            Login
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
