<script setup>
import useVuelidate from '@vuelidate/core';
import { minLength, required } from '@vuelidate/validators';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
  title: String,
  description: String,
  callToAction: String,
});

const router = useRouter();
const searchQuery = ref('');

const rules = {
  searchQuery: {
    required,
    minLength: minLength(3),
  },
};

const v$ = useVuelidate(rules, { searchQuery });

function onSearch() {
  router.push({
    name: 'search-movie',
    params: { query: searchQuery.value },
  });
}
</script>

<template>
  <div class="jumbotron">
    <div class="overlay" />
    <div class="container">
      <div class="p-5 content">
        <h1 class="display-4 text-light">
          {{ title }}
        </h1>

        <p class="lead text-center">
          {{ description }}
        </p>

        <hr class="my-4">

        <p class="text-center">
          {{ callToAction }}
        </p>

        <form class="form d-flex" @submit.prevent="onSearch">
          <input
            v-model="searchQuery"
            class="form-control me-sm-2"
            type="search"
            placeholder="Search"
          >
          <button
            :disabled="v$.searchQuery.$invalid"
            class="btn btn-light my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.jumbotron {
  background-image: url('../../../assets/images/jumbotron-bg.webp');
  background-size: cover;
  background-position: center; color: white;
  position: relative;

  .overlay {
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .content {
    position: relative;
    z-index: 1;
  }
}
</style>
