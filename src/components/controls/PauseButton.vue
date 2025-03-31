<template>
  <ControlButton class="pause-button" :onClick="toggle" :disabled="!racesStarted">
    {{ label }}
  </ControlButton>
</template>

<script setup>
import { computed } from 'vue';
import { useRaceStore } from '@/stores/races/useRaceStore';
import ControlButton from './ControlButton.vue';

const raceStore = useRaceStore();
const toggle = () => {
  raceStore.togglePause();
};

const racesStarted = computed(() => raceStore.racesStarted);
const label = computed(() => (raceStore.isRacePaused ? 'Resume' : 'Pause'));
</script>

<style scoped>
.pause-button {
  min-width: 100px;
}
</style>
