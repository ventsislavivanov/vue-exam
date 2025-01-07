<script>
export default {

}
</script>

<template>
  <div class="container vh-100 d-flex justify-content-center align-items-center">
    <div class="card shadow-sm p-4" style="max-width: 400px; width: 100%;">
      <h3 class="text-center mb-4">
        Forgot Password
      </h3>
      <p class="text-center">
        Enter your email address below, and we'll send you instructions to reset your password.
      </p>
      <form>
        <div class="input-group mb-3">
          <span class="input-group-text">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </span>
          <input type="email" class="form-control" placeholder="Enter your email">
        </div>
        <button type="submit" class="btn btn-primary w-100">Send Reset Link</button>
      </form>
      <p class="text-center mt-3">
        <router-link :to="{ name: 'login' }">Back to Login</router-link>
      </p>
    </div>
  </div>
</template>

