<template>
  <BasePanel title="Results">
    <div v-if="results.length">
      <RaceTable
        v-for="result in results"
        :key="result.raceId"
        :title="`Lap ${result.raceId}`"
        :data="result.placements"
        :columns="['Position', 'Name']"
      />
    </div>
    <EmptyState v-else>No race results yet.</EmptyState>
  </BasePanel>
</template>

<script setup>
import { computed } from 'vue';
import { useResultsStore } from '@/stores/results/useResultsStore';
import BasePanel from './BasePanel.vue';
import RaceTable from './RaceTable.vue';
import EmptyState from './EmptyState.vue';

const resultsStore = useResultsStore();
const results = computed(() => resultsStore.results);
</script>
