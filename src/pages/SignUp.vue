<script>
import useVuelidate from '@vuelidate/core';
import { alphaNum, email, helpers, maxLength, minLength, numeric, required, sameAs } from '@vuelidate/validators';
import FormFieldset from '../components/FormFieldset.vue';
import FormRadio from '../components/FormRadio.vue';
import { validationRules } from '../helpers/validationRules.js';

const egn = validationRules.egn;
const separateNames = helpers.regex(/^[A-Z][a-z]+ [A-Z][a-z]+$/);

export default {
  components: { FormRadio, FormFieldset },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      formData: {
        fullName: null,
        email: null,
        password: null,
        confirmPassword: null,
        gender: null,
        pin: null,
        dob: null,
        phone: null,
        address: null,
      },
      genderOptions: ['Male', 'Female', 'Other'],
    };
  },
  watch: {
    'formData.pin': function (newVal) {
      if (newVal.length > 6) {
        this.formData.dob = this.extractBirthDate(this.formData.pin);
      }
      else {
        this.formData.dob = null;
      }
    },
  },
  methods: {
    onSubmit() {
      // dummy form only redirect

      this.$router.push({ name: 'login' });
    },
    extractBirthDate(pin) {
      let year = pin.substring(0, 2);
      let month = pin.substring(2, 4);
      const day = pin.substring(4, 6);

      if (month >= 40 && month <= 52) {
        month = month - 40;
        year = 20 + year;
      }
      else if (month >= 20 && month <= 32) {
        month = month - 20;
        year = 18 + year;
      }
      else if (month >= 1 && month <= 12) {
        month = +month;
        year = 19 + year;
      }

      if (month <= 9)
        month = `0${month}`;

      return `${day}/${month}/${year}`;
    },
  },
  validations() {
    return {
      formData: {
        fullName: {
          required,
          separateNames: helpers.withMessage('Field must contain two names (letters only) separated by a space. Both should start with a capital letter', separateNames),
        },
        email: { required, email },
        password: {
          required,
          minLength: minLength(4),
          maxLength: maxLength(10),
          alphaNum,
        },
        confirmPassword: { sameAsPassword: sameAs(this.formData.password) },
        pin: {
          required,
          egn,
        },
        phone: {
          required,
          numeric,
          minLength: minLength(9),
          maxLength: maxLength(9),
        },
        address: { required },
      },
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="container vh-100 d-flex justify-content-center align-items-center">
      <div class="card shadow-sm p-4 bg-dark-subtle" style="max-width: 600px; width: 100%;">
        <h3 class="text-center mb-4">
          Sign up user
        </h3>

        <form @submit.prevent="onSubmit">
          <div class="row">
            <div class="col-md-12">
              <FormFieldset
                :icon="['fas', 'user']"
                :errors="v$.formData.fullName.$errors"
                name="fullName"
              >
                <input
                  v-model="formData.fullName"
                  type="text"
                  placeholder="Full Name"
                  class="form-control"
                  :class="[v$.formData.fullName.$errors.length > 0 ? 'is-invalid' : '']"
                  @blur="v$.formData.fullName.$touch"
                >
              </FormFieldset>
            </div>

            <div class="col-md-12">
              <FormFieldset
                :icon="['fas', 'envelope']"
                :errors="v$.formData.email.$errors"
                name="email"
              >
                <input
                  v-model="formData.email"
                  class="form-control" :class="[v$.formData.email.$errors.length > 0 ? 'is-invalid' : '']"
                  type="email"
                  placeholder="Email"
                  @blur="v$.formData.email.$touch"
                >
              </FormFieldset>
            </div>

            <div class="col-md-6">
              <FormFieldset
                :icon="['fas', 'unlock']"
                :errors="v$.formData.password.$errors"
                name="password"
              >
                <input
                  v-model="v$.formData.password.$model"
                  class="form-control"
                  :class="[v$.formData.password.$errors.length > 0 ? 'is-invalid' : '']"
                  type="password"
                  placeholder="Password..."
                >
              </FormFieldset>
            </div>

            <div class="col-md-6">
              <FormFieldset
                :icon="['fas', 'unlock-keyhole']"
                :errors="v$.formData.confirmPassword.$errors"
                name="confirmPassword"
              >
                <input
                  v-model="v$.formData.confirmPassword.$model"
                  class="form-control"
                  :class="[v$.formData.confirmPassword.$errors.length > 0 ? 'is-invalid' : '']"
                  type="password"
                  placeholder="Confirm password..."
                >
              </FormFieldset>
            </div>

            <div class="col-md-12">
              <FormFieldset
                :icon="['fas', 'id-card']"
                :errors="v$.formData.pin.$errors"
                name="pin"
              >
                <input
                  v-model="formData.pin"
                  class="form-control"
                  :class="[v$.formData.pin.$errors.length > 0 ? 'is-invalid' : '']"
                  placeholder="Personal identification number (EGN)"
                  type="text"
                  @blur="v$.formData.pin.$touch"
                >
              </FormFieldset>
            </div>

            <div class="col-md-12">
              <FormFieldset
                :icon="['fas', 'phone-volume']"
                :errors="v$.formData.phone.$errors"
                name="phone"
              >
                <select class="form-select" style="max-width: 120px;">
                  <option value="+359">
                    +359
                  </option>

                  <option value="+971">
                    +971
                  </option>

                  <option value="+972">
                    +972
                  </option>

                  <option value="+198">
                    +198
                  </option>

                  <option value="+701">
                    +701
                  </option>
                </select>

                <input
                  v-model.number="formData.phone"
                  :class="[v$.formData.phone.$errors.length > 0 ? 'is-invalid' : '']"
                  type="text"
                  placeholder="Phone number"
                  class="form-control"
                  @blur="v$.formData.phone.$touch"
                >
              </FormFieldset>
            </div>
          </div>

          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-12">
                  <FormFieldset
                    :icon="['fas', 'location-pin']"
                    name="address"
                  >
                    <input
                      v-model="v$.formData.address.$model"
                      class="form-control"
                      type="text"
                      placeholder="Address"
                    >
                  </FormFieldset>
                </div>

                <div class="col-md-12">
                  <FormFieldset
                    :disabled="true"
                    :icon="['fas', 'calendar']"
                    name="dob"
                  >
                    <input
                      v-model="formData.dob"
                      class="form-control"
                      type="text"
                      placeholder="Date of Birth"
                    >
                  </FormFieldset>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <FormRadio
                name="Gender"
                :options="genderOptions"
              />
            </div>
          </div>

          <button :disabled="v$.formData.$invalid" type="submit" class="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
