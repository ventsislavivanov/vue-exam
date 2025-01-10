<script>
export default {
  props: {
    label: String,
    name: {
      type: String,
      required: true,
    },
    errors: {
      type: Array,
      default: () => []
    },
    icon: {
      type: Array,
      default: () => []
    },
    inputGroupPrependName: String,
    disabled: Boolean,
  },
}
</script>

<template>
  <fieldset
    :disabled="disabled"
    class="form-group mb-3"
  >
    <label
      v-if="label"
      :for="name"
      class="control-label"
    >
      {{ label }}
    </label>

    <div class="input-group">
      <span
        v-if="icon.length > 0"
        class="input-group-text"
      >
        <font-awesome-icon :icon="icon" />
      </span>

      <slot />

      <div
        v-for="error of errors"
        :key="error.$uid"
        class="invalid-feedback"
      >
        {{ error.$message }}
      </div>

      <div class="valid-feedback">Success! You've done it.</div>
    </div>
  </fieldset>
</template>

<style scoped>

</style>