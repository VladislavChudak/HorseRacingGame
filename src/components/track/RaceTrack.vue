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
import { useRaceStore } from '@/stores/races/useRaceStore';
import RaceLane from './RaceLane.vue';

const raceStore = useRaceStore();

const currentRace = computed(() => raceStore.currentRace);
const totalRaces = computed(() => raceStore.raceSchedule.length);

const currentLap = computed(() => {
  const index = raceStore.currentRaceIndex;
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
