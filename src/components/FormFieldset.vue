<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    errors: {
      type: Array,
      required: true,
    },
    icon: {
      type: Array,
      default: () => []
    },
    inputGroupPrependName: String,
    required: Boolean,
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