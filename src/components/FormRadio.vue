<script>
export default {
  props: {
    name: String,
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    capitalizeFirstLetter(string) {
      return String(string).charAt(0).toUpperCase() + String(string).slice(1);
    },
  },
};
</script>

<template>
  <div class="mb-3">
    <label for="gender" class="form-label">{{ capitalizeFirstLetter(name) }}</label><br>

    <template v-for="option in options">
      <input
        :id="option"
        type="radio"
        :name="name"
        :value="option"
        class="form-check-input"
      >
      <label :for="option" class="form-check-label">{{capitalizeFirstLetter(option)}}</label><br>
    </template>
  </div>
</template>

<style scoped>
label {
  padding-left: 5px;
}
</style>
