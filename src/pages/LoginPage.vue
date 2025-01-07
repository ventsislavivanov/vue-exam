<script>
import {authenticationUser} from "../services/movieServices.js";

export default {
  methods: {
    async onsubmit() {
      const res = await authenticationUser();
      console.log(res)
    }
  }
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
          <div class="input-group mb-3">
            <span class="input-group-text">
              <font-awesome-icon :icon="['fas', 'user']" />
            </span>
            <input type="email" class="form-control" placeholder="Enter your email">
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">
             <font-awesome-icon :icon="['fas', 'lock']" />
            </span>
            <input type="password" class="form-control" placeholder="Enter your password">
          </div>
          <button type="submit" class="btn btn-primary w-100">
            Login
          </button>
        </form>

        <p class="text-center mt-3">
          <router-link :to="{ name: 'forgot-password' }">
            Forgot password?
          </router-link>
        </p>

        <p class="text-center">
          Don't have an account?
          <router-link :to="{ name: 'sign-up' }">
            Sign up
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>


