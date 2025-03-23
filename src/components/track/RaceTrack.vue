<template>
  <div class="race-track">
    <div v-if="currentLap" class="race-track__current-lap">
      {{ currentLap }}
    </div>

    <div class="race-track__lanes">
      <RaceLane
        v-for="(horse, index) in currentRace?.horses || []"
        :key="horse.id"
        :horse="horse"
        :lane="index + 1"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import RaceLane from './RaceLane.vue';

const store = useStore();

const currentRace = computed(() => store.getters['races/currentRace']);
const totalRaces = computed(() => store.state.races.raceSchedule.length);

const currentLap = computed(() => {
  const index = store.state.races.currentRaceIndex;
  const race = currentRace.value;

  if (!race || totalRaces.value === index) return 'Press Start to begin the race';

  return `Lap ${index + 1} / ${totalRaces.value} — ${race.distance}m`;
});
</script>

<style scoped>
.race-track {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.race-track__current-lap {
  font-weight: bold;
  text-align: center;
  padding: 6px 0;
  font-size: 16px;
}

.race-track__lanes {
  flex-grow: 1;
  position: relative;
  padding: 10px;
  padding-left: 0;
  background: #eee;
  border-right: 4px solid #c74c3c;
}
</style>
