<template>
  <div class="mb-3">
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <input
      :id="id"
      :value="modelValue"
      v-bind="$attrs"
      :class="{ 'is-valid': isValid }"
      @input="$emit('update:modelValue', $event.target.value)"
      class="form-control"
    />
    <div v-if="isValid" class="valid-feedback">
      {{ validText }}
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: 'input-id'
    },
    label: {
      type: String
    },
    modelValue: {
      type: [String, Number, null],
      default: ''
    },
    validText: {
      type: String,
      default: 'Champ valide'
    }
  },
  emits: ['update:modelValue'],
  computed: {
    isValid() {
      return this.modelValue && this.modelValue.length > 2
    }
  }
}
</script>
