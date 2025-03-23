<template>
  <BasePanel title="Horse List (1–20)">
    <table v-if="horses.length" class="horses">
      <thead class="horses__header">
        <tr class="horses__header-row">
          <th class="horses__header-item" v-for="col in columns" :key="col">{{ col }}</th>
        </tr>
      </thead>
      <tbody class="horses__body">
        <tr class="horses__body-row" v-for="horse in horses" :key="horse.id">
          <td class="horses__body-item">{{ horse.name }}</td>
          <td class="horses__body-item">{{ horse.condition }}</td>
          <td
            class="horses__body-item horses__body-item--color"
            :style="{ backgroundColor: horse.color }"
          >
            <span class="horses__body-item-text"> {{ horse.color }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <EmptyState v-else>No horses available.</EmptyState>
  </BasePanel>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import BasePanel from '@/components/tables/BasePanel.vue';
import EmptyState from '@/components/tables/EmptyState.vue';

const store = useStore();
const horses = computed(() => store.state.horses.horses);
const columns = ['Name', 'Condition', 'Color'];
</script>

<style scoped>
.horses {
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;
}

.horses__header-item,
.horses__body-item {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
}

.horses__body-item--color {
  background-color: inherit;
}

.horses__body-item-text {
  display: inline-block;
}
</style>
