<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppFooter,
    AppHeader,

  },
};
</script>

<template>
  <AppHeader />

  <router-view />

  <AppFooter />
</template>
