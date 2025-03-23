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
import { useStore } from 'vuex';
import BasePanel from './BasePanel.vue';
import RaceTable from './RaceTable.vue';
import EmptyState from './EmptyState.vue';

const store = useStore();
const results = computed(() => store.state.results.results);
</script>
