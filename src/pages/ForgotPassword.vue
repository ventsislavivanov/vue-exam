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
        <div class="mb-3">
          <input id="email" type="email" class="form-control" placeholder="Enter your email" required>
        </div>
        <button type="submit" class="btn btn-primary w-100">Send Reset Link</button>
      </form>
      <p class="text-center mt-3">
        <router-link :to="{ name: 'login' }">Back to Login</router-link>
      </p>
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
