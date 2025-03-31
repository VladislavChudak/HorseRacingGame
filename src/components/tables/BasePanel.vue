<template>
  <div class="base-panel">
    <h3 class="base-panel__title">{{ title }}</h3>
    <div class="base-panel__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
.base-panel {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  padding: 10px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.base-panel__title {
  font-weight: bold;
  margin-bottom: 10px;
  flex-shrink: 0;
}

.base-panel__content {
  flex: 1;
  overflow-y: auto;
}
</style>
