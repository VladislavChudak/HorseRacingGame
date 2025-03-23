<template>
  <ControlButton class="generate-button" :onClick="generate" :disabled="racesStarted"
    >Generate Program</ControlButton
  >
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ControlButton from './ControlButton.vue';

const store = useStore();
const generate = () => {
  store.dispatch('races/initializeGame');
};

const racesStarted = computed(() => store.state.races.racesStarted);
</script>

<style scoped>
.generate-button {
  background-color: #c74c3c;
  color: white;
}

.generate-button:hover:enabled,
.generate-button:focus:enabled {
  background-color: #b44433;
}
</style>
