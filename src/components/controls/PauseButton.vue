<template>
  <ControlButton class="pause-button" :onClick="toggle" :disabled="!racesStarted">{{
    label
  }}</ControlButton>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ControlButton from './ControlButton.vue';

const store = useStore();
const toggle = () => {
  store.dispatch('races/togglePause');
};

const racesStarted = computed(() => store.state.races.racesStarted);
const label = computed(() => (store.state.races.isRacePaused ? 'Resume' : 'Pause'));
</script>

<style scoped>
.pause-button {
  min-width: 100px;
}
</style>
