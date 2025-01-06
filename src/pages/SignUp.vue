<script>
import useVuelidate from '@vuelidate/core';
import { alphaNum, email, helpers, maxLength, minLength, numeric, required, sameAs } from '@vuelidate/validators';

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        dob: '',
      },
    };
  },
  validations: {
    formData: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required, minLength: minLength(8) },
      confirmPassword: { required, sameAsPassword: sameAs('password') },
      gender: { required },
      dob: { required },
    },
  },
};
</script>

<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card p-4">
          <h3 class="text-center mb-4">
            Register User
          </h3>

          <form action="/register" method="POST">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <input
                    id="firstName"
                    v-model="v$.formData.firstName.$model"
                    type="text"
                    class="form-control"
                    name="firstName"
                    placeholder="First Name"
                    required
                  >
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <input
                    id="lastName"
                    v-model="v$.formData.lastName.$model"
                    type="text"
                    class="form-control"
                    name="lastName"
                    placeholder="Last Name"
                    required
                  >
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <input
                    id="email"
                    v-model="v$.formData.email.$model"
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Email"
                    required
                  >
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <input
                    id="password"
                    v-model="v$.formData.password.$model"
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Password"
                    required
                  >
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <input
                    id="confirmPassword"
                    v-model="v$.formData.confirmPassword.$model"
                    type="password"
                    class="form-control"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  >
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="gender" class="form-label">Gender</label><br>

                  <input
                    id="male"
                    type="radio"
                    name="gender"
                    value="Male"
                    class="form-check-input"
                  >
                  <label for="male" class="form-check-label">Male</label><br>

                  <input
                    id="female"
                    type="radio"
                    name="gender"
                    value="Female"
                    class="form-check-input"
                  >
                  <label for="female" class="form-check-label">Female</label><br>

                  <input
                    id="other"
                    type="radio"
                    name="gender"
                    value="Other"
                    class="form-check-input"
                  >
                  <label for="other" class="form-check-label">Other</label>
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <input
                    id="dob"
                    type="date"
                    class="form-control"
                    name="dob"
                    placeholder="Date of Birth"
                    required
                  >
                </div>

                <div class="mb-3">
                  <input
                    id="phone"
                    type="tel"
                    class="form-control"
                    name="phone"
                    placeholder="Phone"
                  >
                </div>

                <div class="mb-3">
                  <input
                    id="address"
                    type="text"
                    class="form-control"
                    name="address"
                    placeholder="Address"
                  >
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="captcha" class="form-label">Captcha</label>
              <!-- Вгради CAPTCHA тук -->
            </div>

            <button type="submit" class="btn btn-primary w-100">
              Register
            </button>
          </form>
        </div>
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
