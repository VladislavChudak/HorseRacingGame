<template>
  <button @click="onClick" :disabled="disabled" class="control-button">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  onClick: Function,
  disabled: Boolean,
});
</script>

<style scoped>
.control-button {
  padding: 10px 16px;
  border: 1px solid #aaa;
  border-radius: 6px;
  background-color: #f1f1f1;
  font-size: 14px;
  font-weight: bold;
  color: #111;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.control-button:hover:enabled {
  background-color: #e2e2e2;
  border-color: #888;
}

.control-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
