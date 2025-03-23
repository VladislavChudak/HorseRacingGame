<template>
  <ControlButton :onClick="start" :disabled="!horsesGenerated">Start</ControlButton>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ControlButton from './ControlButton.vue';

const store = useStore();
const start = () => {
  store.dispatch('races/startNewRace');
};
const horsesGenerated = computed(
  () => store.state.horses.horses.length && !store.state.races.racesStarted
);
</script>
