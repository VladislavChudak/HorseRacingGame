<template>
  <ControlButton class="generate-button" :onClick="generate" :disabled="racesStarted">
    Generate Program
  </ControlButton>
</template>

<script setup>
import { computed } from 'vue';
import { useRaceStore } from '@/stores/races/useRaceStore';
import ControlButton from './ControlButton.vue';

const raceStore = useRaceStore();

const generate = () => {
  raceStore.initializeGame();
};

const racesStarted = computed(() => raceStore.racesStarted);
</script>

<style lang="scss" scoped>
.generate-button {
  background-color: #c74c3c;
  color: white;
}

.generate-button:hover:enabled,
.generate-button:focus:enabled {
  background-color: #b44433;
}
</style>
