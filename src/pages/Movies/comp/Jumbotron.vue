<script>
export default {
  props: {
    title: String,
    description: String,
    callToAction: String,
    path: Object,
  },
};
</script>

<template>
  <div class="jumbotron">
    <div class="overlay" />
    <div class="container">
      <div class="p-5 content">
        <h1 class="display-4">
          {{ title }}
        </h1>

        <p class="lead text-center">
          {{ description }}
        </p>

        <hr class="my-4">

        <p class="text-center">
          {{ callToAction }}
        </p>

        <p class="lead">
          <router-link :to="path" class="btn btn-primary btn-lg" role="button">
            Log In Now
          </router-link>
        </p>
      </div>

      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
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
