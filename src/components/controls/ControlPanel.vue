<template>
  <div class="control-panel">
    <h1 class="control-panel__title">Horse Racing</h1>
    <div class="control-panel__buttons">
      <GenerateButton />
      <StartButton />
      <PauseButton />
    </div>
  </div>
</template>

<script setup>
import GenerateButton from './GenerateButton.vue';
import StartButton from './StartButton.vue';
import PauseButton from './PauseButton.vue';
</script>

<style lang="scss" scoped>
.control-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px;
}

.control-panel__title {
  font-size: 24px;
  margin-bottom: 10px;
}

.control-panel__buttons {
  display: flex;
  gap: 10px;
}
</style>
