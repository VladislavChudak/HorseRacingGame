<template>
  <ControlButton :onClick="start" :disabled="!horsesGenerated">Start</ControlButton>
</template>

<script setup>
import { computed } from 'vue';
import { useRaceStore } from '@/stores/races/useRaceStore';
import { useHorseStore } from '@/stores/horses/useHorseStore';
import ControlButton from './ControlButton.vue';

const raceStore = useRaceStore();
const horseStore = useHorseStore();
const start = () => {
  raceStore.startNewRace();
};
const horsesGenerated = computed(() => horseStore.horses.length && !raceStore.racesStarted);
</script>
