<script>
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import FormFieldset from "../components/FormFieldset.vue";
import {useAuthStore} from "../stores/useAuthStore.js";

export default {
  components: {
    FormFieldset
  },
  methods: {
    async onsubmit() {
      await this.authsStore.login(this.formData);
      this.$router.push({ name: 'movies' });
    }
  },
  setup() {
    return {
      v$: useVuelidate(),
      authsStore: useAuthStore(),
    };
  },
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  validations() {
    return {
      formData: {
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(3)
        },
      },
    };
  },
}
</script>

<template>
  <div class="container">
    <div class="container vh-100 d-flex justify-content-center align-items-center">
      <div class="card shadow-sm p-4" style="max-width: 400px; width: 100%;">
        <h3 class="text-center mb-4">
          Login
        </h3>

        <form @submit.prevent="onsubmit">
          <FormFieldset
            :icon="['fas', 'user']"
            :errors="v$.formData.email.$errors"
            label="Email"
            name="email"
          >
            <input
              v-model="formData.email"
              @blur="v$.formData.email.$touch"
              :class="[
                'form-control',
                v$.formData.password.$errors.length > 0 ? 'is-invalid' : '',
                !v$.formData.email.$errors.length && !v$.formData.email.$invalid > 0 ? 'is-valid' : ''
              ]"
              type="email"
              placeholder="Place enter email..."
            >
          </FormFieldset>

          <FormFieldset
            :icon="['fas', 'lock']"
            :errors="v$.formData.password.$errors"
            label="Password"
            name="password"
          >
            <input
              v-model="formData.password"
              @blur="v$.formData.password.$touch"
              :class="[
                'form-control',
                v$.formData.password.$errors.length > 0 ? 'is-invalid' : '',
                !v$.formData.password.$errors.length > 0 && !v$.formData.password.$invalid ? 'is-valid' : ''
              ]"
              type="password"
              placeholder="Place enter password..."
            >
          </FormFieldset>

          <button :disabled="v$.formData.$invalid" type="submit" class="btn btn-primary w-100">
            Login
          </button>
        </form>

        <p class="text-center mt-3">
          Don't have an account?
          <router-link :to="{ name: 'sign-up' }">
            Sign up
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>


