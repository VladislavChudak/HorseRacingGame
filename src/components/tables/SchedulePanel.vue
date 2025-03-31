<template>
  <BasePanel title="Schedule">
    <div v-if="schedule.length" class="schedule-panel__content">
      <RaceTable
        v-for="race in schedule"
        :key="race.id"
        :title="`Lap ${race.id} - ${race.distance}m`"
        :data="race.horses"
        :columns="['Position', 'Name']"
        class="schedule-panel__race-table"
      />
    </div>
    <EmptyState v-else class="schedule-panel__empty-state"
      >No race schedule generated yet.</EmptyState
    >
  </BasePanel>
</template>

<script setup>
import { computed } from 'vue';
import { useRaceStore } from '@/stores/races/useRaceStore';
import BasePanel from './BasePanel.vue';
import RaceTable from './RaceTable.vue';
import EmptyState from './EmptyState.vue';

const raceStore = useRaceStore();
const schedule = computed(() => raceStore.raceSchedule);
</script>
