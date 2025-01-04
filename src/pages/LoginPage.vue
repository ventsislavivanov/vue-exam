<script>

</script>

<template>
  <div class="container">
    <div class="container vh-100 d-flex justify-content-center align-items-center">
      <div class="card shadow-sm p-4" style="max-width: 400px; width: 100%;">
        <h3 class="text-center mb-4">
          Login
        </h3>
        <form>
          <div class="mb-3">
            <input id="email" type="email" class="form-control" placeholder="Enter your email" required>
          </div>

          <div class="mb-3">
            <input id="password" type="password" class="form-control" placeholder="Enter your password" required>
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

<style scoped>
.card {
  background-color: #495057;
  color: white;
}
.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-primary:hover {
  background-color: #0a58ca;
  border-color: #0a53be;
}
a {
  color: #0d6efd;
}
a:hover {
  color: #0a58ca;
}
</style>
